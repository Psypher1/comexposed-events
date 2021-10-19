module.exports = {
  images: {
    domains: ["upload.wikimedia.org", "unsplash.com", "images.unsplash.com"],
  },
  env: {
    MONGO_URI: process.env.NEXT_PUBLIC_MONGO,
  },
};
