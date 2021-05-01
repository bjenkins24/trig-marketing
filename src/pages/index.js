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
  height: 37rem;
  @media ${device.tabletPortraitUp} {
    height: 60rem;
    padding: 7.2rem 3.2rem 0;
  }
  @media ${device.tabletLandscapeUp} {
    height: 82rem;
    padding: 7.2rem 3.2rem 0;
  }
  @media ${device.desktopUp} {
    height: 94rem;
  }
`;

const MainHeading = styled(Huge)`
  font-size: 3.2rem;
  margin: 0 auto 1.6rem;
  max-width: 73rem;
  & span {
    display: block;
  }
  @media ${device.tabletPortraitUp} {
    font-size: 3.8rem;
  }

  @media ${device.tabletLandscapeUp} {
    font-size: 4.8rem;
  }
  
  @media ${device.desktopUp} {
      font-size: 5.6rem;
  }
}
`;

const Description = styled(BodyBiggest)`
  width: 100%;
  margin: 0 auto ${({ theme }) => theme.space[4]}px;
  span {
    display: block;
  }
  font-size: 1.6rem;
  @media ${device.tabletPortraitUp} {
    width: 90%;
    font-size: 2rem;
  }
  @media ${device.tabletLandscapeUp} {
    width: 100%;
    font-size: 2.4rem;
    margin-bottom: ${({ theme }) => theme.space[5]}px;
  }
  @media ${device.desktopUp} {
    margin-bottom: ${({ theme }) => theme.space[5] + theme.space[1]}px;
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
            Automatically Organize <span>Your Digital Life</span>
          </MainHeading>
          <Description as="p" color="pc" id="subscribe">
            <span>
              Can&apos;t find that document? Stop endlessly searching.{' '}
            </span>
            <span>Find and discover anything. Instantly.</span>
          </Description>
          <Button
            forwardedAs={Link}
            to={`${process.env.APP_URL}/register`}
            css={`
              width: 259px;
              margin-bottom: ${({ theme }) => theme.space[4]}px;
              @media ${device.tabletLandscapeUp} {
                margin-bottom: ${({ theme }) => theme.space[5]}px;
              }
              @media ${device.desktopUp} {
                margin-bottom: ${({ theme }) =>
                  theme.space[5] + theme.space[1]}px;
              }
            `}
            size="hg"
          >
            Try {siteTitle} for Free
          </Button>
          <div>
            <span
              className="wistia_embed wistia_async_fs718sin3z popover=true popoverAnimateThumbnail=true"
              css={`
                & > div > div {
                  border-radius: 10px;
                  box-shadow: ${({ theme }) => theme.sh};
                }
                display: inline-block;
                position: relative;
                height: 180px;
                width: 300px;
                @media ${device.tabletPortraitUp} {
                  height: 325px;
                  width: 550px;
                }
                @media ${device.tabletLandscapeUp} {
                  height: 450px;
                  width: 750px;
                }
                @media ${device.desktopUp} {
                  height: 550px;
                  width: 890px;
                }
              `}
            >
              &nbsp;
            </span>
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
              to={`${process.env.APP_URL}/register`}
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
