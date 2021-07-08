import React from 'react';
import { NasaDateContainer } from './NasaDateStyles'

const NasaDate = (props) => {

    return (
        <NasaDateContainer >
        {props.date}
        
        </NasaDateContainer>
    )
}

export default NasaDate;