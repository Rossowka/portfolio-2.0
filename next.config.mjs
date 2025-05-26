import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const baseConfig = {
  // any future settings you want (e.g. images, i18n, etc.)
};

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(baseConfig);

export default nextConfig;
