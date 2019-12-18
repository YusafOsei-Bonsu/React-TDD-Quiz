import React from 'react'
import {shallow} from 'enzyme'
import Questions from '../src/components/questions'

describe('Questions', () => {
    let wrapper;
    
    beforeAll(() => wrapper = shallow(<Questions />));
    
    // checking if file exists
    test('File should exist', () => expect(require('../src/components/questions')).toBeTruthy());
    
    afterAll(() => wrapper =null);
});