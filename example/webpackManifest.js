const localIp = require('get-my-local-ip')

exports.manifest = {
  port: 3001,
  host: localIp.address,
  entry: './example/entry.js',
  projectInfo: {
    name: 'Webapp',
    shortName: 'Webapp',
    description: 'Webapp Template',
    logo: {
      path: 'example/logo.png'
    }
  },
  analytics: {
    google: {
      analytics: { gAnalyticFunctions: { onlyViewsScript: '' } }
    }
  },
  theme: {
    colors: {
      Primary: '#6200ee',
      Secondary: '#b3f8fc'
    }
  },
  webpack: {
    plugins: {
      html: {
        bodyHtmlSnippet: ''
      },
      workbox: {
        swSrc: './example/ServiceWorker/sw.js',
        swDest: 'sw.js'
      }
    }
  }
}