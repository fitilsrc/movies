import { render } from '@testing-library/react';

import AtomLabel from './atom-label';

describe('AtomLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomLabel />);
    expect(baseElement).toBeTruthy();
  });
});
