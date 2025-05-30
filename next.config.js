/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: false
  },
  async redirects() {
    return [
      {
        source: '/resumeRashikShahjahan.pdf',
        destination: '/resumeRashikSh.pdf',
        permanent: true,
      },
    ]
  },
}

export default nextConfig 