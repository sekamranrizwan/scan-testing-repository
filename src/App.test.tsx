import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
test('Displays a heading', () => {
  render(<App />);
  const heading = screen.getByRole('svg');
  expect(heading).toBeInTheDocument();
});
