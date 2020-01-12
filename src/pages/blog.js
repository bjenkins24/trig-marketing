import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { HorizontalGroup } from '@trig-app/core-components/dist/Groups';
import Logo from '@trig-app/core-components/dist/Logo';
import { Heading1, Body1 } from '@trig-app/core-components/dist/Typography';
import { Button } from '@trig-app/core-components/dist/Buttons';
import { device } from '@trig-app/constants';
import Layout from '../components/Layout';
import PostLink from '../components/PostLink';

const Content = styled.div`
  margin: 4.8rem 3.2rem;
  display: flex;
  flex-wrap: wrap;
  @media ${device.desktopUp} {
    flex-wrap: nowrap;
    margin: 9.6rem 3.2rem;
  }
`;

const Posts = styled(HorizontalGroup)`
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;

  @media ${device.tabletLandscapeUp} {
    & > a {
      width: 32.5%;
    }
    & > a:not(:nth-child(3n + 3)) {
      margin-right: 1.25%;
    }
  }
  @media ${device.desktopUp} {
    margin-right: 4rem;
  }
`;

const PostStyled = styled(PostLink)`
  margin-bottom: 2.4rem;
`;

const Sidebar = styled.div`
  width: 100%;
  flex-shrink: 0;
  @media ${device.tabletPortraitUp} {
    width: 34.4rem;
  }
`;

const Ad = styled.div`
  background: ${({ theme }) => theme.p};
  border-radius: ${({ theme }) => theme.br};
  padding: 3.2rem 0;
`;

const Blog = ({ data }) => {
  return (
    <Layout>
      <Content>
        <Posts>
          <PostStyled
            to="/our-first-post"
            title="How to have an Awesome Remote Workforce"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            imageProps={{ fluid: data.blogImage.childImageSharp.fluid }}
          />
          <PostStyled
            to="/our-first-post"
            title="My second post"
            summary="I Love this so much"
            imageProps={{ fluid: data.blogImage.childImageSharp.fluid }}
          />
          <PostStyled
            to="/our-first-post"
            title="My third post"
            summary="I Love this so much"
            imageProps={{ fluid: data.blogImage.childImageSharp.fluid }}
          />
          <PostStyled
            to="/our-first-post"
            title="How to have an Awesome Remote Workforce"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            imageProps={{ fluid: data.blogImage.childImageSharp.fluid }}
          />
          <PostStyled
            to="/our-first-post"
            title="My second post"
            summary="I Love this so much"
            imageProps={{ fluid: data.blogImage.childImageSharp.fluid }}
          />
          <PostStyled
            to="/our-first-post"
            title="My third post"
            summary="I Love this so much"
            imageProps={{ fluid: data.blogImage.childImageSharp.fluid }}
          />
        </Posts>
        <Sidebar>
          <Ad>
            <Logo
              css={`
                display: block;
                margin: 0 auto 5.6rem;
              `}
            />
            <Heading1
              color="pc"
              css={`
                width: 75%;
                margin: 0 auto 0.8rem;
                text-align: center;
              `}
            >
              Make a Team of Know-It-Alls
            </Heading1>
            <Body1
              color="pc"
              css={`
                margin: 0 auto 5.6rem;
                display: block;
                text-align: center;
              `}
            >
              Knowledge Management for Teams
            </Body1>
            <Button
              size="lg"
              css={`
                margin: 0 auto;
                display: block;
              `}
            >
              Learn More
            </Button>
          </Ad>
        </Sidebar>
      </Content>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query {
    blogImage: file(relativePath: { eq: "deck.png" }) {
      childImageSharp {
        fluid(maxHeight: 256, pngQuality: 100, webpQuality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
