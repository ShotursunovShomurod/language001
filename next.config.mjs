import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i5.walmartimages.com", "minapi.beemarket.uz"],
  },
};

export default withNextIntl(nextConfig);
