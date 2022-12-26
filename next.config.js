/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},

	exportPathMap: function () {
		return {
			'/page': { page: '/' },
			'/bookmarks/page': { page: '/bookmarks' },
			'/blog/page': { page: '/blog' },
		};
	},
	staticPageGenerationTimeout: 14400,
	images: {
		minimumCacheTTL: 60,
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.shields.io',
			},
		],
	},
	env: {
		NEXT_PUBLIC_NOTION_DATABASE_ID: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
		NEXT_PUBLIC_NOTION_SECRET_KEY: process.env.NEXT_PUBLIC_NOTION_SECRET_KEY,
	},
};

module.exports = nextConfig;
