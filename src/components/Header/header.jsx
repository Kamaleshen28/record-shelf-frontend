import React from 'react';
import './header.css';

export default function Header(){
    return(
        <div className='header'>
            <p>My <span className='record-header'>Record</span> Shelf</p>
        </div>
    );
}