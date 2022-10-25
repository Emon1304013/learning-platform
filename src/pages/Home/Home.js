import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Home = () => {
  return (
    <div>
      <div className="container flex flex-col  px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2 font-serif flex">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl text-purple-800 font-bold md:text-5xl mb-4">
                    Enhance Your <br /> Potential
                    </h1>
                    <p className="text-xl mb-4">
                        We make learning engaging & effective, so that you are ready to achieve your goals
                    </p>
                    <button className="bg-purple-500 px-8 py-4 rounded-full text-white text-2xl hover:bg-[#93E2A9] cursor-pointer font-bold">
                    Learn with us</button>
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