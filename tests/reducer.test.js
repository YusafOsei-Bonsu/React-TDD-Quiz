import {reducer, initialState} from '../src/store/index';

describe('Reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toMatchSnapshot()
    })
    it('should handle addUser', () => {
      expect(
        reducer(initialState,
        {
          type: 'addUser'
        })
      ).toMatchSnapshot()
    })
    it('should handle addingCatData', () => {
      expect(
        reducer(initialState,
        {
          type: 'catDropDown'
        })
      ).toMatchSnapshot()
    })
    it('should handle addingQuizData', () => {
      expect(
        reducer(initialState,
        {
          type: 'quizData'
        })
      ).toMatchSnapshot()
    })
    it('should handle error', () => {
        const failAction = {
          type: 'handle-error',
          hasErrors: false 
        };
        expect(reducer({}, failAction)).toEqual({hasErrors :true});
      });
    it('should handle increment', () => {
        const failAction = {
          type: 'increment-error'
        };
        expect(reducer({}, failAction)).toEqual({});
      });
  })