import React from 'react'
import {shallow} from 'enzyme'
import Questions from './components/questions'

describe('Questions', () => {
    let wrapper;
    beforeAll(() => wrapper = shallow(<Questions />));
    test('File should exist', () => expect(require('./components/questions')).toBeTruthy());
    afterAll(() => wrapper =null);
});