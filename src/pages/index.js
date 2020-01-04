import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Button } from '@trig-app/core-components/dist/Buttons';
import {
  Huge,
  BodyBiggest,
  BodyBig,
  Heading1,
} from '@trig-app/core-components/dist/Typography';
import { device } from '@trig-app/constants';
import Layout from '../components/Layout';
import Pricing from '../components/index/Pricing';
import Section from '../components/index/Section';
import FeatureBullets from '../components/index/FeatureBullets';
import useSiteMetadata from '../helpers/hooks/useSiteMetadata';

const bottomMargin = '9.6rem';

const Hero = styled.div`
  background: ${({ theme }) => theme.p};
  height: 84.6rem;
  text-align: center;
  padding: 15rem 3.2rem 0;
  @media ${device.xs} {
    padding: 15rem 3.2rem 7.2rem;
    height: auto;
  }
  @media (min-width: 600px) and (max-width: 715px) {
    height: 80rem;
  }
`;

const MainHeading = styled(Huge)`
  margin-bottom: 1.6rem;
  @media ${device.sm} {
    max-width: 73rem;
    margin: 0 auto 1.6rem;
  }
`;

const BodyBiggestStyled = styled(BodyBiggest)`
  max-width: 87rem;
  margin: 0 auto 6.4rem;
`;

const ButtonStyled = styled(Button)`
  padding: 0 4.5rem;
  display: block;
  margin: 0 auto 6.4rem;
  @media ${device.xs} {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled(Heading1)`
  margin-bottom: 3.2rem;
`;

const ImgStyled = styled(Img)`
  margin-bottom: ${bottomMargin};
`;

const SubHeading = styled(Huge)`
  margin: 16.9rem 0 3.2rem;
  text-align: center;
  @media ${device.xs} {
    margin-top: 6.4rem;
  }
  @media ${device.sm} {
    margin-top: 12.9rem;
  }
`;

const indexTypes = {
  data: PropTypes.object.isRequired,
};

const Index = ({ data }) => {
  const { siteTitle } = useSiteMetadata();
  return (
    <Layout>
      <Hero>
        <MainHeading color="pc">Make a Team of Know-It-Alls</MainHeading>
        <BodyBiggestStyled as="p" color="pc">
          Ew, not like that guy in the breakroom whose parents didn’t love him.
          Let {siteTitle} organize all of your company knowledge, and your team
          will actually know it all.
        </BodyBiggestStyled>
        <ButtonStyled size="hg">Try {siteTitle} for Free</ButtonStyled>
        <div
          css={`
            max-width: 92.8rem;
            margin: 0 auto;
            @media ${device.xs} {
              display: none;
            }
          `}
        >
          <ImgStyled
            alt={`Screenshot of ${siteTitle} in a Laptop`}
            durationFadeIn={300}
            fluid={data.laptop.childImageSharp.fluid}
          />
        </div>
      </Hero>
      <SubHeading>What is {siteTitle}?</SubHeading>
      <Section>
        <FeatureBullets />
      </Section>
      <Section colored fullPadding>
        <div
          css={`
            width: 42.5rem;
          `}
        >
          <SectionTitle>Store all company knowledge in one place</SectionTitle>
          <BodyBig as="p">
            Just like your garage! Wait, no, not like that. You’ll actually be
            able to find things in {siteTitle}
          </BodyBig>
          <BodyBig as="p">
            Store files and links, create documents, and sync with existing
            services like Google Drive and Dropbox. Anything you can think of
            can be stored in {siteTitle} as cards.
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
          alt={`Screenshot of Cards in ${siteTitle}`}
          durationFadeIn={300}
          fixed={data.card.childImageSharp.fixed}
        />
      </Section>
      <Section fullPadding>
        <Img
          css={`
            align-self: center;
          `}
          alt={`Screenshot of Organization in ${siteTitle}`}
          durationFadeIn={300}
          fixed={data.organize.childImageSharp.fixed}
        />
        <div
          css={`
            width: 51.1rem;
          `}
        >
          <SectionTitle>Organizing is a thing of the past</SectionTitle>
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
            With {siteTitle} there are no folders, no tagging, and yup, no sock
            drawers. {siteTitle} surfaces and tags your documents automatically,
            and has a deep full text search. It&apos;s like your company&apos;s
            full-time knowledge organizer.
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
          <SectionTitle>
            Share collections of files, links, and documents
          </SectionTitle>
          <BodyBig as="p">
            If you want your team to read that career changing article you found
            on how to sell ice cream to eskimos (ice has been done), add the
            article to a deck in {siteTitle}.
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
          alt={`Screenshot of Decks in ${siteTitle}`}
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
          <SectionTitle>
            There’s no such things as bad ideas or questions
          </SectionTitle>
          <BodyBig as="p">
            Just kidding. There totally are. But you can’t get to the good ones,
            until you get through the bad ones.
          </BodyBig>
          <BodyBig as="p">
            {siteTitle} lets team members post ideas and administrators can
            review them or open them up for votes. Team members can also post
            questions and
            {siteTitle} will direct them to the right people in your company.
            Answers then stay in your pool of knowledge for others to find when
            they need it.
          </BodyBig>
          <BodyBig as="p">
            Empower your team to come up with ideas, or you’ll never know how
            badly your team wants lunch time lip sync battles.
          </BodyBig>
        </div>
      </Section>
      <Section fullPadding colored title="Pricing">
        <Pricing />
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
        <BodyBig
          as="p"
          css={`
            margin-bottom: 5.6rem;
          `}
        >
          Find out if {siteTitle} is the right tool for your business by getting
          in touch.
        </BodyBig>
        <Button
          size="hg"
          css={`
            padding: 0 3.2rem;
          `}
        >
          Contact Us
        </Button>
      </div>
    </Layout>
  );
};

Index.propTypes = indexTypes;

export default Index;

export const query = graphql`
  query {
    laptop: file(relativePath: { eq: "laptop.png" }) {
      childImageSharp {
        fluid(maxWidth: 928, pngQuality: 100, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
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
