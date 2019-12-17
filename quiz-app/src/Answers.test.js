import React from 'react';
import {shallow} from 'enzyme';
import Answers from './components/answers';

describe('Answers component', () => {
    let wrapper;
    beforeAll(() => wrapper = shallow (<Answers />));
    //checking if file exists
    test('File exists', () => expect(require('./components/answers')).toBeTruthy());
    // checking if the answers render
    test('should render answers', () => expect(wrapper.find('.answers').length).toEqual(1));
    afterAll(() => wrapper = null)
});
