import React from 'react';

const LocationInfo = ({location}) => {
    
    return (
        
        <div className='location-container'>
            <ul className='location-info'>
                <li>Locarion Name: <br />{location.name}</li>
                <li>Type: <br /> {location.type}</li>
                <li>Dimension: <br /> {location.dimension}</li>
                <li>Population: <br /> {location.residents?.length}</li>
                
            </ul>
        </div>
    );
};

export default LocationInfo;