import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Heading1 } from '@trig-app/core-components';
import { device } from '@trig-app/constants';

const FeatureContainer = styled.section`
  padding: ${({ fullPadding }) => (fullPadding ? '6.4rem 4rem' : 0)};
  background: ${({ colored, theme }) =>
    colored ? theme.bs[300] : theme.bs[200]};
  @media ${device.tabletLandscapeUp} {
    padding: ${({ fullPadding }) => (fullPadding ? '9.6rem' : '0 0 4.8rem 0')};
  }
`;

const FeatureContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 103rem;
  margin: 0 auto;
  flex-wrap: wrap;
  @media ${device.desktopUp} {
    flex-wrap: nowrap;
  }
`;

const sectionTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  fullPadding: PropTypes.bool,
  colored: PropTypes.bool,
};

const sectionDefaultProps = {
  title: '',
  fullPadding: false,
  colored: false,
};

const Section = ({ children, title, fullPadding, colored, ...restProps }) => {
  return (
    <FeatureContainer
      fullPadding={fullPadding}
      colored={colored}
      {...restProps}
    >
      {title && (
        <Heading1
          css={`
            margin: 0 auto 5.6rem;
            text-align: center;
          `}
        >
          {title}
        </Heading1>
      )}
      <FeatureContent>{children}</FeatureContent>
    </FeatureContainer>
  );
};

Section.defaultProps = sectionDefaultProps;
Section.propTypes = sectionTypes;

export default Section;
