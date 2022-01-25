


import React from "react";

const PosterSlider = (props) => {
  return (
    <>
      <div className="px-4">
        <div className="h-80">
          <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} className="w-full h-full rounded-xl" alt="poster images" />
        </div>

        <h3
          className={`text-lg font-semibold ${props.isLight ? "text-white" : "text-black"
            }`}
        >
          {props.original_title}
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

export default PosterSlider;
