import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { HorizontalGroup } from '@trig-app/core-components/dist/Groups';
import Layout from '../components/Layout';
import PostLink from '../components/PostLink';

const Posts = styled(HorizontalGroup)`
  margin: 9.6rem auto;
  width: 80%;
  align-items: flex-start;
  flex-wrap: wrap;
  & > a {
    width: 32%;
  }
  & > a:not(:last-child) {
    margin-right: 1%;
  }
`;

const PostStyled = styled(PostLink)`
  margin-bottom: 2.4rem;
`;

const Blog = ({ data }) => {
  return (
    <Layout>
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
