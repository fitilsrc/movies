import { render } from '@testing-library/react';

import AtomHeader from './atom-header';

describe('AtomHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomHeader />);
    expect(baseElement).toBeTruthy();
  });
});
