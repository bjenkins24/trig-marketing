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

  return (
    <>
      <ContactForm
        isOpen={isContactFormOpen}
        onRequestClose={() => setIsContactFormOpen(false)}
      />
      <Layout headerProps={{ isLightTheme: false }}>
        <Hero>
          <MainHeading color="pc">
            Automatically Organize Your Digital Life
          </MainHeading>
          <Description as="p" color="pc" id="subscribe">
            <span>
              Can&apos;t find that document? Stop endlessly searching.{' '}
            </span>
            Find and discover anything. Instantly.
          </Description>
          <Button
            size="hg"
            css={`
              width: 259px;
            `}
          >
            Try {siteTitle} for Free
          </Button>
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
        <Section fullPadding colored>
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
              Trig has no manual organizing features at all. No folders and no
              manual tagging. Why? Because you won&apos;t need them.
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
              Search isn&apos;t where it ends. {siteTitle} uses AI to surface
              and tag your cards automatically. It helps you find what you need
              before you know you need it. It&apos;s like your own full-time
              librarian.
            </BodyBig>
            <Button
              forwardedAs={Link}
              to="https://app.trytrig.com/register"
              css={`
                padding: 0 3.2rem;
              `}
              size="hg"
            >
              Try {siteTitle} Now
            </Button>
          </FeatureContainer>
        </Section>
        <Section fullPadding title="Pricing" id="pricing">
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
