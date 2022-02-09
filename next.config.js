const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig

/*
// Disable optimized images for static exports
// From: https://maxrohde.com/2021/07/25/next-js-11-images-with-static-export/
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
}


const config = withPlugins(
  [
    [
      optimizedImages,
      {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
        optimizeImages: false,
      },
    ],
  ],
  nextConfig
);

module.exports = config
*/
