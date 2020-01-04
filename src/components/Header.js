import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@trig-app/core-components/dist/Buttons';
import { BodyBig, HugeStyles } from '@trig-app/core-components/dist/Typography';
import { HorizontalGroup } from '@trig-app/core-components/dist/Groups';
import Icon from '@trig-app/core-components/dist/Icon';
import Logo from '@trig-app/core-components/dist/Logo';
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
  padding: ${({ isLight }) => (isLight ? '1.6rem 3.2rem' : '3.2rem')};
  z-index: 100;
  box-shadow: ${({ theme, isLight }) => (isLight ? theme.sh : 'none')};
`;

const Nav = styled(HorizontalGroup)`
  margin-left: auto;
  @media ${device.xs} {
    display: none;
  }
`;

const NavigationItem = styled(BodyBig)`
  color: ${({ theme, isLight }) => (isLight ? theme.p : theme.pc)};
  display: block;
`;

const Hamburger = styled(Icon).attrs({
  type: 'hamburger',
})`
  display: none;
  @media ${device.xs} {
    display: block;
  }
  position: fixed;
  z-index: 102;
  right: 3.2rem;
  top: 3.8rem;
`;

const MobileMenu = styled.div`
  display: none;
  padding-top: 4.8rem;
  @media ${device.xs} {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
  height: calc(100% - 4.8rem);
  position: fixed;
  width: 100%;
  padding: 3.2rem;
  top: 0;
  z-index: 101;
  background: ${({ theme, isLight }) => (isLight ? theme.bs[200] : theme.p)};
  color: white;
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
`;

const MobileMenuNavItem = styled.li`
  ${HugeStyles}
  color: ${({ theme }) => theme.pc}
`;

const Header = props => {
  const { siteTitle } = useSiteMetadata();
  const [isLight, setIsLight] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 50) {
        return setIsLight(true);
      }
      return setIsLight(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <>
      <Container isLight={isLight} {...props}>
        <Logo
          css={`
            margin-top: 0.4rem;
          `}
          type={isLight ? 'light' : 'dark'}
          title={`${siteTitle} Logo`}
        />
        <Nav margin={3.2}>
          <NavigationItem isLight={isLight} weight="bold">
            Home
          </NavigationItem>
          <NavigationItem isLight={isLight} weight="bold">
            Pricing
          </NavigationItem>
          <NavigationItem isLight={isLight} weight="bold">
            Sign in
          </NavigationItem>
          <Button>Try Now</Button>
        </Nav>
      </Container>
      <Hamburger onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuContent>
          <MobileMenuNav>
            <MobileMenuNavItem>Home</MobileMenuNavItem>
            <MobileMenuNavItem>Pricing</MobileMenuNavItem>
            <MobileMenuNavItem>Sign In</MobileMenuNavItem>
            <MobileMenuNavItem>Try Now</MobileMenuNavItem>
          </MobileMenuNav>
        </MobileMenuContent>
      </MobileMenu>
    </>
  );
};

export default Header;
