import { render } from '@testing-library/react';

import MoleculeLogo from './molecule-logo';

describe('MoleculeLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoleculeLogo />);
    expect(baseElement).toBeTruthy();
  });
});
