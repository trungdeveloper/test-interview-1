"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLingui } from "@lingui/react/macro";
import { NAVS } from "../utils/constants";
import { LanguageSelector } from "../language-selector";

interface MenuItemProps {
  title: string;
  href: string;
}

const menuItems: MenuItemProps[] = [
  { title: "ABOUT US", href: "/about" },
  { title: "GAMES", href: "/games" },
  { title: "PARTNERS", href: "/partners" },
  { title: "CONTACT US", href: "/contact" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useLingui();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const preventScroll = (e: TouchEvent) => e.preventDefault();

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", preventScroll);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [isOpen]);

  return (
    <>
      {/* Menu Button */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <MenuIcon isOpen={isOpen} />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-dvh w-full max-w-[100%] sm:max-w-[320px] bg-white z-40 shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex h-dvh flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-2 border rounded-xl px-3 border-[#AFAFAF] ">
                  <LanguageSelector />
                </div>
              </div>
              <nav className="flex-1">
                <ul className="flex flex-col">
                  {NAVS.map((item, index) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className={cn(
                          "block py-6 text-center font-bold text-xl",
                          index < menuItems.length - 1 && "border-b"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {i18n._(item.title)}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface MenuIconProps {
  isOpen: boolean;
}

function MenuIcon({ isOpen }: MenuIconProps) {
  const variant = isOpen ? "opened" : "closed";

  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 8,
    },
  };

  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -8,
    },
  };

  const lineProps = {
    stroke: isOpen ? "black" : "white",
    strokeWidth: 2,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition: { duration: 0.3 },
  };

  return (
    <motion.svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="stroke-black"
      initial={false}
    >
      <motion.line x1="2" y1="4" x2="22" y2="4" variants={top} {...lineProps} />
      <motion.line
        x1="2"
        y1="12"
        x2="22"
        y2="12"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="2"
        y1="20"
        x2="22"
        y2="20"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
}
