import React from 'react';
import styled from 'styled-components';
import { Body1, Body1Styles } from '@trig-app/core-components/dist/Typography';
import Logo from '@trig-app/core-components/dist/Logo';
import {
  VerticalGroup,
  HorizontalGroup,
} from '@trig-app/core-components/dist/Groups';
import useSiteMetadata from '../helpers/hooks/useSiteMetadata';

const Container = styled.div`
  background: ${({ theme }) => theme.p};
  padding: 3.2rem;
`;

const Navigation = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const NavigationTitle = styled.li`
  ${Body1Styles}
  color: ${({ theme }) => theme.pc};
`;

const NavigationItem = styled.li`
  ${Body1Styles};
  color: ${({ theme }) => theme.ps[200]};
`;

const Footer = props => {
  const { siteTitle } = useSiteMetadata();

  return (
    <Container {...props}>
      <HorizontalGroup>
        <VerticalGroup
          css={`
            width: 32rem;
          `}
          margin={8.8}
        >
          <Logo title={`${siteTitle} Logo`} />
          <Body1 color="pc">
            &copy; {`${new Date().getFullYear()}`} {siteTitle}
          </Body1>
        </VerticalGroup>
        <HorizontalGroup
          margin={9.6}
          css={`
            align-self: flex-start;
            align-items: flex-start;
          `}
        >
          <Navigation>
            <NavigationTitle>About</NavigationTitle>
            <NavigationItem>Our Story</NavigationItem>
            <NavigationItem>Benefits</NavigationItem>
            <NavigationItem>FAQ</NavigationItem>
          </Navigation>
          <Navigation>
            <NavigationTitle>Keep in Touch</NavigationTitle>
            <NavigationItem>Contact Us</NavigationItem>
            <NavigationItem>Blog</NavigationItem>
          </Navigation>
          <Navigation>
            <NavigationTitle>Follow Us</NavigationTitle>
            <NavigationItem>Facebook</NavigationItem>
            <NavigationItem>Twitter</NavigationItem>
          </Navigation>
          <Navigation>
            <NavigationTitle>Legal</NavigationTitle>
            <NavigationItem>Terms of Service</NavigationItem>
            <NavigationItem>Privacy Policy</NavigationItem>
          </Navigation>
        </HorizontalGroup>
      </HorizontalGroup>
    </Container>
  );
};

export default Footer;
