"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnhancedLoader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          // Wait for a moment after reaching 100 before hiding
          setTimeout(onLoadingComplete, 800);
          return 100;
        }
        return prevCount + 1;
      });
    }, 25); // Faster loading for better UX

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
      >
        <div className="text-center relative max-w-md mx-auto">
          {/* Main Counter */}
          <motion.div 
            className="relative font-bold text-8xl md:text-9xl mb-8"
            animate={isComplete ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="tabular-nums">{count}</span>
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-50 via-neutral-400 to-neutral-50 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              {count}
            </span>
          </motion.div>

          {/* Loading Text */}
          <motion.p 
            className="mt-4 text-lg md:text-xl font-semibold tracking-widest uppercase mb-8"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Your Digital Experience Is Loading
          </motion.p>

          {/* Progress Bar Container */}
          <div className="w-full max-w-sm mx-auto mb-8">
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-white rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            ))}
          </div>

          {/* Completion Animation */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  className="text-6xl"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 0.8 }}
                >
                  ✨
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 