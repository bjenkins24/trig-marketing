import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Location } from '@reach/router';
import IconLight64x64 from '../icons/favicon-light-64x64.png';
import IconLight32x32 from '../icons/favicon-light-32x32.png';
import IconLight16x16 from '../icons/favicon-light-16x16.png';
import IconDark64x64 from '../icons/favicon-dark-64x64.png';
import IconDark32x32 from '../icons/favicon-dark-32x32.png';
import IconDark16x16 from '../icons/favicon-dark-16x16.png';
import useSiteMetadata from '../helpers/hooks/useSiteMetadata';

const headPropTypes = {
  socialImageUrl: PropTypes.string,
  pageTitle: PropTypes.string,
  metaDescription: PropTypes.string,
};

const defaultProps = {
  socialImageUrl: '',
  pageTitle: '',
  metaDescription: '',
};

const Head = ({ pageTitle, metaDescription, socialImageUrl }) => {
  const {
    siteTitle,
    siteDescription,
    siteUrl,
    themeColor,
    social,
  } = useSiteMetadata();

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    if (matcher.matches) setIsDarkMode(true);
  }, []);

  const pageTitleFull = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

  return (
    <Location>
      {({ location }) => {
        /* istanbul ignore next */
        const canonical = siteUrl + (location.pathname || '');
        return (
          <Helmet>
            <html lang="en" />
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
              content="width=device-width,initial-scale=1.0,user-scalable=yes"
              name="viewport"
            />
            <meta content={siteTitle} name="apple-mobile-web-app-title" />
            <meta content={pageTitleFull} property="og:title" />
            <meta content={pageTitleFull} name="twitter:title" />
            <title>{pageTitleFull}</title>
            <meta
              content={metaDescription || siteDescription}
              name="description"
            />
            <meta
              content={metaDescription || siteDescription}
              property="og:description"
            />
            <meta
              content={metaDescription || siteDescription}
              name="twitter:description"
            />
            <meta content="yes" name="apple-mobile-web-app-capable" />
            <meta
              content="black-translucent"
              name="apple-mobile-web-app-status-bar-style"
            />
            <meta content={themeColor} name="theme-color" />
            <meta content={siteTitle} name="application-name" />
            <meta content="website" property="og:type" />
            <meta content={siteTitle} property="og:site_name" />
            <meta content={social.fbAppId} property="fb:app_id" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content={`@${social.twitter}`} name="twitter:site" />
            <meta content={`@${social.twitter}`} name="twitter:creator" />
            <meta content={pageTitleFull} name="twitter:text:title" />
            <meta content={canonical} property="og:url" />
            <meta content={canonical} name="twitter:url" />
            <link
              data-testid="head__canonical"
              rel="canonical"
              href={canonical}
            />
            {isDarkMode && (
              <link
                rel="icon"
                type="image/png"
                href={IconDark64x64}
                sizes="64x64"
              />
            )}
            {isDarkMode && (
              <link
                rel="icon"
                type="image/png"
                href={IconDark32x32}
                sizes="32x32"
              />
            )}
            {isDarkMode && (
              <link
                rel="icon"
                type="image/png"
                href={IconDark16x16}
                sizes="16x16"
              />
            )}
            {!isDarkMode && (
              <link
                rel="icon"
                type="image/png"
                href={IconLight64x64}
                sizes="64x64"
              />
            )}
            {!isDarkMode && (
              <link
                rel="icon"
                type="image/png"
                href={IconLight32x32}
                sizes="32x32"
              />
            )}
            {!isDarkMode && (
              <link
                rel="icon"
                type="image/png"
                href={IconLight16x16}
                sizes="16x16"
              />
            )}
            {socialImageUrl && (
              <>
                <meta content={socialImageUrl} property="og:image" />
                <meta content="1024" property="og:image:width" />
                <meta content="512" property="og:image:height" />
                <meta content={socialImageUrl} name="twitter:image" />
                <meta content="1024" name="twitter:image:width" />
                <meta content="512" name="twitter:image:height" />
                <meta content={socialImageUrl} property="og:image" />
                <meta content="1024" property="og:image:width" />
                <meta content="512" property="og:image:height" />
              </>
            )}
            <meta content={themeColor} name="msapplication-TileColor" />
          </Helmet>
        );
      }}
    </Location>
  );
};

Head.propTypes = headPropTypes;
Head.defaultProps = defaultProps;

export default Head;
