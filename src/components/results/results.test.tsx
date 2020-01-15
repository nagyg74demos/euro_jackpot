import React, { useEffect } from 'react';
import { render, cleanup, act, waitForElement } from '@testing-library/react';
import { Results } from './results';
import mockData from '../../../public/data.mock.json';

describe('Results Component', () => {
    afterEach(cleanup);
    beforeEach(() => {
        jest.clearAllMocks();
    });

    let mockedEffect: any;
    beforeAll(() => {
        mockedEffect = jest
            .spyOn(window, 'fetch')
            .mockImplementationOnce(() => new Promise<Response>((resolve, reject) => {
                //@ts-ignore
                resolve({
                    ok: true,
                    json: () => mockData
                });
            }))
    });


    test('renders EuroJackpot in Legend', async () => {
        const { getAllByText } = render(<Results/>);

        expect(mockedEffect).toHaveBeenCalledTimes(1);

        const textElement = await waitForElement(() => getAllByText(/EuroJackpot/i));
        expect(textElement[ 0 ]).toBeInTheDocument();
    });
});





