import React, { useState } from 'react';
import axios from 'axios'


const SearchBox = ({ setLocation }) => {

    const [search, setSearch] = useState("");
    
    const searchType = () => {

        /* Hacemnos la peticion con el id que haya colocado el usuario en el input */
        axios.get(`https://rickandmortyapi.com/api/location/${search}`)
        .then(res => setLocation(res.data))
    }

    return (
        <div className='search'>
            
            <input className='input-box'
                size={50}
                type="text" 
                onChange={e => setSearch(e.target.value)} 
                value = {search} 
                placeholder='input a place ID between 1 and 126' 
            />
            <button onClick={searchType}>
                Search
            </button>
        </div>
    );
};

export default SearchBox;