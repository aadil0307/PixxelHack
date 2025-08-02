"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  { 
    id: 1, 
    name: "Eleanor Vance", 
    role: "Lead Curator", 
    image: "/images/artist-1.svg",
    bio: "Pioneering digital art curator with 10+ years of experience in the NFT space."
  },
  { 
    id: 2, 
    name: "Marcus Thorne", 
    role: "Digital Artist", 
    image: "/images/artist-2.svg",
    bio: "Award-winning digital artist specializing in generative art and AI collaboration."
  },
  { 
    id: 3, 
    name: "Aria Chen", 
    role: "VR Specialist", 
    image: "/images/artist-3.svg",
    bio: "Expert in immersive experiences and virtual reality art installations."
  },
  { 
    id: 4, 
    name: "Liam Sterling", 
    role: "Blockchain Dev", 
    image: "/images/artist-4.svg",
    bio: "Blockchain architect building the future of digital art infrastructure."
  },
];

export default function EnhancedTeamSection() {
  const [activeImage, setActiveImage] = useState(teamMembers[0].image);
  const [activeMember, setActiveMember] = useState(teamMembers[0]);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen gap-8 p-8 md:p-16">
      {/* Left side: Sticky Image */}
      <div className="md:sticky top-0 h-[50vh] md:h-screen flex items-center justify-center">
        <div className="relative w-full max-w-md h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={activeImage}
                alt="Team member portrait"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </AnimatePresence>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"
            animate={{ 
              y: [0, 10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
      
      {/* Right side: List of names */}
      <div className="flex flex-col justify-center space-y-6 pt-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Curators
        </motion.h2>
        
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            onMouseEnter={() => {
              setActiveImage(member.image);
              setActiveMember(member);
            }}
            className="p-6 border-l-4 border-transparent hover:border-gradient-to-b from-purple-500 to-blue-500 transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            whileHover={{ 
              x: 10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.p 
              className="text-3xl font-semibold mb-2 group-hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              {member.name}
            </motion.p>
            <motion.p 
              className="text-lg text-neutral-400 mb-3 group-hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.01 }}
            >
              {member.role}
            </motion.p>
            <motion.p 
              className="text-sm text-neutral-500 leading-relaxed"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: activeMember.id === member.id ? 1 : 0.7,
                height: "auto"
              }}
              transition={{ duration: 0.3 }}
            >
              {member.bio}
            </motion.p>
            
            {/* Hover Indicator */}
            <motion.div
              className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500"
              initial={{ scaleY: 0 }}
              whileHover={{ scaleY: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originY: 0 }}
            />
          </motion.div>
        ))}
        
        {/* Stats Section */}
        <motion.div
          className="mt-12 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">Team Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Years Experience", value: "50+" },
              { label: "Artworks Curated", value: "1000+" },
              { label: "Artists Supported", value: "200+" },
              { label: "Exhibitions", value: "25+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 