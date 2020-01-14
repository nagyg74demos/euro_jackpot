import React from 'react';
import { render } from '@testing-library/react';
import { App } from './app';

test('renders EuroJackpot H1', () => {
    const { getByText } = render(<App/>);
    const linkElement = getByText(/EuroJackpot/i);
    expect(linkElement).toBeInTheDocument();
});
