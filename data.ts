
// Vercel Deployment & Caching Strategy
// -----------------------------------------------------------------------------
// Change this version string whenever you update images or deploy a new version.
// This forces browsers to ignore the cache and load the fresh assets.
const APP_VERSION = 'v1.0.0'; 

// Base path for public assets
const ASSET_BASE = '/assets';

/**
 * Helper to generate cache-busted public asset paths.
 * Usage: getAsset('my-image.jpg') -> '/assets/my-image.jpg?v=v1.0.0'
 */
const getAsset = (filename: string) => `${ASSET_BASE}/${filename}?v=${APP_VERSION}`;

export const CONFIG = {
  profile: {
    name: "@ventaoo",
    role: "Архитектор Интерьеров",
    tagline: "Пространства, которые дышат.",
    email: "ventaoczu@gmail.com",
    socials: [
      { name: "Instagram", url: "#" },
      { name: "Pinterest", url: "#" },
      { name: "Behance", url: "#" },
    ]
  },
  images: {
    hero: {
      // 对应文件: /public/assets/hero-main.jpg
      main: getAsset("hero-main.jpg"),
      // 对应文件: /public/assets/portrait.jpg
      portrait: getAsset("portrait.jpg"),
    },
    philosophy: {
      // 对应文件: /public/assets/philo-light.jpg
      light: getAsset("philo-light.jpg"),
      // 对应文件: /public/assets/philo-texture.jpg
      texture: getAsset("philo-texture.jpg"),
      // 对应文件: /public/assets/philo-nature.jpg
      nature: getAsset("philo-nature.jpg"),
    },
    portfolio: [
      {
        id: 1,
        title: "The Clay House",
        category: "Жилые",
        year: "2023",
        // 对应文件: /public/assets/project-clay.jpg
        src: getAsset("project-clay.jpg"), 
        size: "tall"
      },
      {
        id: 2,
        title: "Komorebi Studio",
        category: "Офис",
        year: "2024",
        // 对应文件: /public/assets/project-komorebi.jpg
        src: getAsset("project-komorebi.jpg"),
        size: "wide"
      },
      {
        id: 3,
        title: "Aesop Inspired",
        category: "Ритейл",
        year: "2023",
        // 对应文件: /public/assets/project-aesop.jpg
        src: getAsset("project-aesop.jpg"),
        size: "regular"
      },
      {
        id: 4,
        title: "Desert Villa",
        category: "Жилые",
        year: "2024",
        // 对应文件: /public/assets/project-desert.jpg
        src: getAsset("project-desert.jpg"),
        size: "tall"
      },
      {
        id: 5,
        title: "Midnight Lounge",
        category: "HoReCa",
        year: "2023",
        // 对应文件: /public/assets/project-lounge.jpg
        src: getAsset("project-lounge.jpg"),
        size: "wide"
      }
    ]
  }
};
