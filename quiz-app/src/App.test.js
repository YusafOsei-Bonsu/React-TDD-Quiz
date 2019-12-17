import React from 'react';
import App from './containers/App';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
