import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { HorizontalGroup } from '@trig-app/core-components/dist/Groups';
import Logo from '@trig-app/core-components/dist/Logo';
import { Heading1, Body1 } from '@trig-app/core-components/dist/Typography';
import { Button } from '@trig-app/core-components/dist/Buttons';
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
  const posts = data.allPrismicPost.edges;

  return (
    <Layout>
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
                  fluid(maxHeight: 216, pngQuality: 100, webpQuality: 100) {
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
