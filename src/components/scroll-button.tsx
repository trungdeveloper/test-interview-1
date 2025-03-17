import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ArrowIcon from "assets/icons/arrow-icon.svg?react";

const ScrollButton = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
      setIsAtBottom(atBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top or bottom
  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-10 h-16 w-16 bg-white rounded-full flex items-center justify-center cursor-pointer"
      style={{ boxShadow: "0px 4px 10px 0px #0000004D" }}
    >
      <motion.div
        animate={{ rotate: isAtBottom ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowIcon className="mt-1.5" />
      </motion.div>
    </div>
  );
};

export default ScrollButton;
