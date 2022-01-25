
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import HeroMovie from "../components/MovieHero/MovieHero.component";

import PeopleSlider from "../components/CastCrew/CastCrew.component";


const Movie = () => {

    const [popularPeople, setPopularPeople] = useState([]);
    useEffect(() => {
        const requestPopularPeople = async () => {
            const getPopularPeople = await axios.get("/person/popular");
            // console.log(getPopularPeople);
            setPopularPeople(getPopularPeople.data.results);
        };
        requestPopularPeople(popularPeople);


    }, []);


    return (
        <>

            <HeroMovie />
            <div className="my-12 container px-4 ">
                <div className="flex flex-col items-start gap-3 ml-32">
                    <h2 className="text-black font-bold text-2xl">About the movie</h2>
                    <p className="text-gray-700">For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to<br></br>
                        separate his normal life from the high-stakes of being a Super Hero.
                        <br></br> <br></br>
                        When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means <br></br> to be Spider-Man.</p>
                </div>


                {/* --------------------cast-------------------- */}
                <h2 className="text-2xl font-bold text-white my-3 mt-10">
                    Cast</h2>


                <div className="mx-auto px-32 container">

                    <PeopleSlider images={popularPeople} />
                </div>
                {/* --------------------crew-------------------- */}
                <h2 className="text-2xl font-bold text-white my-3 mt-10">
                    Crew</h2>


                <div className="mx-auto px-32 container">

                    <PeopleSlider images={popularPeople} />
                </div>



            </div>
        </>
    );
};
export default Movie;

