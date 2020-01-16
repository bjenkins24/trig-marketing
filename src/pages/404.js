import React from 'react';
import styled from 'styled-components';
import { Huge } from '@trig-app/core-components';
import Layout from '../components/Layout';

const Container = styled.div`
  margin: 9.6rem auto;
`;

const FourOhFour = () => {
  return (
    <Layout>
      <Container>
        <Huge
          color="bc"
          css={`
            text-align: center;
          `}
        >
          Oops! 404 nothing found
        </Huge>
      </Container>
    </Layout>
  );
};

export default FourOhFour;
