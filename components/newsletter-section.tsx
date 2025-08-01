"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import ScrambledText from "./scrambled-text"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
    setEmail("")
  }

  return (
    <section className="py-32 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ScrambledText text="STAY CONNECTED" className="text-4xl md:text-6xl font-light tracking-wider mb-8" />
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Be the first to know about exclusive drops, artist features, and community events
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-transparent border border-gray-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </form>

          {isSubscribed && (
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 mt-4">
              Thank you for subscribing!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
