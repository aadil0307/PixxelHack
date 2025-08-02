"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import EnhancedLoader from "@/components/enhanced-loader"
import EnhancedNavigation from "@/components/enhanced-navigation"
import HeroSection from "@/components/hero-section"
import EnhancedArtGrid from "@/components/enhanced-art-grid"
import EnhancedMarquee from "@/components/enhanced-marquee"
import InteractiveBackground from "@/components/interactive-background"
import ScrambledText from "@/components/scrambled-text"
import FeaturedArtists from "@/components/featured-artists"
import ExclusiveDrops from "@/components/exclusive-drops"
import CollectorSpotlight from "@/components/collector-spotlight"
import ArtistShowcase from "@/components/artist-showcase"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true)
      setTimeout(() => setIsLoading(false), 500)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && <EnhancedLoader onLoadingComplete={() => setLoadingComplete(true)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-black text-white relative overflow-hidden"
        >
          <InteractiveBackground />
          <EnhancedNavigation />

          <main>
            <HeroSection />

            {/* Featured Collection Section */}
            <section className="py-32 px-6">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-20"
                >
                  <ScrambledText
                    text="CURATED DIGITAL MASTERPIECES"
                    className="text-4xl md:text-6xl font-light tracking-wider mb-6"
                  />
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Discover exclusive digital art from visionary creators in our carefully curated collection
                  </p>
                </motion.div>

                <EnhancedArtGrid />
              </div>
            </section>

            {/* Featured Artists Marquee */}
            <section className="py-20">
              <div className="mb-16 text-center">
                <ScrambledText
                  text="FEATURED ARTISTS"
                  className="text-3xl md:text-5xl font-light tracking-wider mb-4"
                />
              </div>
              <EnhancedMarquee />
            </section>

            {/* Exclusive Drops Section */}
            <ExclusiveDrops />

            {/* Artist Showcase */}
            <ArtistShowcase />

            {/* Featured Artists Grid */}
            <FeaturedArtists />

            {/* Collector Spotlight */}
            <CollectorSpotlight />

            {/* Stats Section */}
            <section className="py-32 px-6 bg-gray-900">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-20"
                >
                  <ScrambledText
                    text="BY THE NUMBERS"
                    className="text-4xl md:text-6xl font-light tracking-wider mb-8"
                  />
                </motion.div>

                <div className="grid md:grid-cols-4 gap-12 text-center">
                  {[
                    { number: "500+", label: "Exclusive Artworks" },
                    { number: "150+", label: "Featured Artists" },
                    { number: "50K+", label: "Community Members" },
                    { number: "2.5M+", label: "ETH in Sales" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-5xl md:text-6xl font-light mb-4">{stat.number}</div>
                      <div className="text-gray-400 text-lg">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 px-6">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-20"
                >
                  <ScrambledText
                    text="OUR PHILOSOPHY"
                    className="text-4xl md:text-6xl font-light tracking-wider mb-8"
                  />
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    We believe digital art represents the next evolution of human creativity. Our platform serves as a
                    bridge between traditional art appreciation and the limitless possibilities of the digital realm.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-16">
                  {[
                    {
                      title: "Curation Excellence",
                      description:
                        "Every piece in our collection is meticulously selected by our team of art experts and digital pioneers.",
                    },
                    {
                      title: "Artist Empowerment",
                      description:
                        "We provide creators with the tools and platform they need to showcase their vision to a global audience.",
                    },
                    {
                      title: "Community First",
                      description:
                        "Our collectors and artists form a vibrant community that shapes the future of digital art together.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <h3 className="text-2xl font-light mb-6">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Newsletter Section */}
            <NewsletterSection />

            {/* Exclusive Access CTA */}
            <section className="py-32 px-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <ScrambledText text="JOIN THE RENAISSANCE" className="text-4xl md:text-6xl font-light mb-8" />
                  <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Become part of an exclusive community where art, technology, and vision converge to create the
                    future of digital expression.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                      Request Collector Access
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
                    >
                      Artist Application
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </section>
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  )
}
