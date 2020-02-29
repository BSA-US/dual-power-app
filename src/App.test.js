import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders BSA link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Black Socialists in America/i);
  expect(linkElement).toBeInTheDocument();
});
