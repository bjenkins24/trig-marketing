import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.p};
  height: 500px;
`;

const Header = () => {
  return <StyledHeader />;
};

export default Header;
