import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Header from '../header';

describe('Header', () => {
    it('should render header correctly', async () => {
        const {asFragment} = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
        // await waitFor(() => {
        //     expect(screen.getByText('Shelf')).toBeTruthy();
        // });
    });
});