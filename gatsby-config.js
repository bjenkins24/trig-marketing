require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `trig-app`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        linkResolver: () => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `trig`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PF2PLRL',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
  ],
};
