// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config) => {
//     config.resolve.alias['@'] = path.resolve(__dirname);
//     config.plugins.push(new Dotenv({ silent: true }));
//     return config;
//   },
//     images: {
        
//      },
//      experimental: {
//         missingSuspenseWithCSRBailout: false,
//     },
//       productionBrowserSourceMaps: true,

// }

// module.exports = nextConfig


// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//     output: 'export',
//     // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//     // trailingSlash: true,
//     // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//     // skipTrailingSlashRedirect: true,
//     // Optional: Change the output directory `out` -> `dist`
//     // distDir: 'dist',
//    }
   
//    module.exports = nextConfig


const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
  
  images: {

  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  productionBrowserSourceMaps: true,
};