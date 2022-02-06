import { render } from '@testing-library/react';

import AtomRating from './atom-rating';

describe('AtomRating', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomRating />);
    expect(baseElement).toBeTruthy();
  });
});
