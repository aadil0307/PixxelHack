"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Navigation from "@/components/navigation"
import StickyTeamList from "@/components/sticky-team-list"
import RippleEffect from "@/components/ripple-effect"
import ScrambledText from "@/components/scrambled-text"
import { aboutImages } from "@/lib/data"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <RippleEffect />
      <Navigation />

      <main className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <ScrambledText 
              text="ABOUT NEXUS" 
              className="text-6xl md:text-8xl font-light tracking-wider mb-8" 
            />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are a collective of visionaries, curators, and technologists dedicated to elevating digital art to its
              rightful place in the contemporary art world.
            </p>
          </motion.div>

          {/* About Images Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-32"
          >
            {aboutImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={image}
                  alt={`About image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>

          <StickyTeamList />

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <ScrambledText 
              text="OUR MISSION" 
              className="text-4xl md:text-6xl font-light mb-12" 
            />
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl font-medium mb-4">Curate</h3>
                <p className="text-gray-400">
                  We carefully select only the most innovative and thought-provoking digital artworks.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Connect</h3>
                <p className="text-gray-400">We bridge the gap between visionary artists and discerning collectors.</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Elevate</h3>
                <p className="text-gray-400">
                  We push the boundaries of what digital art can be and how it's experienced.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  )
}
