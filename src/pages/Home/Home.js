import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Home = () => {
  return (
    <div>
      <div className="container flex flex-col  px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2 font-serif flex">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-bold text-gray-800 md:text-5xl mb-4">
                    Learn Without <br /> Limits
                    </h1>
                    <p className="text-xl mb-4">
                        Build new skills with different courses, get certificates.
                    </p>
                    <button className="bg-purple-500 px-8 py-4 rounded-md text-white text-2xl hover:bg-green-500 cursor-pointer">Join for Free</button>
                </div>
            </div>
    
            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_dssnqvv4.json"
                > 
            </Player>
            </div>
        </div>
    </div>
  );
};

export default Home;
