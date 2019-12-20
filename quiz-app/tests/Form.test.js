import React from 'react';
import { shallow, mount } from 'enzyme';
import { Form, mapStateToProps, mapDispatchToProps } from '../src/components/form';

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
        handleSubmit: jest.fn(),
        mapStateToProps: jest.fn(),
        mapDispatchToProps: jest.fn()

    }
    const enzymeWrapper = shallow(<Form {...props} />)
    const enzymeWrapperM = mount(<Form value='target' {...props} />)
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
    it('calls handleSubmit prop function when form is submitted', () => {
        const { enzymeWrapperM, props } = setup()
        const form = enzymeWrapperM.find('form');
        form.simulate('submit');
        expect(props.handleSubmit).toHaveBeenCalledTimes(1);
    });
    it('calls handleChange', () => {
        const { enzymeWrapperM, props } = setup()
        const input = enzymeWrapperM.find('#textInput')
        input.simulate('change', { target: { value: 'church' } })
        input.simulate('keydown', { key: 'ArrowDown' })
        input.simulate('keydown', { key: 'Enter' })
        expect(props.handleChange).toHaveBeenCalledTimes(1)
    })
    it('should call onChange', () => {
        // const handleChange = jest.fn()
        const event = {
            preventDefault() { },
            target: { value: 'the-value' }
        };
        const { enzymeWrapper, props } = setup()
        const component = enzymeWrapper
        component.find('#textInput').simulate('change', event);
        expect(props.handleChange).toBeCalledWith(event);
    });
    it('Maps state to props', () => {
        let dispatch = jest.fn()
        const { props } = setup()
        expect(props.mapDispatchToProps(dispatch)).toMatchSnapshot()
    })
});

