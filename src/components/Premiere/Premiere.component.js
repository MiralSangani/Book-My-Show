import React from "react";
import Slider from "react-slick";

import Poster from "../PosterPremiere/poster.component";

const Premiere = (props) => {
    const settings = {
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        InitialSlide: 0
    };
    return (
        <>

            <Slider {...settings} >
                {props.PremiereImages.map((image) => (
                    <Poster {...image} isDark />

                ))}
            </Slider>
        </>
    );
};

export default Premiere;