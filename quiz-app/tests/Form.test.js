import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Form} from '../src/components/form';
import configureMockStore from 'redux-mock-store';
import {connect} from 'react-redux';
import mockAxios from 'axios';
import thunk from 'redux-thunk';
import { createPromise, promiseMiddleware } from 'redux-promise-middleware';
import { isMainThread } from 'worker_threads';
import {useHistory} from 'react-router-dom'
    
jest.mock('react-router-dom', () => ({
        useHistory: () => ({
          push: jest.fn(),
        }),
      }));

function setup() {
    const props = {
    categories: [{bad:'good'}],
    handleChange: jest.fn()
    
}

const enzymeWrapper = shallow(<Form {...props} />)
return {
    props,
    enzymeWrapper
}
}

describe('Form Component', () => {
    
it('should render self and subcomponents', () => {
    const {enzymeWrapper} = setup()

    expect(enzymeWrapper.find('form').hasClass('form')).toBe(true)
    console.log(enzymeWrapper.find('form'))
})
    it('DropDown box displays data', () => {
        const props = {
            info: [{bad:'good'}],

        }
        const{enzymeWrapper} = setup()
        expect(enzymeWrapper.find('option').hasClass()).toBe(true)
    })
    // // Checks if the drop-down box renders
    // it('Dropdown box should render', () => {
    //     const {enzymeWrapper} = setup()

    //     expect(enzymeWrapper.find('select').length).toEqual(1);
    // })
    // it('should call onChange if input text is greater than 0', () => {
    //     const {enzymeWrapper, props} = setup()
    //     const input = enzymeWrapper.find('hohoho')
    //     input.props().onSave('')
    //     expect(props.handleChange.mock.calls.length).toBe(0)
    // })

    

});

