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
          <button className="border-4 mt-3 mb-3 bg-slate-900 text-white rounded-2xl text-xl font-semibold hover:bg-green-900 hover:border-green-300">
            <p className="opacity-80 m-2">submit proposal</p>
          </button>
        </div>
        {/*  */}
      </div>
      {/* proposal */}
      <div className="flex flex-col border-2 p-3 rounded-2xl border-zinc-500 m-2">
        <div className="flex justify-between">
          <div className="flex h-[5vh] ">
            <span className="opacity-40 text-3xl font-semibold">245</span>
            <span className="text-3xl font-semibold ml-4">proposal</span>
          </div>
          <div>
            <button className="border-zinc-500 border-2 p-1 w-full rounded-xl">
              pending
            </button>
          </div>
        </div>
        <div className="opacity-50 border-2 w-1/4 text-lg rounded-xl border-zinc-500 grid place-content-center">
          starts in 2 days
        </div>
      </div>

      <div className="flex flex-col border-2 p-3 rounded-2xl border-zinc-500 m-2">
        <div className="flex justify-between">
          <div className="flex h-[5vh] ">
            <span className="opacity-40 text-3xl font-semibold">245</span>
            <span className="text-3xl font-semibold ml-4">proposal</span>
          </div>
          <div>
            <button className="border-zinc-500 border-2 p-1 w-full rounded-xl">
              pending
            </button>
          </div>
        </div>
        <div className="opacity-50 border-2 w-1/4 text-lg rounded-xl border-zinc-500 grid place-content-center">
          starts in 2 days
        </div>
      </div>

      {/* end */}
    </div>
  );
};

export default Proposal;
