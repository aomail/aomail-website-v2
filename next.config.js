// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require('next-compose-plugins')
// TODO: configure this to ignore netlify build - because it threw an error
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//  enabled: process.env.ANALYZE === 'true',
// })

module.exports = withPlugins(
  [
    /*withBundleAnalyzer*/
  ],
  {
    experimental: { esmExternals: true },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: { removeViewBox: false, removeDesc: false },
            },
          },
        ],
      })
      return config
    },
  }
)
