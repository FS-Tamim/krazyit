import React from 'react';
import OurServices from '../OurServices/OurServices';
import Brands from './Brands/Brands';
import Carousel from './Carousel/Carousel';
import Experiance from './Experiance/Experiance';
import Footer from './Footer/Footer';
import Header from './Headrer/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurServices></OurServices>
            <Carousel></Carousel>
            <Brands></Brands>
            <Experiance></Experiance>
            <Footer></Footer>
        </div>
    );
};

export default Home;