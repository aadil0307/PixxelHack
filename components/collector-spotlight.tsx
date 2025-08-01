"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ScrambledText from "./scrambled-text"

const collectors = [
  {
    name: "Alexandra Sterling",
    collection: "142 pieces",
    focus: "Generative Art",
    quote: "Digital art represents the democratization of creativity in the 21st century.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "James Morrison",
    collection: "89 pieces",
    focus: "Abstract Digital",
    quote: "Each NFT tells a story that transcends traditional artistic boundaries.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sofia Chen",
    collection: "203 pieces",
    focus: "Cyberpunk Aesthetics",
    quote: "I collect the future - art that will define how we see tomorrow.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function CollectorSpotlight() {
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
          <ScrambledText text="COLLECTOR VOICES" className="text-4xl md:text-6xl font-light tracking-wider mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from the passionate collectors who are building the future of digital art
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {collectors.map((collector, index) => (
            <motion.div
              key={collector.name}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={collector.image || "/placeholder.svg"}
                    alt={collector.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </motion.div>
              </div>

              <h3 className="text-xl font-light mb-2">{collector.name}</h3>
              <p className="text-gray-400 text-sm mb-1">{collector.collection}</p>
              <p className="text-gray-500 text-sm mb-6">{collector.focus}</p>

              <blockquote className="text-gray-300 italic leading-relaxed">"{collector.quote}"</blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
