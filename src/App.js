import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import AllSongs from './pages/AllSongs/allSongs';
import Genre from '../src/pages/Genre/genre';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/allSongs' element={<AllSongs />} />
                    <Route path='/genre' element={<Genre />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
