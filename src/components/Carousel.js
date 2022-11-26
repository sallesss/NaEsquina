import React from 'react';
import bannerImg from '../icons/ban.jpg';
import Carousel from 'react-elastic-carousel';
import '../App.css';

function Marousel() {


    return (
        <Carousel enableAutoPlay autoPlaySpeed={2800}>
            <img src={bannerImg} alt="banner img" />
            <img src={bannerImg} alt="banner img" />
        </Carousel>
    )
}

export { Marousel }