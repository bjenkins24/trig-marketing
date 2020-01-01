import React from 'react';
import styled from 'styled-components';
import { Body1 } from '@trig-app/core-components/dist/Typography';
import Logo from '@trig-app/core-components/dist/Logo';
import useSiteMetadata from '../helpers/hooks/useSiteMetadata';

const Container = styled.div`
  background: ${({ theme }) => theme.p};
  padding: 3.2rem;
`;

const Footer = props => {
  const { siteTitle } = useSiteMetadata();

  return (
    <Container {...props}>
      <div>
        <Logo
          css={`
            margin-bottom: 8.8rem;
          `}
        />
        <Body1 color="pc">
          &copy; {new Date().getFullYear()} {siteTitle}
        </Body1>
      </div>
    </Container>
  );
};

export default Footer;
