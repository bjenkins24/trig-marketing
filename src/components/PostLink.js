import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Body1, Body2 } from '@trig-app/core-components/dist/Typography';

const Container = styled(Link)`
  display: block;
  border-radius: ${({ theme }) => theme.br};
  background: ${({ theme }) => theme.b};
`;

const Content = styled.div`
  padding: 2.4rem;
`;

const Title = styled(Body1).attrs({
  weight: 'bold',
  forwardedAs: 'h1',
})`
  margin: 0 0 1.6rem 0;
`;

const Summary = styled(Body2).attrs({
  color: 'ps.200',
  forwardedAs: 'p',
})`
  margin: 0;
`;

const postLinkTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  imageProps: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
};

const PostLink = ({ title, summary, imageProps, to, ...restProps }) => {
  return (
    <Container to={to} {...restProps}>
      <Img alt={title} durationFadeIn={300} {...imageProps} />
      <Content>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
      </Content>
    </Container>
  );
};

PostLink.propTypes = postLinkTypes;

export default PostLink;
