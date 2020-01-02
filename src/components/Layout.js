import React from 'react';
import PropTypes from 'prop-types';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import GlobalStyle from '../../global.css';

const layoutTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Head />
    <Header />
    {children}
    <Footer />
  </>
);

Layout.propTypes = layoutTypes;

export default Layout;
