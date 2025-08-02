"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Gallery", href: "/gallery" },
  { title: "Artists", href: "/artists" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const NavLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <motion.div
      className="relative"
      whileHover="hover"
      initial="initial"
    >
      <Link href={href}>
        <motion.div
          className="relative text-5xl md:text-6xl font-bold text-white uppercase cursor-pointer overflow-hidden"
          variants={{
            initial: { y: 0 },
            hover: { y: -5 }
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" }
            }}
            transition={{ duration: 0.3 }}
            className="block"
          >
            {title}
          </motion.span>
          <motion.span
            className="absolute inset-0 block"
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 }
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.span>
        </motion.div>
        
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
          variants={{
            initial: { scaleX: 0 },
            hover: { scaleX: 1 }
          }}
          style={{ originX: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
        />
      </Link>
    </motion.div>
  );
};

export default function EnhancedNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 p-3 bg-black/20 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/10 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Menu size={24} />
      </motion.button>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
              opacity: 0, 
              clipPath: 'circle(0% at 100% 0)' 
            }}
            animate={{ 
              opacity: 1, 
              clipPath: 'circle(150% at 100% 0)' 
            }}
            exit={{ 
              opacity: 0, 
              clipPath: 'circle(0% at 100% 0)' 
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.83, 0, 0.17, 1] 
            }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8"
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-50 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={32} />
            </motion.button>

            {/* Navigation Links */}
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <NavLink {...link} />
                </motion.div>
              ))}
            </div>

            {/* Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 