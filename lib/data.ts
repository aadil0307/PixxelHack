export interface NFT {
  id: number;
  title: string;
  artist: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface Artist {
  id: number;
  name: string;
  specialty: string;
  totalSales: string;
  image: string;
  hoverImage: string;
}

export interface Collection {
  id: number;
  name: string;
  artist: string;
  pieces: number;
  image: string;
}

// Featured NFTs - Mix of real images and SVGs
export const featuredNFTs: NFT[] = [
  {
    id: 1,
    title: "Digital Dreams",
    artist: "Alex Chen",
    price: "2.5 ETH",
    category: "Digital Art",
    description:
      "A mesmerizing exploration of digital consciousness and artificial intelligence.",
    image: "/real-images/nft-real-1.jpg",
  },
  {
    id: 2,
    title: "Abstract Harmony",
    artist: "Maya Rodriguez",
    price: "1.8 ETH",
    category: "Abstract",
    description:
      "Vibrant colors dance in perfect harmony, creating visual poetry.",
    image: "/images/nft-2.svg",
  },
  {
    id: 3,
    title: "Neon Nights",
    artist: "DJ Pixel",
    price: "3.2 ETH",
    category: "Cyberpunk",
    description:
      "A neon-lit cityscape that captures the essence of digital rebellion.",
    image: "/real-images/nft-real-3.jpg",
  },
  {
    id: 4,
    title: "Minimalist Zen",
    artist: "Sarah Kim",
    price: "1.5 ETH",
    category: "Minimalist",
    description: "Simplicity meets sophistication in this contemplative piece.",
    image: "/images/nft-4.svg",
  },
  {
    id: 5,
    title: "Quantum Chaos",
    artist: "Dr. Quantum",
    price: "4.0 ETH",
    category: "Scientific Art",
    description:
      "Visual representation of quantum mechanics and particle physics.",
    image: "/real-images/nft-real-5.jpg",
  },
  {
    id: 6,
    title: "Retro Future",
    artist: "Vintage Vox",
    price: "2.8 ETH",
    category: "Retrofuturism",
    description: "A nostalgic look at the future through retro aesthetics.",
    image: "/images/nft-6.svg",
  },
];

// Exclusive Drops - Mix of real and SVG
export const exclusiveDrops = [
  {
    id: 1,
    title: "Genesis Collection",
    artist: "Crypto Artist",
    dropDate: "2024-02-15",
    pieces: 100,
    startingPrice: "0.5 ETH",
    image: "/real-images/exclusive-real-1.jpg",
  },
  {
    id: 2,
    title: "Metaverse Dreams",
    artist: "Virtual Creator",
    dropDate: "2024-02-20",
    pieces: 50,
    startingPrice: "1.0 ETH",
    image: "/images/exclusive-2.svg",
  },
  {
    id: 3,
    title: "AI Generated",
    artist: "Neural Network",
    dropDate: "2024-02-25",
    pieces: 75,
    startingPrice: "0.8 ETH",
    image: "/real-images/exclusive-real-3.jpg",
  },
];

// Featured Artists - Mix of real portraits and SVGs
export const featuredArtists: Artist[] = [
  {
    id: 1,
    name: "Eleanor Vance",
    specialty: "Digital Portraits",
    totalSales: "150 ETH",
    image: "/real-images/artist-real-1.jpg",
    hoverImage: "/images/artist-1.svg",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    specialty: "Abstract Expressionism",
    totalSales: "200 ETH",
    image: "/images/artist-2.svg",
    hoverImage: "/real-images/artist-real-2.jpg",
  },
  {
    id: 3,
    name: "Aria Chen",
    specialty: "Generative Art",
    totalSales: "180 ETH",
    image: "/real-images/artist-real-3.jpg",
    hoverImage: "/images/artist-3.svg",
  },
  {
    id: 4,
    name: "Liam Sterling",
    specialty: "Blockchain Art",
    totalSales: "120 ETH",
    image: "/images/artist-4.svg",
    hoverImage: "/real-images/artist-real-4.jpg",
  },
];

// Gallery Images - Mix of real and SVG
export const galleryImages = [
  "/real-images/gallery-real-1.jpg",
  "/images/gallery-2.svg",
  "/real-images/gallery-real-3.jpg",
  "/images/gallery-4.svg",
  "/real-images/gallery-real-5.jpg",
  "/images/gallery-6.svg",
  "/real-images/gallery-real-6.jpg",
  "/images/gallery-8.svg",
  "/real-images/gallery-real-2.jpg",
  "/images/gallery-10.svg",
  "/real-images/gallery-real-4.jpg",
  "/images/gallery-12.svg",
];

// Collections - Mix of real and SVG
export const collections: Collection[] = [
  {
    id: 1,
    name: "Digital Renaissance",
    artist: "Eleanor Vance",
    pieces: 25,
    image: "/real-images/nft-real-2.jpg",
  },
  {
    id: 2,
    name: "Abstract Universe",
    artist: "Marcus Thorne",
    pieces: 30,
    image: "/images/nft-3.svg",
  },
  {
    id: 3,
    name: "Neon Dreams",
    artist: "Aria Chen",
    pieces: 20,
    image: "/real-images/nft-real-4.jpg",
  },
  {
    id: 4,
    name: "Minimalist Zen",
    artist: "Sarah Kim",
    pieces: 15,
    image: "/images/nft-5.svg",
  },
  {
    id: 5,
    name: "Quantum Art",
    artist: "Dr. Quantum",
    pieces: 40,
    image: "/real-images/nft-real-6.jpg",
  },
  {
    id: 6,
    name: "Retro Future",
    artist: "Vintage Vox",
    pieces: 35,
    image: "/images/nft-1.svg",
  },
];

// Hero Background Images - Mix of real and SVG
export const heroImages = [
  "/real-images/hero-real-1.jpg",
  "/images/hero-bg-2.svg",
  "/real-images/hero-real-2.jpg",
  "/images/hero-bg-4.svg",
  "/real-images/hero-real-3.jpg",
  "/images/hero-bg-6.svg",
];

// About Page Images - Mix of real and SVG
export const aboutImages = [
  "/real-images/gallery-real-1.jpg",
  "/images/gallery-3.svg",
  "/real-images/gallery-real-3.jpg",
  "/images/gallery-5.svg",
];

// Contact Page Images - Mix of real and SVG
export const contactImages = [
  "/real-images/hero-real-1.jpg",
  "/images/hero-bg-3.svg",
  "/real-images/hero-real-2.jpg",
];
