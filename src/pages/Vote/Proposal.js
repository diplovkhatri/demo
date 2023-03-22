import React from "react";

const Proposal = () => {
  return (
    <div className="container font-rock flex flex-col h-auto">
      <div className="flex justify-between h-[10vh]">
        <div className="grid content-center font-bold text-5xl m-2">
          Proposals
        </div>
        {/*  */}
        <div className="flex">
          <p className="opacity-60   grid place-content-center m-3 text-xl">
            Connect wallet to make a propsal
          </p>
          <button className="border-2 border-black mt-3 mb-3 bg-white text-black rounded-2xl text-xl font-semibold hover:bg-green-900">
            <p className="m-2">submit proposal</p>
          </button>
        </div>
        {/*  */}
      </div>
      {/* proposal */}
      <div className="flex flex-col bg-[#F4F4F4] border-2 p-3 rounded-2xl border-zinc-500 m-2">
        <div className="flex justify-between">
          <div className="flex h-[5vh]   ">
            <span className=" text-xl  grid place-content-center">245</span>
            <span className="text-2xl  grid place-content-center ml-4">
              proposal
            </span>
          </div>
          <div>
            <button className="border-2 bg-[#E4C214] p-2 w-full rounded-xl">
              pending
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#F4F4F4] border-2 p-3 rounded-2xl border-zinc-500 m-2">
        <div className="flex justify-between">
          <div className="flex h-[5vh] ">
            <span className=" text-xl  grid place-content-center">245</span>
            <span className="text-2xl grid place-content-center ml-4">
              proposal
            </span>
          </div>
          <div>
            <button className="p-2 border-2 bg-[#A2A9A1] w-full rounded-xl">
              pending
            </button>
          </div>
        </div>
      </div>

      {/* end */}
    </div>
  );
};

export default Proposal;
