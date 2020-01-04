import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Heading1 } from '@trig-app/core-components/dist/Typography';
import { device } from '@trig-app/constants';

export const paddingTopBottom = '9.6rem';

const FeatureContainer = styled.section`
  padding-bottom: ${paddingTopBottom};
  padding-top: ${({ fullPadding }) => (fullPadding ? paddingTopBottom : 0)};
  background: ${({ colored, theme }) =>
    colored ? theme.bs[300] : theme.bs[200]};
  @media ${device.sm}, ${device.xs} {
    padding-bottom: 3.2rem;
  }
`;

const FeatureContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 103rem;
  padding: 0 3.2rem;
  margin: 0 auto;
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
