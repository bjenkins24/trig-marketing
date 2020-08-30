require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const proxy = require('http-proxy-middleware');
const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
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
        schemas: {
          // eslint-disable-next-line
          post: require('./src/prismic_schemas/post.json'),
        },
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
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/_headers`,
        destination: '',
      },
    },
  ],
};
