export interface NFT {
  id: string;
  title: string;
  artist: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

export interface Artist {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  artworks: number;
}

export const featuredNFTs: NFT[] = [
  {
    id: "1",
    title: "Cosmic Dreams #001",
    artist: "Alex Chen",
    price: "2.5 ETH",
    image: "/images/nft-1.svg",
    category: "Abstract",
    description: "A mesmerizing digital artwork exploring the depths of space and consciousness."
  },
  {
    id: "2",
    title: "Neon City Nights",
    artist: "Maya Rodriguez",
    price: "1.8 ETH",
    image: "/images/nft-2.svg",
    category: "Cyberpunk",
    description: "Vibrant neon-lit cityscape with futuristic aesthetics."
  },
  {
    id: "3",
    title: "Digital Flora",
    artist: "Sarah Kim",
    price: "3.2 ETH",
    image: "/images/nft-3.svg",
    category: "Nature",
    description: "Organic digital plants growing in a virtual ecosystem."
  },
  {
    id: "4",
    title: "Quantum Portraits",
    artist: "David Park",
    price: "4.1 ETH",
    image: "/images/nft-4.svg",
    category: "Portrait",
    description: "Fractal-based human portraits with quantum computing aesthetics."
  },
  {
    id: "5",
    title: "Retro Wave",
    artist: "Lisa Thompson",
    price: "2.9 ETH",
    image: "/images/nft-5.svg",
    category: "Retro",
    description: "Synthwave-inspired artwork with 80s nostalgia."
  },
  {
    id: "6",
    title: "Holographic Dreams",
    artist: "James Wilson",
    price: "5.5 ETH",
    image: "/images/nft-6.svg",
    category: "Futuristic",
    description: "Multi-dimensional holographic art pieces."
  }
];

export const exclusiveDrops: NFT[] = [
  {
    id: "ex1",
    title: "Genesis Collection #001",
    artist: "CryptoArtist",
    price: "10 ETH",
    image: "/images/exclusive-1.svg",
    category: "Genesis",
    description: "The first piece of the legendary Genesis Collection."
  },
  {
    id: "ex2",
    title: "Metaverse Real Estate",
    artist: "VirtualArchitect",
    price: "25 ETH",
    image: "/images/exclusive-2.svg",
    category: "Real Estate",
    description: "Premium virtual land in the metaverse."
  },
  {
    id: "ex3",
    title: "AI Generated Masterpiece",
    artist: "NeuralArtist",
    price: "15 ETH",
    image: "/images/exclusive-3.svg",
    category: "AI Art",
    description: "Unique AI-generated artwork with human curation."
  }
];

export const featuredArtists: Artist[] = [
  {
    id: "a1",
    name: "Alex Chen",
    avatar: "/images/artist-1.svg",
    bio: "Pioneering digital artist exploring the intersection of technology and creativity.",
    followers: 12500,
    artworks: 47
  },
  {
    id: "a2",
    name: "Maya Rodriguez",
    avatar: "/images/artist-2.svg",
    bio: "Cyberpunk visionary creating immersive digital experiences.",
    followers: 8900,
    artworks: 32
  },
  {
    id: "a3",
    name: "Sarah Kim",
    avatar: "/images/artist-3.svg",
    bio: "Nature-inspired digital artist blending organic and digital elements.",
    followers: 15600,
    artworks: 58
  },
  {
    id: "a4",
    name: "David Park",
    avatar: "/images/artist-4.svg",
    bio: "Quantum computing artist pushing the boundaries of digital art.",
    followers: 21000,
    artworks: 73
  }
];

export const galleryImages = [
  "/images/gallery-1.svg",
  "/images/gallery-2.svg",
  "/images/gallery-3.svg",
  "/images/gallery-4.svg",
  "/images/gallery-5.svg",
  "/images/gallery-6.svg",
  "/images/gallery-7.svg",
  "/images/gallery-8.svg",
  "/images/gallery-9.svg",
  "/images/gallery-10.svg",
  "/images/gallery-11.svg",
  "/images/gallery-12.svg"
]; 