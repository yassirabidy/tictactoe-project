const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
  ],
  developMiddleware: app => {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
      })
    );
  },
};
