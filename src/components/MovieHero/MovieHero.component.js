import React from "react";

import { BsHeartFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";


const launchRazorPay = () => {
    let options = {
        key: "rzp_test_RDlbyFdjBg40Du",
        amount: 10000,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Movie Purchase",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment Done")
        },
        theme: { color: "#c4242d" }
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
};
const HeroMovie = () => {
    return (
        <>
            <div className="relative" style={{ height: "35rem" }}>
                <div className="absolute pl-64" >
                    <img className="ml-36" style={{ height: "35rem" }} src=" https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg" alt="hero movie images"></img>
                </div>
                <div className="absolute h-full w-full z-10"
                    style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }}
                />
                <div className="absolute flex flex-col-md-9 mx-11 my-14 ml-40 rounded-xl bg-black z-30" style={{ height: "405px" }}>
                    <img className="rounded-xl h-96 w-full" src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg" alt="hero movie images"></img>

                </div>

                <div className="flex my-16 text-white z-30 w-full h-96 absolute" style={{ left: "28rem" }}>
                    <div className="border z-30 border-none absolute">
                        <h1 className="text-4xl font1">
                            <b>Spider-Man: No Way Home</b>
                        </h1>

                        <div className="my-5 border flex border-none relative">
                            <BsHeartFill className="my-2 text-3xl text-butoon-50" />
                            <h1 className="mx-2 my-2"><strong className="text-xl">91%</strong> 410.3K Ratings</h1>
                            <IoIosArrowForward className=" text-xl mx-1 my-4" />
                        </div>
                        <div className=" rounded-lg bg-bms-1000 h-20 -mt-3 text-gray-700 flex flex-col-md-6">
                            <div className="ml-5 mt-2 py-2">
                                <h1 className="text-white text-lg font-semibold  flex flex-col">Add Your ratting & review</h1>

                                <h1 className="text-gray-300">Your ratings matter</h1>

                            </div>
                            <button className="bg-white text-lg font-bold rounded-md text-gray-1000 px-2 h-11 w-28 mt-4 mb-5 ml-24 mr-6 mx-4">
                                Rate Now
                            </button>



                        </div>
                        <div className="mt-5 border border-none">
                            <div className="bg-white opacity-95 font-semibold mb-2 text-black w-56 rounded-sm  ">
                                <h1>2D, 4DX, 3D, 4DX, IMAX 2D</h1>
                            </div>
                            <div className="bg-white opacity-95 font-semibold text-black w-72 rounded-sm">
                                <h1>English, Hindi, Kannada, Telugu, Tamil</h1>
                            </div>
                            <br></br>
                            <div className="flex">
                                <h1>2h 28m</h1>&nbsp;&nbsp;
                                <h1> • </h1>&nbsp;&nbsp;
                                <h1> Action, Adventure, Sci-Fi </h1>&nbsp;&nbsp;
                                <h1> • </h1>&nbsp;&nbsp;
                                <h1> UA </h1>&nbsp;&nbsp;
                                <h1> • </h1>&nbsp;&nbsp;
                                <h1> 16 DEC, 2021 </h1>



                            </div>
                            <button onClick={launchRazorPay} class="mt-3 h-14 w-64 bg-butoon-50 hover:bg-pink-600 text-white font-bold py-2 px-8 rounded-lg">
                                Book tickets
                            </button>
                        </div>


                    </div>
                </div>
            </div>



        </>
    )
};

export default HeroMovie;