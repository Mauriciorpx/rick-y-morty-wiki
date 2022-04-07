import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({residents}) => {
    return (
        <div className='resident-list'>
            {
                residents?.map(resident =>(

                    <ResidentInfo residentUrl = {resident} key={resident}/>
                
                ))
            }
        </div>
    );
};

/* <div key={resident}>
        {resident}
    </div> */

export default ResidentsList;