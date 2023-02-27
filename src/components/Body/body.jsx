import React from 'react';
import { useNavigate } from 'react-router-dom';
import './body.css';

export default function Body(){
    const navigate = useNavigate();

    const syncButtonClickHandler = () => {
        navigate('/allSongs');
    };

    return(
        <div className='body-content'>
            <div className='body-content-container'>
                <p>:((</p>
                <p>seems a bit empty in here..</p>
            </div>
            <div className='button-container'>
                <button onClick={syncButtonClickHandler} className='sync-button' data-testid='sync-button' >sync</button>
            </div>
        </div>
    );
}