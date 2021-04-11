import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import {
  Huge,
  BodyBiggest,
  BodyBig,
  Heading1,
  Button,
  StringFieldWithButtonForm,
  toast,
} from '@trig-app/core-components';
import { device } from '@trig-app/constants';
import { string } from 'yup';
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
    height: 93.6rem;
    padding: 7.2rem 3.2rem 0;
  }
  @media (min-width: 600px) and (max-width: 715px) {
    height: 80rem;
  }
`;

const MainHeading = styled(Huge)`
  font-size: 3.6rem;
  margin: 0 auto 1.6rem;
  max-width: 73rem;
  @media ${device.tabletPortraitUp} {
    max-width: none;
    margin-bottom: 1.6rem;
    span {
      display: block;
    }
  }
  @media (min-width: 815px) and (max-width: 1003px) {
    font-size: 4.8rem;
    max-width: 73rem;
    span {
      display: inline;
    }
  }

  @media ${device.tabletLandscapeUp} {
    font-size: 4.8rem;
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
    max-width: 87rem;
    span {
      display: block;
    }
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
    margin: 0 4% 0 0;
  }
`;

const SectionTitle = styled(Heading1)`
  margin-bottom: 3.2rem;
`;

const ImgContainer = styled.div`
  max-width: 51.5rem;
  width: 100%;
  margin: 0 auto;
  align-self: center;
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
    margin: 16rem 0 3.2rem;
  }
`;

const indexTypes = {
  data: PropTypes.object.isRequired,
};

const Index = ({ data }) => {
  const { siteTitle } = useSiteMetadata();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  return (
    <>
      <ContactForm
        isOpen={isContactFormOpen}
        onRequestClose={() => setIsContactFormOpen(false)}
      />
      <Layout headerProps={{ isLightTheme: false }}>
        <Hero>
          <MainHeading color="pc">
            The Thread that Connects <span>Your Team&apos;s Apps Together</span>
          </MainHeading>
          <Description as="p" color="pc" id="subscribe">
            <span>
              Can&apos;t find that document? Stop endlessly searching.{' '}
            </span>
            Connect your team&apos;s apps and let Trig do the rest.
          </Description>
          <Heading1 color="pc">Coming May 2021</Heading1>
          <div
            css={`
              margin: 0 auto;
              width: 40rem;
              text-align: left;
              @media ${device.tabletPortraitUp} {
                width: 50rem;
                margin-bottom: 12rem;
              }
              @media ${device.tabletLandscapeUp} {
                margin-bottom: 8rem;
              }
            `}
          >
            <BodyBig
              color="pc"
              css={`
                text-align: center;
                margin-bottom: 0.8rem;
              `}
              as="p"
            >
              Add your email to know when we release!
            </BodyBig>
            <StringFieldWithButtonForm
              buttonContent="Get Updates"
              type="email"
              buttonProps={{ variant: 's' }}
              width="100%"
              placeholder="E-mail Address"
              loading={isSubscribing}
              validate={string()
                .required('Please enter an email.')
                .email('Please enter a valid email.')}
              onSubmit={async ({ value, resetForm }) => {
                setIsSubscribing(true);
                const response = await fetch('/.netlify/functions/subscribe', {
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  method: 'POST',
                  body: JSON.stringify({ email: value }),
                });
                setIsSubscribing(false);
                if (response.status === 200) {
                  resetForm();
                  toast({
                    message:
                      "Thank you for your interest in Trig. Your email has been added successfully to our list. You'll be the first to know when we launch!",
                    timeout: 6000,
                  });
                }
                if (response.status !== 200) {
                  toast({
                    type: 'error',
                    message:
                      'Something went wrong. If this continues, please contact us.',
                  });
                }
              }}
            />
          </div>
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
            <SectionTitle>Store all team knowledge in one place</SectionTitle>
            <BodyBig as="p">
              Anything you can think of can be stored in {siteTitle} as cards.
              Connect to dozens of services and store all of your links and
              files.
            </BodyBig>
            <BodyBig as="p">
              There&apos;s no need to stop using your current knowledge base or
              tools. No migrations needed. Trig will work with everything you
              have <em>and</em> make it instantly discoverable.
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
              Think about it. No more folders. No more tagging. Actually, Trig
              has no manual organizing features at all. Why? Because you
              won&apos;t need them.
            </BodyBig>

            <BodyBig as="p">
              Search through all of your apps and documents in one place.
              You&apos;ll even be able to find the exact location of words
              within documents.
            </BodyBig>
            <BodyBig
              as="p"
              css={`
                margin-bottom: 3.2rem;
              `}
            >
              Search isn&apos;t where it ends. {siteTitle} also uses AI to
              surface and tag your cards automatically. It helps you find what
              you need before you know you need it. It&apos;s like your
              team&apos;s full-time librarian.
            </BodyBig>
            <Button
              forwardedAs={Link}
              to="/#subscribe"
              css={`
                padding: 0 3.2rem;
              `}
              size="hg"
            >
              Get Release Updates
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
              Sharing collections of cards is easy by creating a deck. You can
              add cards to a deck or let {siteTitle} suggest groups of cards to
              automatically add to a deck.
            </BodyBig>
            <BodyBig as="p">
              Members of your team that follow your deck will be notified
              immediately when you add a new card. You can link to your deck,
              make it public, or even embed it in your existing intranet.
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
              forwardedAs={Link}
              to="/#subscribe"
              size="hg"
              css={`
                padding: 0 6.4rem;
              `}
            >
              Get Release Updates
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
              Get Your Employee&apos;s Questions Answered
            </SectionTitle>
            <BodyBig as="p">
              Team members can post questions and {siteTitle} will direct them
              to the right people in your team. Answers then stay in your pool
              of knowledge for others to find when they need it.
            </BodyBig>
            <BodyBig as="p">
              {siteTitle} also lets team members post ideas that administrators
              can review or open up for votes.
            </BodyBig>
            <Button
              as={Link}
              size="hg"
              to="/#subscribe"
              css={`
                padding: 0 6.4rem;
                @media ${device.desktopUp} {
                  display: none;
                }
              `}
            >
              Get Release Updates
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
