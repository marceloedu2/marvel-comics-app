const withPWA = require('next-pwa')

const isProd = process.env.NODE_END === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

module.exports = {
  plugins: [['module-resolver', { root: ['./src'], alias: { '@': './src' } }]]
}
