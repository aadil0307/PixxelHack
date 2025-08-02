"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { galleryImages, heroImages, aboutImages, contactImages } from "@/lib/data"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

  const menuItems = [
    { 
      name: "Gallery", 
      href: "/gallery", 
      image: galleryImages[0] // Use first gallery image
    },
    { 
      name: "Artists", 
      href: "/artists", 
      image: galleryImages[2] // Use third gallery image
    },
    { 
      name: "About", 
      href: "/about", 
      image: aboutImages[0] // Use first about image
    },
    { 
      name: "Contact", 
      href: "/contact", 
      image: contactImages[0] // Use first contact image
    },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 p-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-light tracking-wider">
            NEXUS
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 w-8 h-8 flex flex-col justify-center items-center"
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -4,
              }}
              className="w-6 h-0.5 bg-white block transition-all duration-300"
            />
            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              className="w-6 h-0.5 bg-white block mt-1 transition-all duration-300"
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -2 : 4,
              }}
              className="w-6 h-0.5 bg-white block mt-1 transition-all duration-300"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-30 flex items-center justify-center"
          >
            {/* Background Image */}
            <AnimatePresence>
              {hoveredImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={hoveredImage}
                    alt="Navigation background"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="text-center relative z-10">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="mb-8 relative"
                  onMouseEnter={() => setHoveredImage(item.image)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <Link
                    href={item.href}
                    className="text-6xl md:text-8xl font-light hover:text-gray-400 transition-colors duration-300 block relative overflow-hidden group cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span
                      className="absolute inset-0 bg-white"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
