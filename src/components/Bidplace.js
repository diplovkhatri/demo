import React from "react";
import Countdown from "react-countdown";
import Overlay from "../pages/popup";

import image from "./ntf.jpeg";

const Bidplace = () => {
  return (
    <div className="w-full px-10 flex flex-wrap lg:h-[65vh] md:h-[161vh] mb-10 pb-2">
      <div className="md:h-3/5 lg:h-full lg:w-1/2 md:w-full md:grid justify-items-center w-full">
        <img
          src={image}
          alt=""
          className="h-full lg:h-[65vh] justify-self-center"
        />
      </div>

      <div className="lg:h-[65vh] w-full lg:w-1/2 md:w-full md:grid justify-items-center w-full">
        <div className=" text-gray w-full mt-10 md:pl-20 text-4xl flex  ">
          <p className="flex justify-content-center">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </p>
          <p className="text-2xl grid place-content-center">March 06,2023</p>
        </div>
        <button className=" container lg:w-full text-left font-bold text-4xl lg:mt-[-30px]">
          Noun #633
        </button>
        {/* s */}
        <div className=" bottom-40 container mx-auto px-20  flex flex-col w-full">
          <div className="flex justify-between">
            <span>Current bid</span>
            <span className="font-bold text-lg">26.51</span>
          </div>
          <div className="flex justify-between">
            <span>Time Left</span>{" "}
            <span className="font-bold">
              {" "}
              <Countdown date={Date.now() + 86400000} />
            </span>
          </div>
          <a
            href=""
            className="text-black no-underline  container mx-auto h-2 mt-1 my-4 w-full"
          >
            Help mint the next Noun
          </a>
        </div>
        {/* sd */}
        <div className="bottom-20 container mx-auto px-20 h-12 w-full flex justify-evenly">
          <input
            type="text"
            placeholder="x+0.53"
            className="w-5/6 border-slate-300 rounded-md shadow-sm  pl-12"
          />
          <button
            className="shadow-2xl text-black 
                        font-[Poppins] font-bold 
                          px-6 rounded-xl md:ml-8 md:w-1/6  
                          hover:bg-zinc-300 duration-500 bg-stone-500"
          >
            Place bid
          </button>
        </div>
        <div className=" bottom-40 container mx-auto px-20  flex flex-col w-full">
          <div className="h-auto max-h-[11vh] overflow-hidden">
            <li className="flex justify-between">
              <span>Current bid</span>
              <span className="font-bold text-lg">26.51</span>
            </li>
            <hr />
            <li className="flex justify-between">
              <span>Current bid</span>
              <span className="font-bold text-lg">26.51</span>
            </li>
            <li className="flex justify-between">
              <span>Current bid</span>
              <span className="font-bold text-lg">26.51</span>
            </li>
            <li className="flex justify-between">
              <span>Current bid</span>
              <span className="font-bold text-lg">26.51</span>
            </li>
          </div>

          <Overlay />
        </div>
      </div>
    </div>
  );
};

export default Bidplace;
