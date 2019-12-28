import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo-light.svg';

const Container = styled.div`
  background: ${({ theme }) => theme.p};
  padding: 3.2rem;
`;

const Footer = props => {
  return (
    <Container {...props}>
      <img src={logo} alt="Logo" />
    </Container>
  );
};

export default Footer;
