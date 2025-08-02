"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { featuredNFTs } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

export default function EnhancedArtGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
    >
      {featuredNFTs.map((artwork, index) => (
        <motion.div 
          key={artwork.id} 
          variants={itemVariants} 
          className="group cursor-pointer"
          whileHover={{ 
            y: -10,
            transition: { duration: 0.3 }
          }}
        >
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative">
            {/* Image Container */}
            <div className="relative h-80 w-full overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image 
                  src={artwork.image} 
                  alt={artwork.title} 
                  fill 
                  className="object-cover transition-all duration-500 group-hover:brightness-110" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button
                    className="bg-white text-black px-6 py-3 font-medium rounded-full hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Price Tag */}
              <motion.div
                className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 text-sm rounded-full backdrop-blur-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {artwork.price}
              </motion.div>

              {/* Category Badge */}
              <motion.div
                className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 text-xs rounded-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {artwork.category}
              </motion.div>
            </div>

            {/* Content */}
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                {artwork.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">by {artwork.artist}</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {artwork.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
                <span className="text-lg font-light text-white">{artwork.price}</span>
                <motion.button
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Collect
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
} 