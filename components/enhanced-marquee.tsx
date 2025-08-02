"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "@/lib/data";

export default function EnhancedMarquee() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20" />
      </div>

      <div className="relative">
        {/* First Row - Fast */}
        <motion.div 
          className="animate-marquee-fast group-hover:pause flex min-w-full flex-shrink-0 items-center justify-around gap-8 mb-8"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {[...galleryImages, ...galleryImages].map((src, index) => (
            <motion.div 
              key={`fast-${index}`}
              className="relative h-32 w-48 flex-shrink-0 group cursor-pointer"
              whileHover={{ 
                scale: 1.1,
                rotateY: 15,
                z: 50
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={`Art piece ${index + 1}`}
                fill
                className="object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - Slow (Reverse) */}
        <motion.div 
          className="animate-marquee-slow group-hover:pause flex min-w-full flex-shrink-0 items-center justify-around gap-8"
          style={{ direction: 'rtl' }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {[...galleryImages, ...galleryImages].map((src, index) => (
            <motion.div 
              key={`slow-${index}`}
              className="relative h-40 w-56 flex-shrink-0 group cursor-pointer"
              whileHover={{ 
                scale: 1.15,
                rotateY: -15,
                z: 50
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={`Art piece ${index + 1}`}
                fill
                className="object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.button
                  className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
    </div>
  );
} 