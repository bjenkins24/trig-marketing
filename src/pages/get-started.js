import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  Huge,
  Heading1,
  BodyBiggest,
  Body2,
  Body1,
  Button,
} from '@trig-app/core-components';
import { device } from '@trig-app/constants';
import GlobalStyle from '../../global.css';
import PaymentForm from '../components/PaymentForm';
import ContactForm from '../components/ContactForm';
import useSiteMetadata from '../helpers/hooks/useSiteMetadata';
import Layout from '../components/Layout';

const Hero = styled.div`
  background: ${({ theme }) => theme.p};
  text-align: center;
  padding: 4.8rem 3.2rem 7.2rem;
  height: auto;
  margin-bottom: 3.2rem;
  @media ${device.desktopUp} {
    padding-bottom: 12.8rem;
    margin-bottom: 6.4rem;
  }
`;

const MainHeading = styled(Huge)`
  margin: 0 auto 1.6rem;
  max-width: 73rem;
  @media ${device.tabletPortraitUp} {
    max-width: 90rem;
    margin-bottom: 1.6rem;
  }
`;

const Description = styled(BodyBiggest)`
  width: 100%;
  margin: 0 auto;
  @media ${device.tabletPortraitUp} {
    width: 90%;
  }
  @media ${device.tabletLandscapeUp} {
    width: 100%;
    max-width: 81rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  max-width: 70rem;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 0 3.2rem;
  & > *:not(:last-child) {
    margin: 0;
  }
  @media ${device.tabletLandscapeUp} {
    padding: 0;
  }
  @media ${device.desktopUp} {
    max-width: 110rem;
    flex-wrap: nowrap;
    & > *:not(:last-child) {
      margin-right: 6.4rem;
    }
  }
`;

const ImgStyled = styled(Img)`
  display: none;
  @media ${device.desktopUp} {
    display: block;
  }
`;

const PaymentBox = styled.div`
  box-shadow: ${({ theme }) => theme.sh};
  padding: 4.8rem 3.2rem;
  background: ${({ theme }) => theme.bs[200]};
  width: 100%;
  margin: 0 auto 3.2rem;
  @media ${device.desktopUp} {
    margin: -12rem 0 6.4rem 0;
    width: 42.6rem;
    flex-shrink: 0;
  }
`;

const Content = styled.div`
  align-self: flex-start;
`;

const Success = styled.div`
  background: ${({ theme }) => theme.p};
  height: 100vh;
`;

const SuccessContent = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  max-width: 85rem;
  text-align: center;
`;

const getStartedTypes = {
  data: PropTypes.object.isRequired,
};

const GetStarted = ({ data }) => {
  const { siteTitle } = useSiteMetadata();
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return !paymentSucceeded ? (
    <>
      <ContactForm
        isOpen={isContactFormOpen}
        onRequestClose={() => setIsContactFormOpen(false)}
      />
      <Layout headerProps={{ isLightTheme: false }}>
        <Hero>
          <MainHeading color="pc">
            Reserve Your Spot and Get a Lifetime Subscription*
          </MainHeading>
          <Description as="p" color="pc">
            It’s like putting a deposit down on a Tesla&mdash; except you don’t
            get a cool electric car, the deposit is only $40, and you never have
            to pay again. Ok… so it’s nothing like putting a deposit down on a
            Tesla. But it’s still pretty awesome.
          </Description>
        </Hero>
        <ContentContainer margin={6.4}>
          <Content>
            <Body2
              color="ps.200"
              forwardedAs="p"
              css={`
                margin: 0 0 2.4rem 0;
              `}
            >
              * Your lifetime subscription is good for up to 50 users. We only
              ask that you pay data storage costs which are currently at 2.3
              cents/month per GB. After we release, this subscription will cost
              $16/month per user.
            </Body2>
            <Heading1>Coming December 14, 2020</Heading1>
            <Body1
              forwardedAs="p"
              css={`
                margin-bottom: 3.2rem;
                @media ${device.desktopUp} {
                  margin-bottom: 6.4rem;
                }
              `}
            >
              Still not convinced? Trig is going to change the way you work.{' '}
              <Button
                variant="inline"
                type="button"
                onClick={() => setIsContactFormOpen(true)}
              >
                Contact us
              </Button>
              , and Trig’s founder will be happy to answer your questions and
              hop on a call, personally.
            </Body1>
            <ImgStyled
              alt={`Screenshot of ${siteTitle} in a Laptop`}
              durationFadeIn={300}
              fluid={data.laptop.childImageSharp.fluid}
            />
          </Content>
          <PaymentBox>
            <Heading1
              css={`
                text-align: center;
                margin-bottom: 4.8rem;
              `}
            >
              Pay $40 Now, Then Never Pay Again*
            </Heading1>
            <PaymentForm onSuccess={() => setPaymentSucceeded(true)} />
          </PaymentBox>
        </ContentContainer>
      </Layout>
    </>
  ) : (
    <>
      <GlobalStyle />
      <Success>
        <SuccessContent>
          <Huge color="pc">Your Lifetime Subscription is Reserved!</Huge>
          <BodyBiggest as="p" color="pc">
            Your payment went through successfully. We&apos;ll be in touch every
            step of the way before our December 14, 2020 release. If you have
            any any any any thoughts or questions about what we&apos;re working
            on, please reach reach out!
          </BodyBiggest>
          <Button size="hg" as={Link} to="/">
            Back to Home
          </Button>
        </SuccessContent>
      </Success>
    </>
  );
};

GetStarted.propTypes = getStartedTypes;

export default GetStarted;

export const query = graphql`
  query {
    laptop: file(relativePath: { eq: "laptop.png" }) {
      childImageSharp {
        fluid(maxWidth: 928, pngQuality: 100, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
