import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { string } from 'yup';
import {
  HorizontalGroup,
  Logo,
  Heading1,
  Body1,
  Button,
  StringFieldWithButtonForm,
  toast,
} from '@trig-app/core-components';
import { device } from '@trig-app/constants';
import Layout from '../components/Layout';
import PostLink from '../components/PostLink';

const leftRightMargin = 3.2;

const Content = styled.div`
  margin: 4.8rem ${leftRightMargin}rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 144rem;
  @media ${device.desktopUp} {
    flex-wrap: nowrap;
    margin: 9.6rem ${leftRightMargin}rem;
  }
  @media (min-width: ${1440 + leftRightMargin * 10}px) {
    margin: 9.6rem auto;
  }
`;

const Posts = styled(HorizontalGroup)`
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;

  @media ${device.tabletPortraitUp} {
    & > a {
      width: 49.5%;
    }
    & > a:not(:nth-child(2n + 2)) {
      margin-right: 1%;
    }
  }

  @media ${device.tabletLandscapeUp} {
    & > a {
      width: 32.5%;
    }
    & > a:not(:nth-child(2n + 2)) {
      margin-right: 0;
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
  width: 100%;
  @media ${device.tabletLandscapeUp} {
    width: auto;
  }
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
  text-align: center;
  margin-bottom: 3.2rem;
`;

const blogTypes = {
  data: PropTypes.shape({
    allPrismicPost: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            data: PropTypes.shape({
              image: PropTypes.shape({
                alt: PropTypes.string,
                localFile: PropTypes.shape({
                  childImageSharp: PropTypes.shape({
                    fluid: PropTypes.object,
                  }),
                }),
              }),
              summary: PropTypes.shape({
                html: PropTypes.string,
              }),
              title: PropTypes.shape({
                text: PropTypes.string,
              }),
            }),
            uid: PropTypes.string,
          }),
        })
      ),
    }),
  }).isRequired,
};

const Blog = ({ data }) => {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const posts = data.allPrismicPost.edges;

  return (
    <Layout title="Blog">
      <Content>
        <Posts>
          {posts.map(post => {
            const postData = post.node.data;
            const { uid } = post.node;
            return (
              <PostStyled
                key={post.node.id}
                to={`/blog/${uid}`}
                title={postData.title.text}
                summary={postData.summary.html}
                imageProps={{
                  fluid: postData.image.localFile.childImageSharp.fluid,
                  alt: postData.image.alt,
                }}
              />
            );
          })}
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
              Automatic Document Organizer
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
              forwardedAs={Link}
              to="/"
              size="lg"
              css={`
                margin: 0 auto;
              `}
            >
              Learn More
            </Button>
          </Ad>
          <StringFieldWithButtonForm
            buttonContent="Subscribe"
            width="100%"
            label="Subscribe for updates in your inbox"
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
                    "Your email has been added successfully to our list. We'll keep you updated with new blog posts as they happen.",
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
        </Sidebar>
      </Content>
    </Layout>
  );
};

Blog.propTypes = blogTypes;

export default Blog;

export const query = graphql`
  query AllPosts {
    allPrismicPost(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          data {
            image {
              alt
              localFile {
                childImageSharp {
                  fluid(maxHeight: 200, pngQuality: 100, webpQuality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
            summary {
              html
            }
            title {
              text
            }
          }
          uid
        }
      }
    }
  }
`;
