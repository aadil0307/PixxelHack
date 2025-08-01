"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ScrambledText from "./scrambled-text"

const upcomingDrops = [
  {
    id: 1,
    title: "Quantum Visions",
    artist: "Elena Vasquez",
    dropDate: "March 15, 2024",
    pieces: 25,
    startingPrice: "1.5 ETH",
    image: "/placeholder.svg?height=500&width=400",
    description: "A groundbreaking series exploring the intersection of quantum physics and digital art.",
  },
  {
    id: 2,
    title: "Neon Metropolis",
    artist: "Marcus Chen",
    dropDate: "March 22, 2024",
    pieces: 15,
    startingPrice: "2.0 ETH",
    image: "/placeholder.svg?height=500&width=400",
    description: "Cyberpunk-inspired cityscapes that blur the line between reality and imagination.",
  },
  {
    id: 3,
    title: "Organic Algorithms",
    artist: "Aria Nakamura",
    dropDate: "March 29, 2024",
    pieces: 30,
    startingPrice: "1.2 ETH",
    image: "/placeholder.svg?height=500&width=400",
    description: "Nature-inspired generative art created through advanced AI algorithms.",
  },
]

export default function ExclusiveDrops() {
  return (
    <section className="py-32 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <ScrambledText text="EXCLUSIVE DROPS" className="text-4xl md:text-6xl font-light tracking-wider mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Limited edition collections from our most celebrated artists, available only to verified collectors
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {upcomingDrops.map((drop, index) => (
            <motion.div
              key={drop.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-black aspect-[4/5] mb-6">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                  <Image src={drop.image || "/placeholder.svg"} alt={drop.title} fill className="object-cover" />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                >
                  <motion.button
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white text-black px-6 py-3 font-medium"
                  >
                    Get Notified
                  </motion.button>
                </motion.div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-sm text-gray-300 mb-2">{drop.dropDate}</div>
                  <div className="text-xs text-gray-400">
                    {drop.pieces} pieces • Starting at {drop.startingPrice}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-light mb-2">{drop.title}</h3>
                <p className="text-gray-400 mb-3">by {drop.artist}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{drop.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
