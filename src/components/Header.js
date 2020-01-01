import React from 'react';
import styled from 'styled-components';
import { Button } from '@trig-app/core-components/dist/Buttons';
import { BodyBig } from '@trig-app/core-components/dist/Typography';
import { HorizontalGroup } from '@trig-app/core-components/dist/Groups';
import Logo from '@trig-app/core-components/dist/Logo';

const Container = styled.div`
  display: flex;
  position: fixed;
  width: calc(100% - 6.4rem);
  top: 0;
  background: ${({ theme }) => theme.p};
  padding: 3.2rem;
  z-index: 100;
`;

const Nav = styled(HorizontalGroup)`
  margin-left: auto;
`;

const Header = props => {
  return (
    <Container {...props}>
      <Logo />
      <Nav margin={3.2}>
        <BodyBig color="sc" weight="bold">
          Home
        </BodyBig>
        <BodyBig color="sc" weight="bold">
          Pricing
        </BodyBig>
        <BodyBig color="sc" weight="bold">
          Sign in
        </BodyBig>
        <Button>Try Now</Button>
      </Nav>
    </Container>
  );
};

export default Header;
