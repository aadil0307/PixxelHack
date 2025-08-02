"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ScrambledText from "./scrambled-text"
import DistortedImageHover from "./distorted-image-hover"
import { featuredArtists as artistsData } from "@/lib/data"

const featuredArtists = artistsData.map((artist, index) => ({
  id: artist.id,
  name: artist.name,
  specialty: artist.specialty,
  bio: `${artist.name} is a ${artist.specialty} artist with ${artist.totalSales} in total sales.`,
  artworks: Math.floor(Math.random() * 50 + 20), // Generate random artwork count
  totalSales: artist.totalSales,
  image: artist.image,
  hoverImage: artist.hoverImage,
}))

export default function FeaturedArtists() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <ScrambledText text="FEATURED ARTISTS" className="text-4xl md:text-6xl font-light tracking-wider mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Meet the visionary creators shaping the future of digital art
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <DistortedImageHover image={artist.hoverImage}>
                <div className="relative overflow-hidden bg-gray-900 aspect-[3/4] mb-6 cursor-pointer">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                    <Image
                      src={artist.image || "/placeholder.svg"}
                      alt={artist.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-sm text-gray-300">{artist.artworks} artworks</div>
                    <div className="text-xs text-gray-400">{artist.totalSales} total sales</div>
                  </div>
                </div>
              </DistortedImageHover>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-light mb-1">{artist.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{artist.specialty}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{artist.bio}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
