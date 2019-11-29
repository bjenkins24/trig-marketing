import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import { Button } from '@trig-app/core-components/dist/Buttons';
import {
  Huge,
  BodyBiggest,
  BodyBig,
  Heading1,
} from '@trig-app/core-components/dist/Typography';
import Icon from '@trig-app/core-components/dist/Icon';

const bottomMargin = '9.6rem';

const Hero = styled.div`
  padding-top: 15rem;
  background: ${({ theme }) => theme.p};
  height: 84.6rem;
  text-align: center;
`;

const MainHeading = styled(Huge)`
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

const ImgStyled = styled(Img)`
  margin-bottom: ${bottomMargin};
`;

const SubHeading = styled(Huge)`
  margin: 16.9rem 0 3.2rem;
  text-align: center;
`;

const FeatureContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 103rem;
  margin: 0 auto;
`;

const FeatureContainer = styled.div`
  padding-bottom: ${bottomMargin};
  padding-top: ${({ fullPadding }) => (fullPadding ? bottomMargin : 0)};
  background: ${({ colored, theme }) =>
    colored ? theme.bs[300] : theme.bs[200]};
`;

const Section = ({ children, ...restProps }) => {
  return (
    <FeatureContainer {...restProps}>
      <FeatureContent>{children}</FeatureContent>
    </FeatureContainer>
  );
};

const FeatureTitle = styled(Heading1)`
  margin-bottom: 3.2rem;
`;

const BulletInfoContainer = styled.div`
  width: 32rem;
`;

const Bullet = styled.div`
  background: ${({ color, theme }) => theme[color]};
  border-radius: 50%;
  width: 8.8rem;
  height: 8.8rem;
  margin: 0 auto 3.2rem;
`;

const BulletTitle = styled(BodyBig)`
  margin: 0 0 0.8rem 0;
`;

const bulletInfoTypes = {
  color: PropTypes.oneOf(['a1', 'a2', 'a3']).isRequired,
  iconType: PropTypes.oneOf(['aggregate', 'organize', 'deck']).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const BulletInfo = ({ color, iconType, title, description }) => {
  return (
    <BulletInfoContainer>
      <Bullet color={color}>
        <Icon type={iconType} size={5.6} color="bs.200" />
      </Bullet>
      <BulletTitle
        as="h3"
        color="ps.200"
        css={`
          text-align: center;
        `}
      >
        {title}
      </BulletTitle>
      <BodyBig
        as="p"
        css={`
          text-align: center;
        `}
      >
        {description}
      </BodyBig>
    </BulletInfoContainer>
  );
};

BulletInfo.propTypes = bulletInfoTypes;

const Index = ({ data }) => {
  return (
    <Layout>
      <Hero>
        <MainHeading color="pc">Make a Team of Know-It-Alls</MainHeading>
        <BodyBiggestStyled as="p" color="pc">
          Ew, not like that guy in the breakroom whose parents didn’t love him.
          Let Trig
          <br />
          organize all of your company knowledge, and your team will actually
          know it all.
        </BodyBiggestStyled>
        <ButtonStyled size="hg">Try Trig for Free</ButtonStyled>
        <ImgStyled
          alt="Screenshot of Trig in a Laptop"
          durationFadeIn={300}
          fixed={data.laptop.childImageSharp.fixed}
        />
      </Hero>
      <SubHeading>What is Trig?</SubHeading>
      <Section>
        <BulletInfo
          color="a2"
          iconType="aggregate"
          title="One Place for Everything"
          description="Throw in your files, links, and documents, or connect to apps like Google Drive, Dropbox, or Slack"
        />
        <BulletInfo
          color="a1"
          iconType="organize"
          title="Auto Organizing"
          description="No endless folder nesting. Trig organizes for you. Find what you need when you need it."
        />
        <BulletInfo
          color="a3"
          iconType="deck"
          title="Share With Your Team"
          description="Share collections of knowledge with decks. Notify everyone on your team when there's anything new"
        />
      </Section>
      <Section colored fullPadding>
        <div
          css={`
            width: 42.5rem;
          `}
        >
          <FeatureTitle>Store all company knowledge in one place</FeatureTitle>
          <BodyBig as="p">
            Just like your garage! Wait, no, not like that. You’ll actually be
            able to find things in Trig.
          </BodyBig>
          <BodyBig as="p">
            Store files and links, create documents, and sync with existing
            services like Google Drive and Dropbox. Anything you can think of
            can be stored in Trig as cards.
          </BodyBig>
          <BodyBig as="p">
            Empower all your teammates to find what they need exactly when they
            need it.
          </BodyBig>
        </div>
        <Img
          css={`
            align-self: center;
          `}
          alt="Screenshot of Cards in Trig"
          durationFadeIn={300}
          fixed={data.card.childImageSharp.fixed}
        />
      </Section>

      <Section fullPadding>
        <Img
          css={`
            align-self: center;
          `}
          alt="Screenshot of Organization in Trig"
          durationFadeIn={300}
          fixed={data.organize.childImageSharp.fixed}
        />
        <div
          css={`
            width: 51.1rem;
          `}
        >
          <FeatureTitle>Organizing is a thing of the past</FeatureTitle>
          <BodyBig as="p">
            Are you the type of person that organizes your socks by color and
            pattern, but then your partner washes them and throws them in your
            shirt drawer? Not. Cool.
          </BodyBig>
          <BodyBig as="p">
            You might not have sock drawers in your company (maybe you do, we’re
            not judging), but being sabotaged by unorganized co-workers is no
            fun.
          </BodyBig>
          <BodyBig
            as="p"
            css={`
              margin-bottom: 3.2rem;
            `}
          >
            With Trig there are no folders, no tagging, and yup, no sock
            drawers. Trig surfaces and tags your documents automatically, and
            has a deep full text search. It’s like your companies full-time
            knowledge organizer.
          </BodyBig>
          <Button
            css={`
              padding: 0 3.2rem;
            `}
            size="hg"
          >
            Get Organized Now
          </Button>
        </div>
      </Section>
      <Section colored fullPadding>
        <div
          css={`
            width: 42.5rem;
            align-self: center;
          `}
        >
          <FeatureTitle>
            Share collections of files, links, and documents
          </FeatureTitle>
          <BodyBig as="p">
            If you want your team to read that career changing article you found
            on how to sell ice cream to eskimos (ice has been done), add the
            article to a deck in Trig.
          </BodyBig>
          <BodyBig as="p">
            All followers of your deck will be notified immediately that you
            added a new card. You can link to your deck, or even embed it in
            your existing intranet.
          </BodyBig>
        </div>
        <Img
          css={`
            align-self: center;
          `}
          alt="Screenshot of Decks in Trig"
          durationFadeIn={300}
          fixed={data.deck.childImageSharp.fixed}
        />
      </Section>
      <Section fullPadding>
        <div
          css={`
            width: 41.8rem;
            align-self: center;
          `}
        >
          <Huge>Ideas &amp; Questions</Huge>
          <Button
            size="hg"
            css={`
              padding: 0 6.4rem;
            `}
          >
            Get Started Now For Free
          </Button>
        </div>
        <div
          css={`
            width: 51.1rem;
          `}
        >
          <FeatureTitle>
            There’s no such things as bad ideas or questions
          </FeatureTitle>
          <BodyBig as="p">
            Just kidding. There totally are. But you can’t get to the good ones,
            until you get through the bad ones.
          </BodyBig>
          <BodyBig as="p">
            Trig lets team members post ideas and administrators can review them
            or open them up for votes. Team members can also post questions and
            Trig will direct them to the right people in your company. Answers
            then stay in your pool of knowledge for others to find when they
            need it.
          </BodyBig>
          <BodyBig as="p">
            Empower your team to come up with ideas, or you’ll never know how
            badly your team wants lunch time lip sync battles.
          </BodyBig>
        </div>
      </Section>
      <Section fullPadding colored>
        <FeatureTitle>Pricing</FeatureTitle>
      </Section>
      <div
        css={`
          padding: ${bottomMargin};
          text-align: center;
        `}
      >
        <Huge
          css={`
            margin-bottom: 3.2rem;
          `}
        >
          Have Questions?
        </Huge>
        <BodyBig as="p" css={`margin-bottom: 5.6rem`}>
          Find out if Trig is the right tool for your business by getting in
          touch.
        </BodyBig>
        <Button size="hg" css={`padding: 0 3.2rem`}>Contact Us</Button>
      </div>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query {
    laptop: file(relativePath: { eq: "laptop.png" }) {
      childImageSharp {
        fixed(width: 928, height: 532, pngQuality: 100, webpQuality: 100) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    card: file(relativePath: { eq: "card.png" }) {
      childImageSharp {
        fixed(width: 424, height: 320, pngQuality: 100, webpQuality: 100) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    organize: file(relativePath: { eq: "organize.png" }) {
      childImageSharp {
        fixed(width: 450, height: 468, pngQuality: 100, webpQuality: 100) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    deck: file(relativePath: { eq: "deck.png" }) {
      childImageSharp {
        fixed(width: 515, height: 441, pngQuality: 100, webpQuality: 100) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;
