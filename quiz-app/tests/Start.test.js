import React from 'react';
import { shallow } from 'enzyme';
import Start from '../src/components/start'

// required syntax in order to test usehistory
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('Start', () => {
  let wrapper;

  beforeAll(() => wrapper = shallow(<Start />));

  // Checks if the file that contains the Start component exists
  test('File should exist', () => expect (require ('../src/components/start')).toBeTruthy());

  // Checks if the button gets rendered
  test('Should render button', () => expect(wrapper.find('button').length).toEqual(1));

  afterAll(() => wrapper = null);
});
