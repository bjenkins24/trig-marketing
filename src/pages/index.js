import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Button } from '@trig-app/core-components/dist/Buttons';
import { Huge, BodyBiggest } from '@trig-app/core-components/dist/Typography';

const Hero = styled.div`
  background: ${({ theme }) => theme.p};
  height: 99.3rem;
  text-align: center;
`;

const Index = () => {
  return (
    <Layout>
      <Hero>
        <Huge color="pc">Make a Team of Know-It-Alls</Huge>
        <BodyBiggest as="p" color="pc">
          Ew, not like that guy in the breakroom whose parents didn’t love him.
          Let Trig
          <br />
          organize all of your company knowledge, and your team will actually
          know it all.
        </BodyBiggest>
        <Button size="hg">Try Trig for Free</Button>
      </Hero>
    </Layout>
  );
};

export default Index;
