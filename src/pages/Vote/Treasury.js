import React from "react";

const Treasury = () => {
  return (
    <div className="container font-rock bg-white w-full md:w-full mt-4">
      <p className="text-stone-600 font-semibold text-2xl opacity-50">
        Governance
      </p>
      <p className="font-bold text-5xl mt-4 mb-8">JUJUS DAO</p>
      <p>
        JUJUS govern JUJUS DAO. JUJUS can vote on proposals or delegate their
        vote to a third party. A minimum of 2 JUJUS is required to submit
        proposals.
      </p>
      <div className="w-fullshadow border-4 rounded-xl border-slate-500 p-4 flex md:flex-col justify-between">
        <div className="border-1 border-black">
          <span className="text-stone-600 font-semibold text-2xl opacity-80 ">
            Treasury
          </span>
          <h3 className="mt-2 mb-2 font-bold text-4xl">28350</h3>
          <p className="opacity-50 font-semibold text-3xl">$40,284,828.00</p>
        </div>
        <div className="md:mt-2 pb-4 w-1/3 md:w-full">
          This treasury exists for JUJUS DAO participants to allocate resources
          for the long-term growth and prosperity of the JUJUS project.
        </div>
      </div>
    </div>
  );
};

export default Treasury;
