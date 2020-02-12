import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Disqus } from 'gatsby-plugin-disqus';
import { Body2, Button, Separator, Icon } from '@trig-app/core-components';
import { device } from '@trig-app/constants';
import Layout from '../components/Layout';
import useSiteMetadata from '../helpers/hooks/useSiteMetadata';

const span = 65;
const breakpoint = '(min-width: 750px)';

const StickyContainer = styled.div`
  position: absolute;
  height: 100%;
  left: -21rem;
  top: 0.7rem;
  display: none;
  @media ${device.desktopUp} {
    display: block;
  }
`;

const StickySidebar = styled.div`
  position: sticky;
  top: 10rem;
  width: 13rem;
`;

const ShareContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.p};
  transform: translateX(-0.6rem);
  width: calc(100% + 0.6rem);
`;

const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.3;
  margin: 4.8rem auto 4rem;
  width: calc(100% - 6.4rem);
  padding: 0 3.2rem;
  @media ${breakpoint} {
    font-size: 4.8rem;
    width: ${span}rem;
    padding: 0;
  }
`;

const ImgStyled = styled(Img)`
  max-width: ${span}rem;
  margin: 0 auto;
  display: block;
  @media ${breakpoint} {
    border-radius: ${({ theme }) => theme.br};
  }
`;

const Content = styled.div`
  position: relative;
  width: calc(100% - 6.4rem);
  padding: 0 3.2rem;
  @media ${breakpoint} {
    width: ${span}rem;
    padding: 0;
  }
  margin: 4rem auto 9.6rem;
`;

const ContentStyles = styled.div`
  h1 {
    font-size: 3.4rem;
    line-height: 1.3;
    margin: 4rem 0 2.4rem;
  }
  a {
    color: ${({ theme }) => theme.ss[400]};
    &:hover {
      color: ${({ theme }) => theme.ss[700]};
    }
  }
  p {
    font-size: 1.8rem;
    line-height: 1.6;
    @media ${breakpoint} {
      font-size: 2rem;
    }
  }
  li {
    font-size: 1.8rem;
    line-height: 1.6;
    @media ${breakpoint} {
      font-size: 2rem;
    }
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
    max-width: 100%;
    @media ${breakpoint} {
      max-width: ${span}rem;
    }
  }
  iframe {
    width: 100%;
    /* 16:9 aspect ratio - too much work to worry about anything else */
    @media ${breakpoint} {
      height: ${span * 0.5625}rem;
    }
  }
  div[data-oembed] {
    margin: 2.4rem 0;
  }
`;

const postTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    prismicPost: PropTypes.shape({
      id: PropTypes.string,
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

const Post = ({ data: { prismicPost }, location }) => {
  const { siteUrl } = useSiteMetadata();
  const { data, id } = prismicPost;
  const url = encodeURIComponent(`${siteUrl}${location.pathname}`);
  const encodedUrl = encodeURIComponent(url);

  const disqusConfig = {
    url,
    identifier: id,
    title: data.title.text,
  };

  return (
    <Layout>
      <Title>{data.title.text}</Title>
      <ImgStyled
        alt={data.image.alt}
        durationFadeIn={300}
        fluid={data.image.localFile.childImageSharp.fluid}
      />
      <Content>
        <StickyContainer>
          <StickySidebar>
            <Body2
              forwardedAs="p"
              weight="bold"
              css={`
                margin: 0;
              `}
            >
              Make a Team of Know-It-Alls
            </Body2>
            <Body2
              forwardedAs="p"
              color="ps.200"
              css={`
                margin: 0 0 0.8rem;
              `}
            >
              Knowledge Base for Teams
            </Body2>
            <Button
              forwardedAs={Link}
              to="/"
              size="md"
              variant="inverse-s"
              css={`
                margin-bottom: 2.4rem;
                width: 100%;
              `}
            >
              Learn More
            </Button>
            <Separator
              color="ps.50"
              css={`
                margin-bottom: 2.4rem;
              `}
            />
            <ShareContainer>
              <a
                href={`http://www.facebook.com/share.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon type="facebook" size={2.4} title="Share on Facebook" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(
                  data.title.text
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon type="twitter" size={2.4} title="Tweet" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon type="linkedIn" size={2.4} />
              </a>
            </ShareContainer>
          </StickySidebar>
        </StickyContainer>
        <ContentStyles
          dangerouslySetInnerHTML={{ __html: data.content.html }}
        />
        <Disqus config={disqusConfig} />
      </Content>
    </Layout>
  );
};

Post.propTypes = postTypes;

export default Post;

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      id
      data {
        title {
          text
        }
        image {
          alt
          localFile {
            childImageSharp {
              fluid(maxHeight: 410, pngQuality: 100, webpQuality: 100) {
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
