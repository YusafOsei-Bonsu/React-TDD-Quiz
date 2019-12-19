import React from 'react';
import {shallow, mount} from 'enzyme';
import {Answers} from '../src/components/answers';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: '0'
    }),
    useRouteMatch: () => ({ url: '/quiz/id'})
}));

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

function setup() {
    const props = {
        results: 
            {category: 'GljaCBpcyBhIGx1c3Qgb2Yg/', 
            question: 'TWFuIGlzIGRpc3=',
            id: '0',
            correct_answer: "Nw==",
            incorrect_answers:
            ["QA==","OQ==", "MTA="]}
        
    }
    const enzymeWrapper = shallow(<Answers {...props} />)
    // const enzymeWrapperM = mount(<Answers {...props} />)
    return {
        props,
        enzymeWrapper
        // enzymeWrapperM
    }
}
describe('Answers component', () => {
    //checking if file exists
    // checking if the answers render
    const {enzymeWrapper} = setup()
    test('should render answers', () => expect(enzymeWrapper.find('div').length).toEqual(5));
    
});
