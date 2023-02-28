import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import AllSongs from './pages/AllSongs/allSongs';
import Genre from '../src/pages/Genre/genre';
import { HOME_ROUTE, ALLSONGS_ROUTE, GENRE_ROUTE } from './constants/routes';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={HOME_ROUTE} element={<Home />} />
                    <Route path={ALLSONGS_ROUTE} element={<AllSongs />} />
                    <Route path={GENRE_ROUTE} element={<Genre />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
