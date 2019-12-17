import React from 'react';
import { shallow } from 'enzyme';
import Start from './components/start'

describe('Start', () => {
  let wrapper;

  beforeAll(() => wrapper = shallow(<Start />));

  // Checks if the file that contains the Start component exists
  test('File should exist', () => expect (require ('./components/start')).toBeTruthy());

  // Checks if the button gets rendered
  test('Should render button', () => expect(wrapper.find('button').length).toEqual(1));

  afterAll(() => wrapper = null);
});
