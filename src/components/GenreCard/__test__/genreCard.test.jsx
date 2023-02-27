import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import GenreCard from '../genreCard';


const mockSongData =[ 
    {
        'id': '0e2ddccf-f494-4c41-a499-90f8267f491a',
        'name': 'Beautiful Mistakes (feat. Megan Thee Stallion)',
        'genre': {
            'id': '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
            'name': 'Pop'
        },
        'artist': {
            'id': '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
            'name': 'Maroon 5'
        },
        'imageUrl': 'https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631',
        'publishedAt': '2021-06-11T00:00:00'
    },
    {
        'id': '45e1d753-2986-43cb-9b9d-30c370056319',
        'name': 'This Love',
        'genre': {
            'id': '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
            'name': 'Pop'
        },
        'artist': {
            'id': '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
            'name': 'Maroon 5'
        },
        'imageUrl': 'https://i.scdn.co/image/ab67616d0000b27317b3850d758fff5a2301e537',
        'publishedAt': '2002-06-25T00:00:00'
    }
];




describe('GenreCard', () => {
    it('should render genreCard correctly', async () => {
        const {asFragment} = render(<GenreCard songs={mockSongData}/>);
        expect(asFragment()).toMatchSnapshot();
    });
    
});