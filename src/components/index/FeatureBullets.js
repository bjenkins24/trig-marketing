import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BodyBig } from '@trig-app/core-components/dist/Typography';
import Icon from '@trig-app/core-components/dist/Icon';

const BulletInfoContainer = styled.div`
  width: 32rem;
`;

const Bullet = styled.div`
  background: ${({ color, theme }) => theme[color]};
  border-radius: 50%;
  width: 8.8rem;
  height: 8.8rem;
  margin: 0 auto 3.2rem;
  display: flex;
  align-items: center;
`;

const BulletTitle = styled(BodyBig)`
  margin: 0 0 0.8rem 0;
`;

const StyledIcon = styled(Icon)`
  margin: 0 auto;
`;

const bulletInfoTypes = {
  color: PropTypes.oneOf(['a1', 'a2', 'a3']).isRequired,
  renderIcon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const BulletInfo = ({ color, renderIcon, title, description }) => {
  return (
    <BulletInfoContainer>
      <Bullet color={color}>{renderIcon()}</Bullet>
      <BulletTitle
        as="h3"
        color="ps.200"
        css={`
          text-align: center;
        `}
      >
        {title}
      </BulletTitle>
      <BodyBig
        as="p"
        css={`
          text-align: center;
        `}
      >
        {description}
      </BodyBig>
    </BulletInfoContainer>
  );
};

BulletInfo.propTypes = bulletInfoTypes;

const FeatureBullets = () => {
  return (
    <>
      <BulletInfo
        color="a2"
        renderIcon={() => (
          <StyledIcon type="aggregate" size={4.8} color="bs.200" />
        )}
        title="One Place for Everything"
        description="Throw in your files, links, and documents, or connect to apps like Google Drive, Dropbox, or Slack."
      />
      <BulletInfo
        color="a1"
        renderIcon={() => (
          <StyledIcon
            css={`
              position: relative;
              left: -0.2rem;
            `}
            type="organize"
            size={4.8}
            color="bs.200"
          />
        )}
        title="Auto Organizing"
        description="No endless folder nesting. Trig organizes for you. Find what you need when you need it."
      />
      <BulletInfo
        color="a3"
        renderIcon={() => (
          <StyledIcon
            css={`
              position: relative;
              left: -0.2rem;
            `}
            type="deck"
            size={4.8}
            color="bs.200"
          />
        )}
        title="Share With Your Team"
        description="Share collections of knowledge with decks. Notify everyone on your team when there's anything new."
      />
    </>
  );
};

export default FeatureBullets;
