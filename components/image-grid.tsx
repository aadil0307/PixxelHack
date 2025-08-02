"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { featuredNFTs } from "@/lib/data"

const artworks = featuredNFTs

export default function ImageGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {artworks.map((artwork, index) => (
        <motion.div
          key={artwork.id}
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{
            once: true,
            margin: "-50px",
            amount: 0.3,
          }}
          className="group cursor-pointer"
        >
          <motion.div
            className="relative overflow-hidden bg-gray-900 aspect-square rounded-lg"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={artwork.image || "/placeholder.svg"}
                alt={artwork.title}
                fill
                className="object-cover transition-all duration-500 group-hover:brightness-110"
              />
            </motion.div>

            {/* Overlay on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-6 py-3 font-medium rounded-sm mb-3 hover:bg-gray-100 transition-colors"
                >
                  View Details
                </motion.button>
                <div className="text-white text-sm opacity-80">{artwork.category}</div>
              </motion.div>
            </motion.div>

            {/* Price tag */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 text-sm rounded-full backdrop-blur-sm"
            >
              {artwork.price}
            </motion.div>
          </motion.div>

          {/* Artwork info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1 + 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="mt-6 space-y-2"
          >
            <motion.h3
              className="text-xl font-light text-white group-hover:text-gray-300 transition-colors duration-300"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {artwork.title}
            </motion.h3>
            <motion.p
              className="text-gray-400 text-sm"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              by {artwork.artist}
            </motion.p>
            <motion.div
              className="flex items-center justify-between pt-2"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <span className="text-lg font-light text-white">{artwork.price}</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">{artwork.category}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
