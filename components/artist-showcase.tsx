"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ScrambledText from "./scrambled-text"

export default function ArtistShowcase() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ScrambledText text="ARTIST SPOTLIGHT" className="text-4xl md:text-6xl font-light tracking-wider mb-8" />
            <h3 className="text-2xl font-light mb-6 text-gray-300">Elena Vasquez</h3>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              "Digital art allows me to explore dimensions that traditional media cannot reach. Each piece is a journey
              into the quantum realm where possibilities are infinite and beauty emerges from chaos."
            </p>
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-light mb-2">47</div>
                <div className="text-gray-400 text-sm">Artworks</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">156.7</div>
                <div className="text-gray-400 text-sm">ETH Sales</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">2.3K</div>
                <div className="text-gray-400 text-sm">Collectors</div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-black transition-colors"
            >
              View Portfolio
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Elena Vasquez Portrait"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 bg-white text-black p-6 max-w-xs"
            >
              <h4 className="font-medium mb-2">Latest Work</h4>
              <p className="text-sm text-gray-600">"Quantum Entanglement #7" - Available March 15th</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
