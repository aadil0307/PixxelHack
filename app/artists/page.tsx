"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/navigation";
import RippleEffect from "@/components/ripple-effect";
import ScrambledText from "@/components/scrambled-text";
import { featuredArtists, collections } from "@/lib/data";

// Safe toLocaleString function
const safeToLocaleString = (value: any): string => {
  try {
    if (typeof value === "number" && !isNaN(value)) {
      return value.toLocaleString();
    } else if (typeof value === "string") {
      const parsed = parseInt(value, 10);
      if (!isNaN(parsed)) {
        return parsed.toLocaleString();
      }
    }
    return "0";
  } catch (error) {
    console.error("Error in safeToLocaleString:", error);
    return "0";
  }
};

// Safe import fallback
const safeFeaturedArtistsImport = () => {
  try {
    return featuredArtists || [];
  } catch (error) {
    console.error("Error importing featuredArtists:", error);
    return [];
  }
};

const safeCollectionsImport = () => {
  try {
    return collections || [];
  } catch (error) {
    console.error("Error importing collections:", error);
    return [];
  }
};

// Safe data access function
const getSafeArtistData = (artist: any) => {
  // Ensure followers is always a number with multiple fallbacks
  let followers = 0;
  try {
    if (typeof artist?.followers === "number" && !isNaN(artist.followers)) {
      followers = artist.followers;
    } else if (typeof artist?.followers === "string") {
      const parsed = parseInt(artist.followers, 10);
      followers = isNaN(parsed) ? 0 : parsed;
    }
  } catch (error) {
    console.error("Error processing followers:", error);
    followers = 0;
  }

  // Ensure artworks is always a number with multiple fallbacks
  let artworks = 0;
  try {
    if (typeof artist?.artworks === "number" && !isNaN(artist.artworks)) {
      artworks = artist.artworks;
    } else if (typeof artist?.artworks === "string") {
      const parsed = parseInt(artist.artworks, 10);
      artworks = isNaN(parsed) ? 0 : parsed;
    }
  } catch (error) {
    console.error("Error processing artworks:", error);
    artworks = 0;
  }

  return {
    id: artist?.id || 0,
    name: artist?.name || "Unknown Artist",
    specialty: artist?.specialty || "Digital Art",
    totalSales: artist?.totalSales || "0 ETH",
    image: artist?.image || "/images/placeholder.jpg",
    hoverImage: artist?.hoverImage || "/images/placeholder.jpg",
    followers: followers,
    artworks: artworks,
    bio: artist?.bio || "A talented digital artist.",
    avatar: artist?.avatar || artist?.image || "/images/placeholder.jpg",
  };
};

export default function ArtistsPage() {
  try {
    // Ensure data is available during SSR with safe imports
    const safeFeaturedArtists = safeFeaturedArtistsImport();
    const safeCollections = safeCollectionsImport();

    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <RippleEffect />
        <Navigation />

        <main className="pt-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <ScrambledText
                text="FEATURED ARTISTS"
                className="text-6xl md:text-8xl font-light tracking-wider mb-8"
              />
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the visionary creators behind the most innovative
                digital art collections in the NFT space.
              </p>
            </motion.div>

            {/* Artists Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
              {Array.isArray(safeFeaturedArtists) ? (
                safeFeaturedArtists
                  .filter((artist) => artist && typeof artist === "object")
                  .map((artist, index) => {
                    const safeArtist = getSafeArtistData(artist);
                    return (
                      <motion.div
                        key={safeArtist.id}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group cursor-pointer"
                      >
                        <div className="relative overflow-hidden bg-gray-900 aspect-[3/4] mb-6">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative w-full h-full"
                          >
                            <Image
                              src={safeArtist.avatar}
                              alt={safeArtist.name}
                              fill
                              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                          </motion.div>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="text-sm text-gray-300 mb-1">
                              {safeArtist.artworks} artworks
                            </div>
                            <div className="text-xs text-gray-400">
                              {safeToLocaleString(safeArtist.followers)}{" "}
                              followers
                            </div>
                          </div>

                          {/* Hover overlay */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-black/60 flex items-center justify-center"
                          >
                            <motion.button
                              initial={{ scale: 0.8 }}
                              whileHover={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                              className="bg-white text-black px-6 py-3 font-medium"
                            >
                              View Profile
                            </motion.button>
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + 0.3,
                          }}
                          viewport={{ once: true }}
                        >
                          <h3 className="text-2xl font-light mb-2">
                            {safeArtist.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">
                            {safeArtist.bio}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{safeArtist.artworks} pieces</span>
                            <span>•</span>
                            <span>
                              {safeToLocaleString(safeArtist.followers)}{" "}
                              followers
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })
              ) : (
                <div className="text-center text-gray-400">
                  No artists available
                </div>
              )}
            </div>

            {/* Stats Section */}
            <section className="py-32 bg-gray-900 rounded-3xl mb-32">
              <div className="max-w-5xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-20"
                >
                  <ScrambledText
                    text="ARTIST STATISTICS"
                    className="text-4xl md:text-6xl font-light tracking-wider mb-8"
                  />
                </motion.div>

                <div className="grid md:grid-cols-4 gap-12">
                  {[
                    { number: "150+", label: "Featured Artists" },
                    { number: "2,500+", label: "Total Artworks" },
                    { number: "500K+", label: "Combined Followers" },
                    { number: "15M+", label: "ETH in Sales" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-5xl md:text-6xl font-light mb-4">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-lg">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Join as Artist Section */}
            <section className="py-32 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl mb-32">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <ScrambledText
                    text="BECOME AN ARTIST"
                    className="text-4xl md:text-6xl font-light mb-8"
                  />
                  <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Join our exclusive community of digital artists and showcase
                    your work to collectors worldwide.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                      Apply as Artist
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
                    >
                      View Guidelines
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Featured Collections */}
            <section className="mb-32">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <ScrambledText
                  text="FEATURED COLLECTIONS"
                  className="text-4xl md:text-6xl font-light tracking-wider mb-6"
                />
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Explore curated collections from our most celebrated artists
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {safeCollections.slice(0, 3).map((collection, index) => (
                  <motion.div
                    key={collection.name}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden bg-gray-900 aspect-[4/5] mb-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={collection.image}
                          alt={collection.name}
                          fill
                          className="object-cover"
                        />
                      </motion.div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="text-sm text-gray-300 mb-1">
                          {collection.pieces} pieces
                        </div>
                        <div className="text-xs text-gray-400">
                          by {collection.artist}
                        </div>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-light mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {collection.description ||
                          "A curated collection of digital art pieces."}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error("Error rendering ArtistsPage:", error);
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Something went wrong</h1>
          <p className="text-gray-400">Please try again later.</p>
        </div>
      </div>
    );
  }
}
