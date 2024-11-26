import React from 'react'; // 여기서 act를 가져옴
import { render, screen } from '@testing-library/react';
import App from './App';

import { act } from 'react'; // react에서 act를 가져옵니다.

test('renders learn react link', () => {
  act(() => {
    render(<App />);
  });
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
