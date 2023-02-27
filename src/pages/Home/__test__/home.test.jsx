import { render} from '@testing-library/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../home';

jest.mock('react-router-dom');

describe('allSongs', () => {
    it('should render allSongs correctly', () => {
        const {asFragment} = render(<Home />);
        expect(asFragment()).toMatchSnapshot();
    });
});