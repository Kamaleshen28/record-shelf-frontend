import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Body from '../body';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom');


describe('Body', () => {
    it('should render body correctly',async () => {
        const {asFragment} = render(<Body />);
        expect(asFragment()).toMatchSnapshot();

    });

    it('should navigate to /allSongs when the sync button is clicked', async () => {
        const navigateFn = jest.fn();
        useNavigate.mockReturnValue(navigateFn);
        render(<Body />);
        const syncButton = screen.getByTestId('sync-button');
        fireEvent.click(syncButton);
        expect(navigateFn).toBeCalledWith('/allSongs');
    });
});


