import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo-light.svg';
import { Button } from '@trig-app/core-components/dist/Buttons';
import { BodyBig } from '@trig-app/core-components/dist/Typography';
import { HorizontalGroup } from '@trig-app/core-components/dist/Groups';

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.p};
  padding: 3.2rem;
`;

const Nav = styled(HorizontalGroup)`
  margin-left: auto;
`;

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
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
