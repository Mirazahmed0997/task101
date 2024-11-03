import React from 'react';
import About from '../About/About';
import Slider from '../Slider/Slider';
import CatalogHome from '../CatalogHome/CatalogHome';
import ReviewForm from '../ReviewForm/ReviewForm';
import CatalogSlider from '../CatalogSlider/CatalogSlider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <CatalogHome></CatalogHome>
            {/* <CatalogSlider></CatalogSlider> */}
            <ReviewForm></ReviewForm>
        </div>
    );
};

export default Home;