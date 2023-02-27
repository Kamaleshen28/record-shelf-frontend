import React, {useState, useEffect} from 'react';
import axios from 'axios';
import GenreCard from '../GenreCard/genreCard';
import './allGenre.css';
import iconGrid from '../../assets/icon-grid.svg';
import { useNavigate } from 'react-router-dom';


export default function AllGenre (){

    const [allSongData, setAllSongData] = useState([]);
    const navigate = useNavigate();

    const fetchData =  async() => {
        const songData = await axios.get('http://localhost:8080/api/records', {
            headers: {
                'Authorization': 'Basic QWlzaHdhcnlhIE4='
            }
        });
        const allGenre = new Set();
        songData.data.data.forEach(song => {
            allGenre.add(song.genre.name);
        });

        const finalData = [];
        const filterBasedOnGnere = (genre) => {
            return (songData.data.data.filter(song => (song.genre.name===genre)));
        };

        allGenre.forEach(genre => {
            finalData.push(filterBasedOnGnere(genre));
        });
        setAllSongData(finalData);
    };
    
    useEffect(() => {
        fetchData();
    },[]);

    const handleOnClickToggle = () => {
        navigate('/allSongs');
    };
    
    const renderAllGenre = allSongData.map((eachGenreSong, index) => {
        return (<GenreCard key={index} songs={eachGenreSong} />);
    });

    return(
        <div className='body-dummy'>
            <div className='body-all-songs'>
                <div>
                    <div className='body-header'>
                        <p className='all-songs-text'>genres</p>
                        <img className='grid-icon' onClick={handleOnClickToggle} src={iconGrid} alt='Not Found' data-testid='grid-toggle-icon' />
                    </div>
                    <div className='all-genre'>
                        {renderAllGenre}
                    </div>
                </div>
            </div>  
        </div>
    );
}