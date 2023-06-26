const isProd = process.env.NODE_ENV === "production"
module.exports = {
  // basePath: isProd ? "/gopher" : "",
  // assetPrefix: isProd ? "/gopher/" : "/",
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // output: isProd ? "export" : "standalone",
  images: {
    domains: ["s1.ax1x.com", "avatars.githubusercontent.com"],
  },
  env: {
    GITHUB_ID: "ac6286a8e64573d9fa70",
    GITHUB_SECRET: "cc20fe29e5a1d1deff23bfb8561eda8b73f2f8dd",
    // NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_URL: "https://gopher-ai-nine.vercel.app",
    NEXTAUTH_SECRET: "uYeYJ5tGz09LngrmTwCgvo21/seTwtFXWJYEH59Y8Ys=",
  },
}
