


import React from "react";

const PeopleSlider = (props) => {
    return (
        <>
            <div className="">
                <div className="h-80">
                    <img src={`https://image.tmdb.org/t/p/original${props.profile_path}`} className="h-32 w-32 rounded-full" />
                </div>

                <h3
                    className={`text-lg font-semibold ${props.isLight ? "text-white" : "text-black"
                        }`}
                >
                    {props.original_name}
                </h3>

                <p
                    className={`text-s  ${props.isLight ? "text-white" : "text-gray-900"
                        }`}
                >
                    {props.original_language}
                </p>
            </div>
        </>
    )
};

export default PeopleSlider;
