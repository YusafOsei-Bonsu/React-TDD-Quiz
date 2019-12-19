import React from 'react';
import axios from 'axios';
import { shallow, mount } from 'enzyme';
import { getCatData, getQuizData } from '../src/components/api/index';

jest.mock('axios');

describe('fetch data', () => {
    it('fetches', async () => {
        const data = {
            data: {
                hits: [
                    {
                        objectID: '1',
                        title: 'a'
                    },
                    {
                        objectID: '2',
                        title: 'b'
                    }
                ]
            }
        }
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
    });
    it('fetches error', async() => {
        const errorMsg = 'Network error';

        axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMsg)))
    });
})