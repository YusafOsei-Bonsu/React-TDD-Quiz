import mockAxios from 'jest-mock-axios';
import axios from 'axios';
import { getCatData, getQuizData } from '../src/components/api/index';

describe('Test API calling functions', ()=> {
    describe('Should be called', () => {
        it('getQuizData should accept arguments', () => {
            let value = "Art"
            let dif = "Easy"
          expect(getQuizData(value, dif)).toMatchSnapshot()
        })
        it('getCatData should accept dispatch', () => {
            let dispatch = jest.fn()
          expect(getCatData(dispatch)).toMatchSnapshot()
        })
    })
})