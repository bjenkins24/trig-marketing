import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          siteTitle
          appUrl
          siteDescription
          siteUrl
          themeColor
          social {
            twitter
            fbAppId
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
