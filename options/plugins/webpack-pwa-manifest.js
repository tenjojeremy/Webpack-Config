const dirPath = require('path')

const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = (webpackManifest, mode) => {
  const isProd = mode === 'production'

  const {
    projectInfo: {
      name = 'Project Name',
      description = 'Project description',
      shortName = 'Project shortName',
      colors: { background, primary },
      logo: { path },
    },
  } = webpackManifest

  return isProd
    ? new WebpackPwaManifest({
        fingerprints: false,
        name,
        short_name: shortName,
        description,
        background_color: background,
        theme_color: primary,
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        display: 'standalone',
        icons: [
          {
            src: dirPath.resolve(path),
            sizes: [92, 152, 180, 167, 192, 512],
            destination: dirPath.join('images', 'public'),
          },
        ],
      })
    : () => null
}
