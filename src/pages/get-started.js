import React from 'react';
import styled from 'styled-components';
import {
  Huge,
  Heading1,
  BodyBiggest,
  Body2,
  Body1,
  HorizontalGroup,
  Button,
} from '@trig-app/core-components';
import { device } from '@trig-app/constants';
import PaymentForm from '../components/PaymentForm';
import Layout from '../components/Layout';

const Hero = styled.div`
  background: ${({ theme }) => theme.p};
  text-align: center;
  padding: 4.8rem 3.2rem 7.2rem;
  height: auto;
  margin-bottom: 6.4rem;
  @media ${device.tabletPortraitUp} {
    height: 39.5rem;
    padding: 4.8rem 3.2rem 0;
  }
  @media (min-width: 600px) and (max-width: 715px) {
    height: 80rem;
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
  margin: 0 auto 6.4rem;
  @media ${device.tabletPortraitUp} {
    width: 90%;
  }
  @media ${device.tabletLandscapeUp} {
    width: 100%;
    max-width: 77rem;
  }
`;

const ContentContainer = styled(HorizontalGroup)`
  max-width: 110rem;
  margin: 0 auto;
`;

const PaymentBox = styled.div`
  width: 42.6rem;
  flex-shrink: 0;
  box-shadow: ${({ theme }) => theme.sh};
  padding: 4.8rem 3.2rem;
  margin-top: -12rem;
  background: ${({ theme }) => theme.bs[200]};
`;

const Content = styled.div`
  align-self: flex-start;
`;

const GetStarted = () => {
  return (
    <Layout headerProps={{ isLightTheme: false }}>
      <Hero>
        <MainHeading color="pc">
          Reserve Your Spot and Get a Lifetime Subscription*
        </MainHeading>
        <Description as="p" color="pc">
          It’s like putting a deposit on a Tesla, except you don’t get a cool
          electric car, it’s only $40, and you never have to pay again. Ok… So
          it’s nothing like putting a deposit on a Tesla. But it’s still pretty
          awesome.
        </Description>
      </Hero>
      <ContentContainer margin={6.4}>
        <PaymentBox>
          <Heading1
            css={`
              text-align: center;
            `}
          >
            Pay $40 Now, Then Never Pay Again*
          </Heading1>
          <PaymentForm />
          <Body2
            forwardedAs="p"
            css={`
              text-align: center;
            `}
          >
            Your card will be immediately charged $40.00. This charge is{' '}
            <strong>non-recurring</strong>.
          </Body2>
          <Body2
            forwardedAs="p"
            css={`
              text-align: center;
            `}
          >
            Your payment is 100% refundable before our December 14, 2020
            release, by simply contacting us.
          </Body2>
          <Button
            size="hg"
            css={`
              width: 100%;
            `}
          >
            Pay $40 and Reserve <br />
            Your Lifetime Subscription
          </Button>
        </PaymentBox>

        <Content>
          <Body2
            color="ps.200"
            forwardedAs="p"
            css={`
              margin: 0 0 2.4rem 0;
            `}
          >
            * Your lifetime subscription is good for up to 50 users. We only ask
            that you pay data storage costs which are currently at 2.3
            cents/month per GB. After we release, this subscription will cost
            $16/month per user.
          </Body2>
          <Heading1>Coming December 14th, 2020</Heading1>
          <Body1 forwardedAs="p">
            Still not convinced? Trig is going to change the way you work.
            Contact us, and Trig’s founder will be happy to answer your
            questions and hop on a call personally.
          </Body1>
        </Content>
      </ContentContainer>
    </Layout>
  );
};

export default GetStarted;
