module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '.'
    : '/',
  outputDir: './dist',
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
};
