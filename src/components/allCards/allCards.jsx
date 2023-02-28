import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/card';
import iconGenre from '../../assets/icon-genre.svg';
import './allCards.css';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../../constants/apiEndPoints';
import { recordShelfContext } from '../../context/recordShelfContext';

export default function AllCards(){

    // const [songData, setSongData] = useState([]);
    const {songData, setSongData} = useContext(recordShelfContext);
    const navigate = useNavigate();

    const fetchData =  async() => {
        const songData = await axios.get(`${BACKEND_URL}api/records`, {
            headers: {
                'Authorization': 'Basic QWlzaHdhcnlhIE4='
            }
        });
        setSongData(songData.data.data);

    };
    useEffect(() => {
        fetchData();
    },[]);

    const handleOnClickToggle = () => {
        navigate('/genre');
    };

    var lightCard = false;
    const renderCards = songData.map((song) => {
        lightCard = !lightCard;
        return (<Card key={song.id} {...song} lightCard={lightCard}/>);
    });
    return(
        <div className='body-dummy'>
            <div className='body-all-songs'>
                <div>
                    <div className='body-header'>
                        <p className='all-songs-text'>all songs</p>
                        <img className='genre-icon' onClick={handleOnClickToggle} src={iconGenre} alt='Not Found' data-testid='genre-icon' />
                    </div>
                    <div className='cards-container'>
                        {renderCards}
                    </div>
                </div>
            </div>  
        </div>
    );
}