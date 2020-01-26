import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  Huge,
  BodyBiggest,
  BodyBig,
  Heading1,
  Separator,
  Button,
  Modal,
} from '@trig-app/core-components';
import { device } from '@trig-app/constants';
import Layout from '../components/Layout';
import Pricing from '../components/index/Pricing';
import Section from '../components/index/Section';
import FeatureBullets from '../components/index/FeatureBullets';
import useSiteMetadata from '../helpers/hooks/useSiteMetadata';
import ContactForm from '../components/ContactForm';

const bottomMargin = '9.6rem';

const Hero = styled.div`
  background: ${({ theme }) => theme.p};
  text-align: center;
  padding: 4.8rem 3.2rem 7.2rem;
  height: auto;
  @media ${device.tabletPortraitUp} {
    height: 84.6rem;
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
    max-width: none;
    margin-bottom: 1.6rem;
  }
  @media (min-width: 815px) and (max-width: 1003px) {
    max-width: 73rem;
  }
`;

const Body2Styled = styled(BodyBiggest)`
  width: 100%;
  margin: 0 auto 6.4rem;
  @media ${device.tabletPortraitUp} {
    width: 90%;
  }
  @media ${device.tabletLandscapeUp} {
    width: 100%;
    max-width: 87rem;
  }
`;

const ButtonStyled = styled(Button)`
  padding: 0 4.5rem;
  display: block;
  margin: 0 auto;
  @media ${device.tabletPortraitUp} {
    margin: 0 auto 6.4rem;
  }
`;

const FeatureContainer = styled.div`
  width: 100%;
  @media ${device.tabletPortraitUp} {
    width: 75%;
  }
  @media ${device.tabletLandscapeUp} {
    width: 70%;
  }
  @media ${device.desktopUp} {
    width: 48%;
    margin: 0 2% 0 0;
  }
`;

const SectionTitle = styled(Heading1)`
  margin-bottom: 3.2rem;
`;

const ImgContainer = styled.div`
  max-width: 51.5rem;
  width: 100%;
  margin: 0 auto;
  @media ${device.desktopUp} {
    margin: 0;
  }
  display: block;
`;

const ImgStyled = styled(Img)`
  margin-bottom: ${bottomMargin};
`;

const SubHeading = styled(Huge)`
  text-align: center;
  margin-top: 6.4rem;
  @media ${device.tabletPortraitUp} {
    margin-top: 12rem;
  }
  @media ${device.tabletLandscapeUp} {
    margin: 16rem 0 3.2rem;
  }
  @media ${device.desktopUp} {
    margin: 12.8rem 0 3.2rem;
  }
`;

const indexTypes = {
  data: PropTypes.object.isRequired,
};

const Index = ({ data }) => {
  const { siteTitle } = useSiteMetadata();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isContactFormOpen}
        onRequestClose={() => setIsContactFormOpen(false)}
        mainSelector="#___gatsby"
      >
        <Heading1>Contact Us</Heading1>
        <Separator
          css={`
            margin-bottom: 3.2rem;
          `}
        />
        <ContactForm afterSubmit={() => setIsContactFormOpen(false)} />
      </Modal>
      <Layout headerProps={{ isLightTheme: false }}>
        <Hero>
          <MainHeading color="pc">Make a Team of Know-It-Alls</MainHeading>
          <Body2Styled as="p" color="pc">
            Ew, not like that guy in the breakroom whose parents didn’t love
            him. Let {siteTitle} organize all of your company knowledge, and
            your team will actually know it all.
          </Body2Styled>
          <ButtonStyled size="hg">Try {siteTitle} for Free</ButtonStyled>
          <div
            css={`
              display: none;
              @media ${device.tabletPortraitUp} {
                max-width: 92.8rem;
                margin: 0 auto;
                display: block;
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
          <FeatureContainer
            css={`
              margin: 0 auto 3.2rem;
            `}
          >
            <SectionTitle>
              Store all company knowledge in one place
            </SectionTitle>
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
              Empower all your teammates to find what they need exactly when
              they need it.
            </BodyBig>
          </FeatureContainer>
          <ImgContainer
            css={`
              max-width: 42.4rem;
            `}
          >
            <Img
              css={`
                align-self: center;
                margin: 0 auto;
                @media ${device.desktopUp} {
                  margin: 0;
                }
              `}
              alt={`Screenshot of Cards in ${siteTitle}`}
              durationFadeIn={300}
              fluid={data.card.childImageSharp.fluid}
            />
          </ImgContainer>
        </Section>
        <Section fullPadding>
          <ImgContainer
            css={`
              max-width: 45rem;
            `}
          >
            <Img
              css={`
                align-self: center;
                margin: 0 auto 3.2rem;
                @media ${device.desktopUp} {
                  margin: 0;
                }
              `}
              alt={`Screenshot of Organization in ${siteTitle}`}
              durationFadeIn={300}
              fluid={data.organize.childImageSharp.fluid}
            />
          </ImgContainer>
          <FeatureContainer
            css={`
              margin: 0 auto;
            `}
          >
            <SectionTitle>Organizing is a thing of the past</SectionTitle>
            <BodyBig as="p">
              Are you the type of person that organizes your socks by color and
              pattern, but then your partner washes them and throws them in your
              shirt drawer? Not. Cool.
            </BodyBig>
            <BodyBig as="p">
              You might not have sock drawers in your company (maybe you do,
              we’re not judging), but being sabotaged by unorganized co-workers
              is no fun.
            </BodyBig>
            <BodyBig
              as="p"
              css={`
                margin-bottom: 3.2rem;
              `}
            >
              With {siteTitle} there are no folders, no tagging, and yup, no
              sock drawers. {siteTitle} surfaces and tags your documents
              automatically, and has a deep full text search. It&apos;s like
              your company&apos;s full-time knowledge organizer.
            </BodyBig>
            <Button
              css={`
                padding: 0 3.2rem;
              `}
              size="hg"
            >
              Get Organized Now
            </Button>
          </FeatureContainer>
        </Section>
        <Section colored fullPadding>
          <FeatureContainer
            css={`
              margin: 0 auto 3.2rem;
              align-self: center;
            `}
          >
            <SectionTitle>
              Share collections of files, links, and documents
            </SectionTitle>
            <BodyBig as="p">
              If you want your team to read that career changing article you
              found on how to sell ice cream to eskimos (ice has been done), add
              the article to a deck in {siteTitle}.
            </BodyBig>
            <BodyBig as="p">
              All followers of your deck will be notified immediately that you
              added a new card. You can link to your deck, or even embed it in
              your existing intranet.
            </BodyBig>
          </FeatureContainer>
          <ImgContainer
            css={`
              width: 51.5rem;
            `}
          >
            <Img
              css={`
                align-self: center;
                margin: 0 auto;
                @media ${device.desktopUp} {
                  margin: 0;
                }
              `}
              alt={`Screenshot of Decks in ${siteTitle}`}
              durationFadeIn={300}
              fluid={data.deck.childImageSharp.fluid}
            />
          </ImgContainer>
        </Section>
        <Section fullPadding>
          <div
            css={`
              display: none;
              @media ${device.desktopUp} {
                display: block;
                width: 41.8rem;
                align-self: center;
              }
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
              margin: 0 auto;
              @media ${device.desktopUp} {
                margin: 0;
              }
            `}
          >
            <SectionTitle>
              There’s no such things as bad ideas or questions
            </SectionTitle>
            <BodyBig as="p">
              Just kidding. There totally are. But you can’t get to the good
              ones, until you get through the bad ones.
            </BodyBig>
            <BodyBig as="p">
              {siteTitle} lets team members post ideas and administrators can
              review them or open them up for votes. Team members can also post
              questions and
              {siteTitle} will direct them to the right people in your company.
              Answers then stay in your pool of knowledge for others to find
              when they need it.
            </BodyBig>
            <BodyBig
              as="p"
              css={`
                margin-bottom: 3.2rem;
              `}
            >
              Empower your team to come up with ideas, or you’ll never know how
              badly your team wants lunch time lip sync battles.
            </BodyBig>
            <Button
              size="hg"
              css={`
                padding: 0 6.4rem;
                @media ${device.desktopUp} {
                  display: none;
                }
              `}
            >
              Get Started Now For Free
            </Button>
          </div>
        </Section>
        <Section fullPadding colored title="Pricing" id="pricing">
          <Pricing />
        </Section>
        <div
          css={`
            padding: 6.4rem 4rem;
            @media ${device.desktopUp} {
              padding: ${bottomMargin};
            }
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
            Find out if {siteTitle} is the right tool for your business by
            getting in touch.
          </BodyBig>
          <Button
            size="hg"
            css={`
              padding: 0 3.2rem;
            `}
            onClick={() => setIsContactFormOpen(true)}
          >
            Contact Us
          </Button>
        </div>
      </Layout>
    </>
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
        fluid(maxWidth: 424, pngQuality: 100, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    organize: file(relativePath: { eq: "organize.png" }) {
      childImageSharp {
        fluid(maxWidth: 450, pngQuality: 100, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    deck: file(relativePath: { eq: "deck.png" }) {
      childImageSharp {
        fluid(maxWidth: 515, pngQuality: 100, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
