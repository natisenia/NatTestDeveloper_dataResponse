import { render } from '@testing-library/react';
import { App } from './App';

test('renders logo', () => {
  const { getByRole } = render(<App />);
  getByRole('img', { name: /logo/i });
});

test('renders children components', () => {
  const { getByTestId, getByRole } = render(<App />);
  getByTestId('imgGrid');
  getByRole('complementary')
});