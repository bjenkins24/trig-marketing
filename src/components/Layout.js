import React from 'react';
import PropTypes from 'prop-types';
import Head from './Head';
import Header, { headerTypes } from './Header';
import Footer from './Footer';
import GlobalStyle from '../../global.css';

const layoutTypes = {
  children: PropTypes.node.isRequired,
  headerProps: PropTypes.shape(headerTypes),
};

const defaultProps = {
  headerProps: {},
};

const Layout = ({ children, headerProps }) => (
  <>
    <GlobalStyle />
    <Head />
    <Header {...headerProps} />
    {children}
    <Footer />
  </>
);

Layout.propTypes = layoutTypes;
Layout.defaultProps = defaultProps;

export default Layout;
