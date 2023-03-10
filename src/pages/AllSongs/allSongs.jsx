import React from 'react';
import AllCards from '../../components/allCards/allCards';
import Header from '../../components/Header/header';
import { RecordShelfContextProvider } from '../../context/recordShelfContext';

export default function AllSongs(){

    return(
        <div>
            <Header />
            <RecordShelfContextProvider>
                <AllCards />
            </RecordShelfContextProvider>
        </div>
    );
}