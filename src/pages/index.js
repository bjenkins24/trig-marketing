import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Button } from '@trig-app/core-components/dist/Buttons';
import { Huge, BodyBiggest } from '@trig-app/core-components/dist/Typography';

const Hero = styled.div`
  padding-top: 15rem;
  background: ${({ theme }) => theme.p};
  height: 99.3rem;
  text-align: center;
`;

const HugeStyled = styled(Huge)`
  margin-bottom: 1.6rem;
`;

const ButtonStyled = styled(Button)`
  padding: 0 4.5rem;
`;

const BodyBiggestStyled = styled(BodyBiggest)`
  margin-bottom: 6rem;
`;

const Index = () => {
  return (
    <Layout>
      <Hero>
        <HugeStyled color="pc">Make a Team of Know-It-Alls</HugeStyled>
        <BodyBiggestStyled as="p" color="pc">
          Ew, not like that guy in the breakroom whose parents didn’t love him.
          Let Trig
          <br />
          organize all of your company knowledge, and your team will actually
          know it all.
        </BodyBiggestStyled>
        <ButtonStyled size="hg">Try Trig for Free</ButtonStyled>
      </Hero>
    </Layout>
  );
};

export default Index;
