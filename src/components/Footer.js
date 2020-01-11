import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Body1, Body1Styles } from '@trig-app/core-components/dist/Typography';
import Logo from '@trig-app/core-components/dist/Logo';
import { device } from '@trig-app/constants';
import useSiteMetadata from '../helpers/hooks/useSiteMetadata';

const Container = styled.div`
  background: ${({ theme }) => theme.p};
  padding: 3.2rem;
`;

const Content = styled.div`
  display: block;
  @media ${device.tabletLandscapeUp} {
    display: flex;
  }
`;

const CompanyMeta = styled.div`
  display: flex;
  margin-bottom: 3.2rem;
  flex-direction: column;
  flex-shrink: 1;
  @media ${device.tabletLandscapeUp} {
    width: 32rem;
    margin: 0;
  }
`;

const Copyright = styled(Body1).attrs({
  color: 'pc',
})`
  display: none;
  @media ${device.tabletLandscapeUp} {
    display: block;
  }
`;

const NavigationMenu = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
  & > *:not(:last-child) {
    margin-right: 9.6rem;
  }
  flex-wrap: wrap;
  margin-bottom: -3.2rem;
`;

const Navigation = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  flex-shrink: 0;
  margin-bottom: 3.2rem;
  @media ${device.tabletLandscapeUp} {
    margin-bottom: 0;
  }
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
      <Content>
        <CompanyMeta>
          <Link to="/">
            <Logo
              title={`${siteTitle} Logo`}
              css={`
                @media ${device.tabletLandscapeUp} {
                  margin-bottom: 8.8rem;
                }
              `}
            />
          </Link>
          <Copyright>
            &copy; {`${new Date().getFullYear()}`} {siteTitle}
          </Copyright>
        </CompanyMeta>
        <NavigationMenu
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
            <NavigationItem>
              <Link to="/blog">Blog</Link>
            </NavigationItem>
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
        </NavigationMenu>
      </Content>
    </Container>
  );
};

export default Footer;
