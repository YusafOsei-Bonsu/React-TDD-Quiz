import {Results, mapDispatchToProps } from '../src/containers/results';
import React from 'react';
import {shallow, mount} from "enzyme";
import { MemoryRouter } from 'react-router';

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
        handleClick: jest.fn()

    }

    const enzymeWrapper = shallow(<Results {...props} />)
    const enzymeWrapperM = mount(<Results value='target' {...props} />)

    return {
        props,
        enzymeWrapper,
        enzymeWrapperM
    }
}
describe("Test Results Page", () => {
    it("Should Render", () => {
        const{ enzymeWrapper} = setup()
        expect(enzymeWrapper.find('div').hasClass('results')).toBe(true)    
    });
    
    it('calls handleClick prop function when form is submitted', () => {
        const { enzymeWrapperM, enzymeWrapper, props } = setup()
        const form = enzymeWrapperM.find('button');
        form.simulate('click');
        expect(props.handleClick).toHaveBeenCalledTimes(1);
        expect(enzymeWrapper.find('button').length).toEqual(1);
    });

    it('Should change route', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/results']}>
                <Results />
            </MemoryRouter>
        );
        expect(wrapper.find(Results)).toHaveLength(1);
    });


} )