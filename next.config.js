/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
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