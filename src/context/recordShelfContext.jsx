import React, {createContext, useState} from 'react';

export const recordShelfContext = createContext({});

// eslint-disable-next-line react/prop-types
export const RecordShelfContextProvider =  ({children}) => {
    const [songData, setSongData] = useState([]);

    return(<recordShelfContext.Provider value={{songData, setSongData}}>
        {children}
    </recordShelfContext.Provider>
    );
};

// RecordShelfContextProvider.propTypes = {
//   children.
// }