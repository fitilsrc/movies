import { render } from '@testing-library/react';

import AtomHeaderh2 from './atom-headerh2';

describe('AtomHeaderh2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomHeaderh2 />);
    expect(baseElement).toBeTruthy();
  });
});
