import React from 'react';
import { render } from '../../../test/utils';
import FeatureBullets from '../FeatureBullets';

jest.mock('../../../helpers/hooks/useSiteMetadata');

describe('<FeatureBullets />', () => {
  it('renders and takes basic props', () => {
    const { getByTitle } = render(<FeatureBullets />);
    expect(getByTitle(/aggregate icon/i)).toBeInTheDocument();
    expect(getByTitle(/organize icon/i)).toBeInTheDocument();
    expect(getByTitle(/deck icon/i)).toBeInTheDocument();
  });
});
