"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const artists = [
  { name: "Maya Chen", image: "/placeholder.svg?height=200&width=200" },
  { name: "Alex Rivera", image: "/placeholder.svg?height=200&width=200" },
  { name: "Zara Kim", image: "/placeholder.svg?height=200&width=200" },
  { name: "Jordan Blake", image: "/placeholder.svg?height=200&width=200" },
  { name: "Sam Torres", image: "/placeholder.svg?height=200&width=200" },
  { name: "Riley Park", image: "/placeholder.svg?height=200&width=200" },
]

export default function InfiniteMarquee() {
  const duplicatedArtists = [...artists, ...artists, ...artists]

  return (
    <div className="overflow-hidden bg-gray-900 py-12">
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="flex gap-8 w-max"
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedArtists.map((artist, index) => (
          <div key={`${artist.name}-${index}`} className="flex-shrink-0 w-64 h-32 relative group cursor-pointer">
            <Image
              src={artist.image || "/placeholder.svg"}
              alt={artist.name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
              <h3 className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {artist.name}
              </h3>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
