import { render } from '@testing-library/react';

import AtomMenulink from './atom-menulink';

describe('AtomMenulink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomMenulink />);
    expect(baseElement).toBeTruthy();
  });
});
