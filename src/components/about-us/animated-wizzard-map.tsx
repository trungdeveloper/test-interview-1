"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mapimg from "assets/images/Pin-map.png";
import wizzard from "assets/images/wizzard.png";

export default function AnimatedWizardMap() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative w-full mx-auto h-100 lg:h-[600px] overflow-hidden">
      {/* Map background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={mapimg}
          alt="World map with location pins"
          className="object-contain w-full h-full"
        />
      </div>

      {/* Animated wizard */}
      <motion.div
        className="absolute z-10"
        style={{
          top: "10%",
          left: "50%",
          x: "-50%",
        }}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        {/* Wizard image */}
        <motion.div
          animate={{
            rotate: isHovering ? [0, -5, 5, 0] : 0,
            scale: isHovering ? 1.05 : 1,
          }}
          transition={{
            duration: isHovering ? 0.5 : 0.3,
            ease: "easeInOut",
          }}
        >
          <img src={wizzard} alt="Wizard character" width={250} height={300} />
        </motion.div>

        {/* Magic sparkles */}
        <AnimatePresence>
          {isHovering && (
            <>
              <SparkleEffect top="10%" left="20%" delay={0.1} />
              <SparkleEffect top="5%" left="60%" delay={0.2} />
              <SparkleEffect top="30%" left="80%" delay={0.3} />
              <SparkleEffect top="40%" left="10%" delay={0.4} />
            </>
          )}
        </AnimatePresence>

        {/* Constant magic glow */}
        <motion.div
          className="absolute top-[35%] left-[15%] w-16 h-16 rounded-full bg-cyan-300 blur-xl opacity-70 z-[-1]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Magic trail */}
      <MagicTrail />
    </div>
  );
}

// Sparkle effect component
function SparkleEffect({ top, left, delay = 0 }) {
  return (
    <motion.div
      className="absolute w-3 h-3 bg-cyan-300 rounded-full"
      style={{ top, left }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 1,
        delay,
        repeat: 2,
        repeatType: "reverse",
      }}
    />
  );
}

function MagicTrail() {
  const particles = Array.from({ length: 8 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 right-1/2 rounded-full bg-cyan-400"
      initial={{
        x: `calc(50% - ${Math.random() * 100 - 50}px)`,
        y: `calc(30% + ${i * 30}px)`,
        opacity: 0.8,
      }}
      animate={{
        x: `calc(50% - ${Math.random() * 200 - 100}px)`,
        y: [`calc(30% + ${i * 30}px)`, `calc(70% + ${i * 10}px)`],
        opacity: [0.8, 0],
      }}
      transition={{
        duration: 3 + i * 0.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeOut",
        delay: i * 0.2,
      }}
    />
  ));

  return <>{particles}</>;
}
