
import React from "react";
import Slider from "react-slick";

import PeopleSlider from "./CastCrewSlider.component";

const PeopleSliders = (props) => {
    const settings = {
        infinity: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        InitialSlide: 0
    };
    return (
        <>

            <Slider {...settings}>
                {props.images.map((image) => (
                    <PeopleSlider {...image} isLight={props.isLight} />
                ))}
            </Slider>

        </>
    );
};

export default PeopleSliders;