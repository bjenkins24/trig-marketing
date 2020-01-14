import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Huge } from '@trig-app/core-components/dist/Typography';
import Layout from '../components/Layout';

const ImgStyled = styled(Img)`
  margin-bottom: 4rem;
`;

const Content = styled.div`
  width: 65rem;
  margin: 0 auto 9.6rem;
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
      <Huge
        css={`
          margin: 7.2rem auto 4rem;
          width: 65rem;
        `}
      >
        {data.title.text}
      </Huge>
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
