
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
                <br></br>
                <br></br>
                <hr></hr>

                {/* --------------------cast-------------------- */}



                <div className="mx-auto px-32 container">
                    <h2 className="font-bold text-lg ml-2 my-7">CAST</h2>
                    <PeopleSlider images={popularPeople} />
                </div>
                <hr></hr>
                {/* --------------------crew-------------------- */}



                <div className="mx-auto px-32 py-6 container">
                    <h2 className="font-bold text-lg ml-2 my-7 mt-5">CREW</h2>
                    <PeopleSlider images={popularPeople} />
                </div>



            </div>
        </>
    );
};
export default Movie;

