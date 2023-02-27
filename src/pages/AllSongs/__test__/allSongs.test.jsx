import { render} from '@testing-library/react';
import React from 'react';
import AllSongs from '../allSongs';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom');

describe('allSongs', () => {
    it('should render allSongs correctly', () => {
        const {asFragment} = render(<AllSongs />);
        expect(asFragment()).toMatchSnapshot();
    });
});