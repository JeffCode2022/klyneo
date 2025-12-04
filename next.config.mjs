/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Fuerza la raíz de tracing al workspace actual para evitar la advertencia de lockfiles múltiples
  outputFileTracingRoot: process.cwd(),
}

export default nextConfig
