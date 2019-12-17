import React from 'react'
import {shallow} from 'enzyme'
import Form from './components/form'

describe('Form component', () => {
    let wrapper;
    beforeAll(() => wrapper = shallow(<Form />));
    test('Form comp should exist', () => expect(require('./components/form')).toBeTruthy());
    afterAll(() => wrapper =null);
});