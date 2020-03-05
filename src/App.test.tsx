import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
