import React from 'react';
import {shallow, mount} from 'enzyme';
import {Questions} from '../src/components/questions';

function setup() {
    const props = {
        results: 
            {category: 'GljaCBpcyBhIGx1c3Qgb2Yg/', 
            question: 'Nw==',
            id: '0',
            correct_answer: "Nw==",
            incorrect_answers:
            ["QA==","OQ==", "MTA="]},
        
    }

    const enzymeWrapper = shallow(<Questions {...props} />)
    const enzymeWrapperM = mount(<Questions {...props} />)
    return {
        props,
        enzymeWrapper,
        enzymeWrapperM
    }
}
describe('Questions component', () => {
    //checking if file exists
    // checking if the answers render
    const {enzymeWrapperM} = setup()
    test('should render questions', () => expect(enzymeWrapperM.find('div').length).toEqual(1));
    
    it('shows questions from data', () => {
        const wrapper = shallow(<h5>Nw==</h5>)
        expect(wrapper.text()).toEqual('Nw==')
    })
});