/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Przekierowanie z HTTP na HTTPS (dla strony głównej i podstron)
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://www.domiweb.pl/:path*",
        permanent: true,
      },
      // Przekierowanie z wersji bez "www" na wersję z "www" (dla strony głównej i podstron)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "domiweb.pl", // Wersja bez "www"
          },
        ],
        destination: "https://www.domiweb.pl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
