
import React from "react";
import Slider from "react-slick";

import PosterSlider from "../PosterSlider/PosterSlider.component";

const PSliders = (props) => {
    const settings = {
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        InitialSlide: 0
    };
    return (
        <>

            <Slider {...settings}>
                {props.images.map((image) => (
                    <PosterSlider {...image} isLight={props.isLight} />
                ))}
            </Slider>

        </>
    );
};

export default PSliders;