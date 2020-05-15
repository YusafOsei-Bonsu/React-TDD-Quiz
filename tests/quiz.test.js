import React from 'react';
import { shallow, mount } from 'enzyme';
import ConnectedApp, { Quiz, mapStateToProps } from '../src/containers/quiz';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: '1'
    }),
    useRouteMatch: () => ({ url: '/quiz/id'})
}));

function setup() {
    const props = {
        results: [
            {category: 'history'}, 
            {question: 'hey',
            id: '0'}
        ]
    }
    const enzymeWrapper = shallow(<Quiz {...props} />)
    // const enzymeWrapperM = mount(<Quiz {...props} />)
    return {
        props,
        enzymeWrapper
        // enzymeWrapperM
    }
}

describe('Quiz container', () => {
    it('should render quiz and subcomponents', () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.find('div').length).toEqual(1)});
    
    it('maps state to props', () => {
        const initState = {quizData: 1};
        const results = { results: initState.user };

        expect(mapStateToProps(initState).results).toEqual(1);
    });
});