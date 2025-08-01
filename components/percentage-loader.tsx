"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface PercentageLoaderProps {
  onComplete: () => void
  isComplete: boolean
}

export default function PercentageLoader({ onComplete, isComplete }: PercentageLoaderProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2500
    const increment = 100 / (duration / 16)

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment + Math.random() * 2
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 200)
          return 100
        }
        return next
      })
    }, 16)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          className="text-8xl md:text-9xl font-light text-white mb-4"
          animate={{ scale: isComplete ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {Math.floor(count)}%
        </motion.div>
        <motion.div
          className="w-64 h-0.5 bg-gray-800 mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: count / 100 }}
          transition={{ duration: 0.1 }}
        >
          <div className="h-full bg-white origin-left" />
        </motion.div>
      </div>
    </motion.div>
  )
}
