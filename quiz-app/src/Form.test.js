import React from 'react'
import {shallow} from 'enzyme'
import Form from './components/form'

describe('Form component', () => {
    let wrapper;

    // Focuses on the Form component for testing
    beforeAll(() => wrapper = shallow(<Form />));

    // Checks if the file exists
    test('File should exist', () => expect(require('./components/form')).toBeTruthy());
    
    // Checks if the drop-down box renders
    test('Dropdown box should render', () => expect(wrapper.find('select').length).toEqual(1));

    // Checks if the difficulty selectors render
    test('Radiobuttons should render', () => expect(wrapper.find('.levelInputs').length).toEqual(1));

    // Checks if the textbox renders
    test('Textbox should render', () => expect(wrapper.find('#textbox').length).toEqual(1));

    // Wipes the test suite
    afterAll(() => wrapper =null);
});