import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';

const span = 65;

const Title = styled.h1`
  font-size: 4.8rem;
  line-height: 1.3;
  margin: 4.8rem auto 4rem;
  width: ${span}rem;
`;

const ImgStyled = styled(Img)`
  margin-bottom: 4rem;
`;

const Content = styled.div`
  width: ${span}rem;
  margin: 0 auto 9.6rem;
  h1 {
    font-size: 3.4rem;
    line-height: 1.3;
    margin: 4rem 0 2.4rem;
  }
  p {
    font-size: 2.1rem;
    line-height: 1.6;
  }
  li {
    font-size: 2.1rem;
    line-height: 1.6;
  }
  pre {
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    color: #f8f8f2;
    background: #272922;
    font-size: 1.6rem;
    border-radius: 0.4rem;
    padding: 1.6rem;
  }
  img {
    max-width: ${span}rem;
  }
  iframe {
    width: 100%;
    /* 16:9 aspect ratio - too much work to worry about anything else */
    height: ${span * 0.5625}rem;
  }
  div[data-oembed] {
    margin: 2.4rem 0;
  }
`;

const postTypes = {
  data: PropTypes.shape({
    prismicPost: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string,
        }),
        content: PropTypes.shape({
          html: PropTypes.string,
        }),
        image: PropTypes.shape({
          alt: PropTypes.string,
          localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object,
            }),
          }),
        }),
      }),
    }),
  }).isRequired,
};

/* eslint-disable react/no-danger */
const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost;

  return (
    <Layout>
      <Title>{data.title.text}</Title>
      <ImgStyled
        alt={data.image.alt}
        durationFadeIn={300}
        fluid={data.image.localFile.childImageSharp.fluid}
      />
      <Content dangerouslySetInnerHTML={{ __html: data.content.html }} />
    </Layout>
  );
};

Post.propTypes = postTypes;

export default Post;

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        image {
          alt
          localFile {
            childImageSharp {
              fluid(maxHeight: 216, pngQuality: 100, webpQuality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        content {
          html
        }
      }
    }
  }
`;
