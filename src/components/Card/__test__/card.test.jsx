import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Card from '../card';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';



const mockSongData = 
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
};

const mockLightCard = false;

const mockLikeDataBeforeClick = {data :{
    'like': false,
    'count': 0
}
};
const mockLikeDataAfterClick = {data :{
    'like': true,
    'count': 1
}
};

const mockLikeDataBeforeClickTrue = {data :{
    'like': true,
    'count': 1
}
};
const mockLikeDataAfterClickFalse = {data :{
    'like': false,
    'count': 0
}
};

describe('card', () => {
    it('should render card correctly', async () =>{
        const {asFragment} = render(<Card {...mockSongData} lighCard={mockLightCard} />);
        await waitFor(() =>{
            expect(screen.getByText('Pop')).toBeTruthy();
        });
        expect(asFragment()).toMatchSnapshot();
    });

    it('should toggle the heart image on when heart image is clicked', async () =>{
        render(<Card {...mockSongData} lighCard={mockLightCard} />);
        await waitFor(() =>{
            expect(screen.getByText('Pop')).toBeTruthy();
        });
        const getHeartImage = screen.queryByTestId('heart-image');
        // const heartSrcAttribute = getHeartImage.getAttribute('src');
        fireEvent.click(getHeartImage);
        expect(getHeartImage.getAttribute('src')).toEqual('heart-red.svg');
    });

    it('should toggle the heart image on when heart image is clicked', async () =>{
        jest.spyOn(axios, 'get').mockResolvedValue({data:mockLikeDataBeforeClick});
        render(<Card {...mockSongData} lighCard={mockLightCard} />);
        await waitFor(() =>{
            expect(screen.getByText('0')).toBeTruthy();
        });
        const getHeartImage = screen.queryByTestId('heart-image');
        const likeCounter = screen.queryByTestId('like-count');
        const mock = new MockAdapter(axios);
        mock.onPatch('http://localhost:8080/api/records/0e2ddccf-f494-4c41-a499-90f8267f491a/likes').reply(200, mockLikeDataAfterClick);
        fireEvent.click(getHeartImage);
        await waitFor(() =>{
            expect(screen.getByText('1')).toBeTruthy();
        });
        expect(likeCounter.textContent).toEqual('1');
    });
    it('should toggle the heart image on when heart image is clicked', async () =>{
        jest.spyOn(axios, 'get').mockResolvedValue({data:mockLikeDataBeforeClick});
        render(<Card {...mockSongData} lighCard={mockLightCard} />);
        await waitFor(() =>{
            expect(screen.getByText('0')).toBeTruthy();
        });
        const likeCounter = screen.queryByTestId('like-count');
        const mock = new MockAdapter(axios);
        mock.onPatch('http://localhost:8080/api/records/0e2ddccf-f494-4c41-a499-90f8267f491a/likes').reply(200, mockLikeDataAfterClick);
        fireEvent.click(likeCounter);
        await waitFor(() =>{
            expect(screen.getByText('1')).toBeTruthy();
        });
        expect(likeCounter.textContent).toEqual('1');
    });

    it('should toggle the heart image on when heart image is clicked', async () =>{
        jest.spyOn(axios, 'get').mockResolvedValue({data:mockLikeDataBeforeClickTrue});
        render(<Card {...mockSongData} lighCard={mockLightCard} />);
        await waitFor(() =>{
            expect(screen.getByText('1')).toBeTruthy();
        });
        const likeCounter = screen.queryByTestId('like-count');
        const mock = new MockAdapter(axios);
        mock.onPatch('http://localhost:8080/api/records/0e2ddccf-f494-4c41-a499-90f8267f491a/likes').reply(200, mockLikeDataAfterClickFalse);
        fireEvent.click(likeCounter);
        await waitFor(() =>{
            expect(screen.getByText('0')).toBeTruthy();
        });
        expect(likeCounter.textContent).toEqual('0');
    });
});