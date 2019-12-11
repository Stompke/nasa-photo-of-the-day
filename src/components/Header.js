import React from 'react';
import NasaTitle from './NasaTitle';



const Header = (props) => {

    return (
        <div className='header'>
            <NasaTitle title={props.title}/>
            <h3>Nasa - Image of the Day</h3>
        </div>
    )
}

export default Header;