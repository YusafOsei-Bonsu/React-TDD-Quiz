import React from 'react';
import {App} from '../src/containers/App';
import {shallow, mount} from 'enzyme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function setup() {
    const props = {
        getCatData: jest.fn(),
        dispatch: jest.fn()
    }


    const enzymeWrapper = shallow(<App {...props} />)
    const enzymeWrapperM = mount(<App {...props} />)

    return {
        props,
        enzymeWrapper,
        enzymeWrapperM
    }
}
describe('app', () => {
    const {enzymeWrapper} = setup()
    it('should render div', () => expect(enzymeWrapper.find(Router).length).toEqual(1));
    it('should render div', () => expect(enzymeWrapper.find(Switch).length).toEqual(1));
    it('should render div', () => expect(enzymeWrapper.find(Route).length).toEqual(4));
    it('should call handleChange ', () => {
        const { props } = setup();
        const spy = jest.spyOn(props, 'dispatch');
        props.dispatch();
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
})