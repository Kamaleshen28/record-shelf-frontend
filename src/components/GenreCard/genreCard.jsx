import React from 'react'
import Card from '../Card/card'
import './genereCard.css'

export default function GenreCard({songs}){
    
    const genreName = (songs[0].genre.name).toLowerCase();
    const renderAllSongs = songs.map((song) => {
        return (<Card key={song.id} {...song}/>)
    })

    return(
        <div className='genre-all-song-container'>
            <div className='genre-title-container'>
                <img className='genre-image' src={require(`../../assets/genre-${genreName}.png`)} alt='Not Found' />
                <a className='genre-name' >{genreName}</a>
            </div>
            <div className='all-songs-container'>
                {renderAllSongs}
            </div>
        </div>
    )
}