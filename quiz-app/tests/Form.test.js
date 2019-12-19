import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { Form } from '../src/components/form';
import configureMockStore from 'redux-mock-store';
import { connect } from 'react-redux';
import mockAxios from 'axios';
import thunk from 'redux-thunk';
import { createPromise, promiseMiddleware } from 'redux-promise-middleware';
import { isMainThread } from 'worker_threads';
import { useHistory } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

function setup() {
    const props = {
        categories: [
            { bad: 'good' },
            { "id": 9, "name": "General Knowledge" },
            { "id": 10, "name": "Entertainment: Books" }
        ],
        handleChange: jest.fn(),
        handleSubmit: jest.fn()

    }

    const enzymeWrapper = shallow(<Form {...props} />)
    const enzymeWrapperM = mount(<Form {...props} />)
    return {
        props,
        enzymeWrapper,
        enzymeWrapperM
    }
}

describe('Form Component', () => {

    it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup()

        expect(enzymeWrapper.find('form').hasClass('form')).toBe(true)

    })
    it('should call handleChange ', () => {

        const { props } = setup();
        const spy = jest.spyOn(props, 'handleChange');
        props.handleChange();
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    })
    // it('DropDown box displays data', () => {
    //     const props = {
    //         info: [{ bad: 'good' }],

    //     }
    //     const { enzymeWrapper } = setup()
    //     expect(enzymeWrapper.find('option').hasClass()).toBe(true)
    // })

    it('calls handleSubmit prop function when form is submitted', () => {
        const { enzymeWrapperM, props } = setup()
        const form = enzymeWrapperM.find('form');
        form.simulate('submit');
        expect(props.handleSubmit).toHaveBeenCalledTimes(1);
    });

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

