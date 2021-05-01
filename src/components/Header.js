import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import {
  BodyBig,
  HugeStyles,
  HorizontalGroup,
  Icon,
  Logo,
  Button,
} from '@trig-app/core-components';
import { device } from '@trig-app/constants';
import useSiteMetadata from '../helpers/hooks/useSiteMetadata';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: calc(100% - 6.4rem);
  top: 0;
  background: ${({ theme, isLight }) => (isLight ? theme.bs[200] : theme.p)};
  transition: all 0.3s;
  padding: ${({ hasScrolled }) => (hasScrolled ? '1.6rem 3.2rem' : '3.2rem')};
  z-index: 100;
  box-shadow: ${({ theme, hasScrolled }) => (hasScrolled ? theme.sh : 'none')};
`;

const Nav = styled(HorizontalGroup)`
  margin-left: auto;
  display: none;
  @media ${device.tabletPortraitUp} {
    display: flex;
  }
`;

const NavigationItem = styled(BodyBig)`
  color: ${({ theme, isLight }) => (isLight ? theme.p : theme.pc)};
  display: block;
`;

const Hamburger = styled(Icon).attrs({
  type: 'hamburger',
})`
  display: block;
  @media ${device.tabletPortraitUp} {
    display: none;
  }
  transition: all 0.3s;
  position: fixed;
  z-index: 102;
  right: 3.2rem;
  top: ${({ hasScrolled }) => (!hasScrolled ? '3.8rem' : '2.4rem')};
`;

const MobileMenu = styled.div`
  display: flex;
  background: ${({ theme, isLight }) => (isLight ? theme.bs[200] : theme.p)};
  position: fixed;
  @media ${device.tabletPortraitUp} {
    display: none;
  }
  padding: 4.8rem 3.2rem;
  width: calc(100% - 6.4rem);
  height: calc(100% - 9.6rem);
  transition: all 0.3s;
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-110%')});
  z-index: 101;
`;

const MobileMenuContent = styled.div`
  align-self: center;
  display: flex;
  margin: 0 auto;
  text-align: center;
`;

const MobileMenuNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  & > *:not(:last-child) {
    margin-bottom: 4.8rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const MobileMenuNavItem = styled.li`
  ${HugeStyles}
  color: ${({ theme, isLight }) => (isLight ? theme.p : theme.pc)};
`;

const Spacer = styled.div`
  height: 10.3rem;
`;

const HomeLink = () => {
  return <Link to="/">Home</Link>;
};

const PricingLink = () => {
  return <Link to="/#pricing">Pricing</Link>;
};

const BlogLink = () => {
  return <Link to="/blog">Blog</Link>;
};

const LoginLink = () => {
  return (
    <a href={process.env.APP_URL} rel="noreferrer">
      Log In
    </a>
  );
};

export const headerTypes = {
  isLightTheme: PropTypes.bool,
};

const defaultProps = {
  isLightTheme: true,
};

const Header = ({ isLightTheme, ...restProps }) => {
  const { siteTitle } = useSiteMetadata();
  const [isLight, setIsLight] = useState(isLightTheme);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 50) {
        return setHasScrolled(true);
      }
      return setHasScrolled(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  useEffect(() => {
    if (!isLight && hasScrolled && !isLightTheme) {
      setIsLight(true);
    }
    if (isLight && !hasScrolled && !isLightTheme) {
      setIsLight(false);
    }
  });

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <Container hasScrolled={hasScrolled} isLight={isLight} {...restProps}>
        <Link to="/">
          <Logo
            css={`
              margin-top: 0.5rem;
            `}
            type={isLight ? 'light' : 'dark'}
            title={`${siteTitle} Logo`}
          />
        </Link>
        <Nav margin={3.2}>
          <NavigationItem isLight={isLight} weight="bold">
            <HomeLink />
          </NavigationItem>
          <NavigationItem isLight={isLight} weight="bold">
            <PricingLink />
          </NavigationItem>
          <NavigationItem isLight={isLight} weight="bold">
            <BlogLink />
          </NavigationItem>
          <NavigationItem isLight={isLight} weight="bold">
            <LoginLink />
          </NavigationItem>
          <Button as="a" href={`${process.env.APP_URL}/register`}>
            Try Now
          </Button>
        </Nav>
      </Container>
      <Hamburger
        color={isLight ? 'p' : 'pc'}
        hasScrolled={hasScrolled}
        isOpen={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        data-testid="hamburger-icon"
      />
      <MobileMenu
        isLight={isLight}
        data-testid="mobile-menu"
        isOpen={isMobileMenuOpen}
      >
        <MobileMenuContent>
          <MobileMenuNav>
            <MobileMenuNavItem
              data-testid="home-mobile-link"
              isLight={isLight}
              onClick={closeMobileMenu}
            >
              <HomeLink />
            </MobileMenuNavItem>
            <MobileMenuNavItem
              data-testid="pricing-mobile-link"
              isLight={isLight}
              onClick={closeMobileMenu}
            >
              <PricingLink />
            </MobileMenuNavItem>
            <MobileMenuNavItem
              data-testid="sign-in-mobile-link"
              isLight={isLight}
              onClick={closeMobileMenu}
            >
              <BlogLink />
            </MobileMenuNavItem>
            <MobileMenuNavItem
              data-testid="try-now-mobile-link"
              isLight={isLight}
              onClick={closeMobileMenu}
            >
              <Link to="/#subscribe">Get Release Updates</Link>
            </MobileMenuNavItem>
          </MobileMenuNav>
        </MobileMenuContent>
      </MobileMenu>
      <Spacer data-testid="header__spacer" aria-hidden />
    </>
  );
};

Header.propTypes = headerTypes;
Header.defaultProps = defaultProps;

export default Header;
