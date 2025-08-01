"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import ImageGrid from "@/components/image-grid"
import RippleEffect from "@/components/ripple-effect"
import ColorWipeTransition from "@/components/color-wipe-transition"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <RippleEffect />
      <ColorWipeTransition />
      <Navigation />

      <main className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-8">GALLERY</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our curated collection of exceptional digital artworks from the world's most innovative creators.
            </p>
          </motion.div>

          <ImageGrid />
        </div>
      </main>
    </div>
  )
}
