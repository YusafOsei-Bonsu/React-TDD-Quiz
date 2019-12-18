import React from 'react'
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Form} from '../src/components/form';
import configureMockStore from 'redux-mock-store'
import {connect} from 'react-redux'

const mockStore = configureMockStore(middlewares)

describe.only('Form Component ', () => {

    test('Form should pass props to its children', () => {
    const store = mockStore(initialState)
    const wrapper = mount(
      <Provider store={store}>
        <Form />
      </Provider>
    )
    expect(wrapper.type()).to.equal('div')
  })

  
  // Focuses on the Form component for testing
//   beforeAll(() => wrapper = shallow(<Form />));
  
  // Checks if the file exists
  test('File should exist', () => expect(require('../src/components/form')).toBeTruthy());
  
  // Form component should render 
  test('Form should render correctly', () => {
      const component = renderer.create(<Form />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    
    // Checks if the drop-down box renders
    test('Dropdown box should render', () => expect(wrapper.find('select').length).toEqual(1));
    
    // Checks if the difficulty selectors render
    test('Radiobuttons should render', () => expect(wrapper.find('.levelInputs').length).toEqual(1));
    
    // Checks if the textbox renders
    test('Textbox should render', () => expect(wrapper.find('#textbox').length).toEqual(1));
    
    // Wipes the test suite
    // afterAll(() => wrapper =null);
});

