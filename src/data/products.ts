export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'smartphone' | 'computer' | 'watch' | 'audio';
  description: string;
}

export const products: Product[] = [
  // Smartphones
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    price: 1299,
    category: "smartphone",
    description: "Le dernier iPhone avec puce A17 Pro et système photo pro",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    price: 1469,
    category: "smartphone",
    description: "Le smartphone ultime avec S Pen et IA embarquée",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pixel-8-pro",
    name: "Google Pixel 8 Pro",
    price: 999,
    category: "smartphone",
    description: "L'expertise photo de Google avec IA avancée",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "xiaomi-13-pro",
    name: "Xiaomi 13 Pro",
    price: 899,
    category: "smartphone",
    description: "Performance et photo Leica à prix accessible",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
  },
  // Computers
  {
    id: "macbook-air-m2",
    name: "MacBook Air M2",
    price: 1499,
    category: "computer",
    description: "Puissant, fin et léger avec une autonomie exceptionnelle",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dell-xps-13",
    name: "Dell XPS 13",
    price: 1299,
    category: "computer",
    description: "Un ultrabook premium sous Windows 11",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "lenovo-thinkpad-x1",
    name: "Lenovo ThinkPad X1",
    price: 1599,
    category: "computer",
    description: "Le portable professionnel par excellence",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "asus-zenbook-pro",
    name: "Asus ZenBook Pro",
    price: 1799,
    category: "computer",
    description: "Performances créatives avec écran OLED",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80"
  },
  // Watches
  {
    id: "apple-watch-s9",
    name: "Apple Watch Series 9",
    price: 449,
    category: "watch",
    description: "La montre connectée la plus avancée d'Apple",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "galaxy-watch-6",
    name: "Samsung Galaxy Watch 6",
    price: 369,
    category: "watch",
    description: "Suivi santé avancé et design élégant",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "garmin-fenix-7",
    name: "Garmin Fenix 7",
    price: 699,
    category: "watch",
    description: "La montre ultime pour les sportifs",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fitbit-sense-2",
    name: "Fitbit Sense 2",
    price: 299,
    category: "watch",
    description: "Suivi santé complet et prix abordable",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80"
  },
  // Audio
  {
    id: "airpods-pro",
    name: "AirPods Pro",
    price: 279,
    category: "audio",
    description: "Réduction de bruit active et audio spatial",
    image: "https://images.unsplash.com/photo-1588156979435-379b9d802b0a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5",
    price: 399,
    category: "audio",
    description: "Le meilleur casque bluetooth du marché",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bose-qc45",
    name: "Bose QuietComfort 45",
    price: 329,
    category: "audio",
    description: "Confort légendaire et son premium",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "samsung-buds2-pro",
    name: "Samsung Galaxy Buds2 Pro",
    price: 229,
    category: "audio",
    description: "Les meilleurs écouteurs pour Android",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"
  }
];