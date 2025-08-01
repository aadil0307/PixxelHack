"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface ScrambledTextProps {
  text: string
  className?: string
}

export default function ScrambledText({ text, className = "" }: ScrambledTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"

  useEffect(() => {
    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join(""),
      )

      if (iteration >= text.length) {
        clearInterval(interval)
        setIsComplete(true)
      }

      iteration += 1 / 3
    }, 50)

    return () => clearInterval(interval)
  }, [text, characters])

  return (
    <motion.h1
      className={className}
      animate={{
        opacity: isComplete ? 1 : 0.8,
        scale: isComplete ? 1 : 0.98,
      }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
    </motion.h1>
  )
}
