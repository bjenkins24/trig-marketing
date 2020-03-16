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
    height: 85.6rem;
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

const Description = styled(BodyBiggest)`
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
    margin: 12.8rem 0 3.2rem;
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
          <MainHeading color="pc">Automatic Knowledge Organizer</MainHeading>
          <Description as="p" color="pc">
            Stop endlessly searching for files, links, or documents. Never
            create another folder or tag again. Throw all of your company
            knowledge in, and Trig will do the rest.
          </Description>
          <div
            css={`
              margin: 0 auto;
              width: 40rem;
              @media ${device.tabletPortraitUp} {
                width: 50rem;
                margin-bottom: 6.4rem;
              }
              text-align: left;
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
              Trig is scheduled to release in 2020. Add your email below and
              we&apos;ll keep you updated!
            </BodyBig>
            <StringFieldWithButtonForm
              buttonContent="Get Updates"
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
            <SectionTitle>
              Store all company knowledge in one place
            </SectionTitle>
            <BodyBig as="p">
              Store files and links, create documents, and sync with existing
              services like Google Drive, Dropbox, and Slack. Anything you can
              think of can be stored in {siteTitle} as cards.
            </BodyBig>
            <BodyBig as="p">
              There&apos;s no need to stop using your current knowledge base. No
              migrations needed. Trig will work with everything you have and
              make it instantly discoverable.
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
              Search through all of your documents in one place. You&apos;ll
              even be able to find the exact location of words within documents.
            </BodyBig>
            <BodyBig
              as="p"
              css={`
                margin-bottom: 3.2rem;
              `}
            >
              Search isn&apos;t where it ends because you don&apos;t know what
              you don&apos;t know. {siteTitle} also uses AI to surface and tag
              your documents automatically. It helps you find what you need
              before you even know you need it. It&apos;s like your
              company&apos;s full-time librarian.
            </BodyBig>
            <Button
              forwardedAs={Link}
              to="/get-started"
              css={`
                padding: 0 3.2rem;
              `}
              size="hg"
            >
              Get a Lifetime Subscription
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
              Sharing collections of documents is easy with decks. You can add
              cards to a deck or let {siteTitle} suggest groups of cards to
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
              to="/get-started"
              size="hg"
              css={`
                padding: 0 6.4rem;
              `}
            >
              Get Lifetime Subscription
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
              to the right people in your company. Answers then stay in your
              pool of knowledge for others to find when they need it.
            </BodyBig>
            <BodyBig as="p">
              {siteTitle} also lets team members post ideas that administrators
              can review or open up for votes. Trig is powerful because
              everything from questions and ideas to files and links are stored
              in Trig as cards and all cards are instantly searchable and
              discoverable.
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
              Get a Lifetime Subscription
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
