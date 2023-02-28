import React, { useEffect, useState } from 'react';
import './card.css';
import heartRed from '../../assets/heart-red.svg';
import heartGray from '../../assets/heart-gray.svg';
import axios from 'axios';
import PropTypes from 'prop-types';
import { BACKEND_URL } from '../../constants/apiEndPoints';

export default function Card (props) {

    const [like, setLike] = useState();
    const [count, setCount] = useState();

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData =  async() => {
        const songData = await axios.get(`${BACKEND_URL}api/records/${props.id}/likes`, {
            headers: {
                'Authorization': 'Basic QWlzaHdhcnlhIE4='
            }
        });
        setLike(songData.data.data.like);
        setCount(songData.data.data.count);
    };

    const updateLikeCount = async (data) => {
        const config = {
            method: 'patch',
            url: `${BACKEND_URL}api/records/${props.id}/likes`,
            headers: { 
                'Authorization': 'Bearer QWlzaHdhcnlhIE4=', 
                'Content-Type': 'application/json'
            },
            data : data
        };
        const response = await axios(config);

        setCount(response.data.data.count);
    };

    const onHeartClickHandler = () => {
        setLike(previousValue => {
            if(previousValue){
                const data = JSON.stringify({'like': !previousValue});
                updateLikeCount(data);
            }else{
                const data = JSON.stringify({'like': !previousValue});
                updateLikeCount(data);
            }
            return !previousValue;
        });
    };
    
    return(
        <div className={(props.lightCard)? 'card light-card': 'card dark-card'}>
            <div className='card-image-container'>
                <img className='card-image' src={props.imageUrl} alt='Not Found' />
            </div>
            <div className='details-container'>
                <div className='text-container'>
                    <a className='song-name-text'>{props.name}</a>
                    <a className='song-genre-text'>{props.genre.name}</a>
                </div>
                <div className='heart-image-container'>
                    <img data-testid='heart-image' className='heart-image' onClick={onHeartClickHandler} src={like? heartRed: heartGray} alt='Not Found' />
                    <a className='count-text' onClick={onHeartClickHandler} data-testid='like-count' >{count}</a>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    id:PropTypes.string.isRequired,
    lightCard:PropTypes.bool.isRequired,
    imageUrl:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    genre:PropTypes.object.isRequired,
};