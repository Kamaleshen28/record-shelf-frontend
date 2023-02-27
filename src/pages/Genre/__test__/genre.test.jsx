import { render} from '@testing-library/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Genre from '../genre';

jest.mock('react-router-dom');

describe('allSongs', () => {
    it('should render allSongs correctly', () => {
        const {asFragment} = render(<Genre />);
        expect(asFragment()).toMatchSnapshot();
    });
});