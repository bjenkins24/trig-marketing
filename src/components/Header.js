import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@trig-app/core-components/dist/Buttons';
import { BodyBig } from '@trig-app/core-components/dist/Typography';
import { HorizontalGroup } from '@trig-app/core-components/dist/Groups';
import Logo from '@trig-app/core-components/dist/Logo';
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
`;

const NavigationItem = styled(BodyBig)`
  color: ${({ theme, isLight }) => (isLight ? theme.p : theme.pc)};
`;

const Header = props => {
  const { siteTitle } = useSiteMetadata();
  const [isLight, setIsLight] = useState(false);

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
  );
};

export default Header;
