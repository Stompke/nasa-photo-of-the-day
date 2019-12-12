import React from 'react';
import NasaTitle from './NasaTitle';
import { Container, Subtitle } from './HeaderStyles';
import { Logo } from './LogoStyles.js';
import sattelite from '../images/satellite-pngrepo-com.png';



const Header = (props) => {

    return (
        <Container className='header'>
            <NasaTitle title={props.title}/>
            <Subtitle>Nasa - Image of the Day</Subtitle>
            <Logo src={sattelite}></Logo>
        </Container>
    )
}

export default Header;