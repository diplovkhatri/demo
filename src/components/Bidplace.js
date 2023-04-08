import React from "react";
import Countdown from "react-countdown";
import Overlay from "../pages/popup";

import image from "./ntf.jpeg";
import Popup from "./Popup";

const Bidplace = () => {
  return (
    <div className="container w-full px-10 flex  flex-wrap lg:h-[65vh] md:h-[161vh] mb-10 pb-2">
      <div
        className="p-4 lg:h-[65vh] 
      z-40 w-[50%] lg:w-1/2 md:w-full
       md:grid justify-items-center
       w-full md:mt-[-80px] lg:mt-[20px]"
      >
        <button className=" container mb-4 mt-2 lg:w-full text-left font-bold text-4xl lg:mt-[-30px]">
          JUJU #633
        </button>
        {/* s */}

        <div
          className="mb-4 container border-black
         mx-auto h-auto   flex border-2 rounded-2xl
         flex-row justify-between w-full"
        >
          <div className="flex flex-col justify-center pl-10">
            <span className=" opacity-60 font-bold text-xl m-2">
              HIGHEST BID
            </span>
            <span className="font-bold text-lg m-2">26.51 ETH</span>
          </div>

          <div className="border-2 border-black h-5/6 mt-[10px]  ml-2 mr-2"></div>
          <div className="flex flex-col justify-center pr-10">
            <span className="opacity-60 font-bold text-xl m-2">
              BIDDING Address
            </span>
            <span className="font-bold text-lg m-2 overflow-hidden">
              sdcfgt545678uygfgyt5tfgt
            </span>
          </div>
        </div>

        {/* sd */}
        <div className="h-12 w-full flex">
          <input
            type="text"
            placeholder="x+0.53"
            className="w-full border-black border-2 rounded-md shadow-sm m-0 pl-8"
          />
          <button
            className="shadow-2xl text-white bg-slate-900 
                        font-[Poppins] font-bold 
                         rounded-xl md:ml-8 md:w-2/6  
                          hover:border-green-900 
                          hover:bg-green-600 duration-500"
          >
            Place bid
          </button>
        </div>
        <div className="container w-full p-0  flex flex-col w-full">
          <div className=" max-h-[11vh] overflow-hidden">
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
          </div>

          <Popup />

          {/* <Overlay /> */}
        </div>
      </div>

      {/* image */}
      <div
        className="md:h-3/5 lg:h-full  
      lg:z-30 lg:w-1/2 md:w-full grid place-content-center"
      >
        {/*  */}
        <div className="container opacity-70 p-0 lg:relative lg:top-[-20px] text-gray w-full text-3xl flex ">
          <p className="grid grid-cols-2 place-content-center mt-2 mb-[-10px] gap-2">
            <a href="" className="no-underline text-black">
              <ion-icon name="arrow-back-circle-outline"></ion-icon>
            </a>
            <a href="" className="no-underline text-black">
              <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </a>
          </p>
          <p className="text-lg ml-4 mb-[-10px] grid place-content-center">
            March 06,2023
          </p>
        </div>
        {/*  */}
        <div className="relative w-[500px]  h-[53vh] rounded-xl">
          <img
            src={image}
            alt=""
            className="absolute h-[53vh] mt-[0.2vh] w-[500px] border-2 hover:border-green-600 rounded-xl"
          ></img>
          <div
            className="absolute top-[73%] 
          backdrop-blur-md bg-white/20  grid place-content-center
           w-[500px] h-[80px] bg-stone-200
           z-30 relative "
          >
            <span className="opacity-70 font-bold text-lg z-30 text-black grid place-content-center ">
              Estimate Time
            </span>
            <span className="font-bold text-xl z-30 text-black ">
              1d:23h:59m:59s
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bidplace;
