const siteConfig = require("./site-config")

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-offline"],
}
