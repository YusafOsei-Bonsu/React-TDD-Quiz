import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
