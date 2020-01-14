import React from 'react';
import { render } from '../../test/utils';
import PostLink from '../PostLink';

describe('<PostLink />', () => {
  it('renders correctly', () => {
    const title = 'My cool title';
    const summary = 'my cool summary';
    const alt = 'my cool alt';
    const { getByText, getByAltText, rerender } = render(
      <PostLink
        to="/nowhere"
        imageProps={{
          alt,
        }}
        title={title}
        summary={summary}
      />
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(summary)).toBeInTheDocument();
    expect(getByAltText(alt)).toBeInTheDocument();

    rerender(
      <PostLink to="/nowhere" imageProps={{}} title={title} summary={summary} />
    );
    expect(getByAltText(title)).toBeInTheDocument();
  });
});
