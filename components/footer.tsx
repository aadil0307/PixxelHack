"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-light tracking-wider mb-6">NEXUS</h3>
            <p className="text-gray-400 leading-relaxed">
              The premier destination for exclusive digital art and NFT collections.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Explore</h4>
            <ul className="space-y-3">
              {["Gallery", "Artists", "Collections", "Drops"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Community</h4>
            <ul className="space-y-3">
              {["Discord", "Twitter", "Instagram", "Medium"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Support</h4>
            <ul className="space-y-3">
              {["Help Center", "Contact", "Terms", "Privacy"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Nexus Gallery. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
