import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import {
  Body1,
  Body1Styles,
  Logo,
  Modal,
  ModalHeader,
  Button,
} from '@trig-app/core-components';
import { device } from '@trig-app/constants';
import ContactForm from './ContactForm';
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
  div {
    color: ${({ theme }) => theme.ps[200]};
    &:hover {
      color: ${({ theme }) => theme.ss[200]};
    }
  }
`;

const Footer = props => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const { siteTitle } = useSiteMetadata();

  /* istanbul ignore next */
  const closeModal = () => {
    setIsContactFormOpen(false);
  };

  return (
    <>
      <Modal isOpen={isContactFormOpen} onRequestClose={closeModal}>
        <ModalHeader>Contact Us</ModalHeader>
        <ContactForm afterSubmit={closeModal} />
      </Modal>
      <Container {...props}>
        <Content>
          <CompanyMeta>
            <Logo
              title={`${siteTitle} Logo`}
              css={`
                @media ${device.tabletLandscapeUp} {
                  margin-bottom: 8.8rem;
                }
              `}
            />

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
              <NavigationTitle>Keep in Touch</NavigationTitle>
              <NavigationItem>
                <Button
                  variant="inline"
                  type="button"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  Contact Us
                </Button>
              </NavigationItem>
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
    </>
  );
};

export default Footer;
