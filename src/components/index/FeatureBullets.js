import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BodyBiggest, BodyBig, Icon } from '@trig-app/core-components';
import { device } from '@trig-app/constants';
import useSiteMetadata from '../../helpers/hooks/useSiteMetadata';

const BulletInfoContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  @media ${device.tabletPortraitUp} {
    width: 60%;
  }
  @media ${device.tabletLandscapeUp} {
    width: 37%;
    margin: 0;
  }
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

const BulletTitle = styled(BodyBiggest)`
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

const BulletInfo = ({
  color,
  renderIcon,
  title,
  description,
  ...restProps
}) => {
  return (
    <BulletInfoContainer {...restProps}>
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3.2rem;
  @media ${device.desktopUp} {
    padding: 0;
  }
  & > *:not(:last-child) {
    padding-right: 2%;
    margin-bottom: 3.2rem;
  }
`;

const FeatureBullets = () => {
  const { siteTitle } = useSiteMetadata();
  return (
    <Container>
      <BulletInfo
        color="a2"
        renderIcon={() => (
          <StyledIcon type="aggregate" size={4.8} color="bs.200" />
        )}
        title="One Place for Everything"
        description={`Anything on the internet like emails, google docs, and articles can be saved to ${siteTitle}.`}
      />
      <BulletInfo
        css={`
          margin-left: auto;
        `}
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
        description={`${siteTitle} automatically tags your cards and allows you to search by the content within them. You'll never lose anything again.`}
      />
    </Container>
  );
};

export default FeatureBullets;
