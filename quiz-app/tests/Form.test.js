import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Form} from '../src/components/form';
import configureMockStore from 'redux-mock-store';
import {connect} from 'react-redux';
import mockAxios from 'axios';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createPromise } from 'redux-promise-middleware';

const mockStore = configureMockStore([thunk, promiseMiddleware()]);

describe('Form Component', () => {
    let store;


  
  // Focuses on the Form component for testing
  beforeEach(() => store = mockStore({ quizData: {} }));
  
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

