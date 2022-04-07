import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({residentUrl}) => {

    const [resident, setResident] = useState({});

    useEffect(()=>{
        axios.get(residentUrl)
        .then(res => setResident(res.data))
    }, [residentUrl])

    return (
        <div className='resident-containter'>
            
            <img src={resident.image} alt="resident" />
            <h3> {resident.name} </h3>
            <br />
            <h4 className='label'>Origin:</h4>
            <h4 className='info'>{resident.origin?.name}</h4>
            <br />
            <h4 className='label'>Status:</h4>

            {
                    resident.status === "Alive" ? (
                        <h4 className='info'>
                        <i className="fas fa-circle"></i> {resident.status} - {resident.species}</h4>
                    ) : (
                        resident.status === "Dead" ? (
                            <h4 className='info'>
                        <i className="fas fa-circle" style={{color:"red"}}></i> {resident.status} - {resident.species}</h4>
                        ) : (
                            <h4 className='info'>
                        <i className="fas fa-circle" style={{color:"gray"}}></i> {resident.status} - {resident.species}</h4>
                        )
                    )
                }

            
            <br />
            <h4 className='label'>Appearance in episodes:</h4>
            <h4 className='info'>{resident.episode?.length}</h4>

        </div>
    );
};

export default ResidentInfo;