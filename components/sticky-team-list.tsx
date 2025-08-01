"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "Elena Vasquez",
    role: "Founder & Creative Director",
    bio: "Visionary curator with 15 years in contemporary art",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    name: "Marcus Chen",
    role: "Technical Director",
    bio: "Blockchain architect and digital art technologist",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    name: "Aria Nakamura",
    role: "Artist Relations",
    bio: "Connecting emerging artists with global audiences",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    name: "David Rodriguez",
    role: "Head of Acquisitions",
    bio: "Expert in digital art valuation and market trends",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    name: "Sophie Laurent",
    role: "Community Manager",
    bio: "Building bridges between collectors and creators",
    image: "/placeholder.svg?height=600&width=400",
  },
]

export default function StickyTeamList() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <section className="grid lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-light mb-12"
        >
          Our Team
        </motion.h2>

        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
            className="cursor-pointer group py-6 border-b border-gray-800 last:border-b-0"
          >
            <h3 className="text-2xl md:text-3xl font-light group-hover:text-gray-400 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-gray-400 mt-2">{member.role}</p>
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: hoveredMember === index ? 1 : 0,
                height: hoveredMember === index ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="text-gray-300 mt-4 overflow-hidden"
            >
              {member.bio}
            </motion.p>
          </motion.div>
        ))}
      </div>

      <div className="sticky top-32 h-96 lg:h-[600px] relative">
        <AnimatePresence mode="wait">
          {hoveredMember !== null && (
            <motion.div
              key={hoveredMember}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={teamMembers[hoveredMember].image || "/placeholder.svg"}
                alt={teamMembers[hoveredMember].name}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-2xl font-light text-white mb-2">{teamMembers[hoveredMember].name}</h4>
                <p className="text-gray-300">{teamMembers[hoveredMember].role}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {hoveredMember === null && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-600">
            <p className="text-xl">Hover over a team member</p>
          </div>
        )}
      </div>
    </section>
  )
}
