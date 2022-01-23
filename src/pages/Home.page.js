import React, { useState, useEffect } from "react";
import axios from "axios";
//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premiere from "../components/Premiere/Premiere.component";
import PSliders from "../components/PSlider/Slider.component";

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);


    const [upcomingMovies, setUpcomingMovies] = useState([]);
    useEffect(() => {
        const requestupcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpcomingMovies(getUpcomingMovies.data.results);
        };
        requestupcomingMovies();

    }, []);

    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            const getNowPlayingMovies = await axios.get("/movie/now_playing");
            setNowPlayingMovies(getNowPlayingMovies.data.results);
        };
        requestNowPlayingMovies();
    }, []);


    const [topRatedMovies, setTopRatedMovies] = useState([]);
    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    }, []);



    return (

        <>

            <div className="flex flex-col gap-9 bg-gray-200">
                <div className="mx-auto px-32 container">
                    <h2 className="text-2xl font-bold text-gray-800  my-3 mt-20">
                        Now Playing Movies</h2>
                    <PSliders images={nowPlayingMovies} />
                </div>
                <div className="container mx-auto px-32 mt-20">
                    <img className="container" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"></img>

                    <h1 className="text-2xl font-bold text-gray-800 my-3 mt-20">
                        The best of Entertainment
                    </h1>
                    <EntertainmentCardSlider />
                </div>


                <div className="bg-bms-700 py-16">
                    <div className="mx-auto px-32 container">
                        <img
                            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="Premiere-Rupay"
                            className="w-full h-full"
                        />
                    </div>

                    <div className="mx-auto px-32 container">
                        <h2 className="text-2xl font-bold text-white my-3 mt-20">
                            Premiere</h2>
                        <h3 className="text-sm text-white my-2">
                            Brand new release every Friday</h3>
                        <Premiere PremiereImages={popularMovies} />
                    </div>


                </div>
                <div className="mx-auto px-32 container">
                    <h2 className="text-2xl font-bold text-gray-800 my-3 mt-20">
                        Top rating Movies</h2>
                    <PSliders images={topRatedMovies} />
                </div>

                <div className="mx-auto px-32 container">
                    <h2 className="text-2xl font-bold text-gray-800 my-3 mt-20">
                        Uplcoming Movies</h2>
                    <PSliders images={upcomingMovies} />
                </div>


            </div>
        </>
    );
};

export default HomePage;