import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import { Button } from '@trig-app/core-components/dist/Buttons';
import { Huge, BodyBiggest } from '@trig-app/core-components/dist/Typography';

const Hero = styled.div`
  padding-top: 15rem;
  background: ${({ theme }) => theme.p};
  height: 84.6rem;
  text-align: center;
`;

const HugeStyled = styled(Huge)`
  margin-bottom: 1.6rem;
`;

const BodyBiggestStyled = styled(BodyBiggest)`
  margin-bottom: 6.4rem;
`;

const ButtonStyled = styled(Button)`
  padding: 0 4.5rem;
  display: block;
  margin: 0 auto 6.4rem;
`;

const Index = ({ data }) => {
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
        <Img fixed={data.file.childImageSharp.fixed} />
      </Hero>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query {
    file(relativePath: { eq: "laptop.png" }) {
      childImageSharp {
        fixed(width: 911, height: 532) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
