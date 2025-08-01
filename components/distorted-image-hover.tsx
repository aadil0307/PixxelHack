"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface DistortedImageHoverProps {
  children: React.ReactNode
  image: string
}

export default function DistortedImageHover({ children, image }: DistortedImageHoverProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isHovered])

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      {children}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed pointer-events-none z-50"
            style={{
              left: mousePosition.x - 150,
              top: mousePosition.y - 100,
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 2, -2, 0],
                scale: [1, 1.05, 0.95, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-lg"
              style={{
                filter: "blur(0.5px) contrast(1.1) saturate(1.2)",
              }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt="Hover preview"
                width={300}
                height={200}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 mix-blend-overlay" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
