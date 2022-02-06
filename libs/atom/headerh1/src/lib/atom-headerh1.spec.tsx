import { render } from '@testing-library/react';

import AtomHeaderh1 from './atom-headerh1';

describe('AtomHeaderh1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomHeaderh1 />);
    expect(baseElement).toBeTruthy();
  });
});
