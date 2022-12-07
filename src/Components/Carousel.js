import React from 'react';
import Carousel from 'react-elastic-carousel';
import banner from '../icons/ban1.png';
import ban2 from '../icons/ban2.png';
import '../App.css';

function Marousel() {


    return (
        <Carousel enableAutoPlay autoPlaySpeed={3900}>
                <img src={banner} alt = 'banner img' />
                <img src={ban2} alt = 'banner img' />
                <img src={banner} alt = 'banner img' />
        </Carousel>
    )
}

export { Marousel }