import React from "react";
import Countdown from "react-countdown";
import Overlay from "../pages/popup";

import image from "./ntf.jpeg";

const Bidplace = () => {
  return (
    <div className="container w-full px-10 flex  flex-wrap lg:h-[65vh] md:h-[161vh] mb-10 pb-2">
      <div className="p-4 lg:h-[65vh] z-40 w-[50%] lg:w-1/2 md:w-full md:grid justify-items-center w-full md:mt-[-80px] lg:mt-[20px]">
        <button className=" container lg:w-full text-left font-bold text-4xl lg:mt-[-30px]">
          JUJU #633
        </button>
        {/* s */}

        <div
          className="mb-5 container border-black
         mx-auto h-auto px-20  flex border-4 rounded-2xl
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
        <div className="bottom-20 container mx-auto px-20 h-12 w-full flex justify-evenly">
          <input
            type="text"
            placeholder="x+0.53"
            className="w-5/6 border-black border-2 rounded-md shadow-sm  pl-12"
          />
          <button
            className="shadow-2xl text-white bg-slate-900 
                        font-[Poppins] font-bold 
                          px-6 rounded-xl border-4 md:ml-8 md:w-2/6  
                          hover:border-green-900 hover:bg-green-600 duration-500"
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

      {/* image */}
      <div
        className="md:h-3/5 lg:h-full  
      lg:z-40 lg:w-1/2 md:w-full grid place-content-center"
      >
        {/*  */}
        <div className="container opacity-70 pl-4  relative left-5 top-[-20px] text-gray w-full  md:pl-20 text-4xl flex ml-[-140px] ">
          <p className="grid grid-cols-2 place-content-center">
            <a href="" className="no-underline text-black">
              <ion-icon name="arrow-back-circle-outline"></ion-icon>
            </a>
            <a href="" className="no-underline text-black">
              <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </a>
          </p>
          <p className="text-2xl ml-2 grid place-content-center">
            March 06,2023
          </p>
        </div>
        {/*  */}
        <div className="relative w-[500px] left-5 h-[480px] rounded-xl">
          <img
            src={image}
            alt=""
            className="absolute h-[480px] w-[500px] border-2 hover:border-green-600 rounded-xl"
          ></img>
          <div
            className="absolute top-[80%] 
          bg-opacity-50  grid place-content-center
           w-[500px] h-[60px] bg-stone-200
           z-40 relative "
          >
            <span className="opacity-70 font-bold text-2xl z-40 text-black grid place-content-center ">
              Estimate Time
            </span>
            <span className="font-bold text-2xl z-40 text-black ">
              1d:23h:59m:59s
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bidplace;
