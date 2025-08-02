"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ScrambledText from "./scrambled-text"
import { heroImages } from "@/lib/data"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-3 gap-4 h-full">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="relative h-full"
            >
              <Image
                src={image}
                alt={`Hero background ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ScrambledText
            text="DIGITAL RENAISSANCE"
            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wider mb-8"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Where visionary artists meet collectors in an exclusive digital sanctuary
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Explore Collection
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
          >
            Artist Portal
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-0.5 h-16 bg-white"
        />
      </motion.div>
    </section>
  )
}
