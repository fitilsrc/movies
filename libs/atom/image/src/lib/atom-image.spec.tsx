import { render } from '@testing-library/react';

import AtomImage from './atom-image';

describe('AtomImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomImage />);
    expect(baseElement).toBeTruthy();
  });
});
