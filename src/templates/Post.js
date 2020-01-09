import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const postTypes = {
  data: PropTypes.shape({
    prismicPost: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string,
          html: PropTypes.string,
        }),
        content: PropTypes.shape({
          text: PropTypes.string,
          html: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

/* eslint-disable react/no-danger */
const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost;

  return (
    <>
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
    </>
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
        content {
          html
        }
      }
    }
  }
`;
