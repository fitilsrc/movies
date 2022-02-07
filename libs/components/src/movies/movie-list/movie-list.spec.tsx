import { render } from '@testing-library/react';

import MovieList from './movie-list';

describe('MovieList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovieList />);
    expect(baseElement).toBeTruthy();
  });
});
