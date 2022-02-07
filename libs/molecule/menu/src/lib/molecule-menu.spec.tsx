import { render } from '@testing-library/react';

import MoleculeMenu from './molecule-menu';

describe('MoleculeMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoleculeMenu />);
    expect(baseElement).toBeTruthy();
  });
});
