import { render } from '@testing-library/react';

import MoleculeMovie from './molecule-movie';

describe('MoleculeMovie', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoleculeMovie />);
    expect(baseElement).toBeTruthy();
  });
});
