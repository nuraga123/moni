// next.config.js
const nextConfig = {
  images: {
    domains: [
      "pbs.twimg.com",
      "gateway.pinata.cloud",
      "storage.googleapis.com", // ✅ добавляем этот домен
    ],
  },
};

module.exports = nextConfig;
