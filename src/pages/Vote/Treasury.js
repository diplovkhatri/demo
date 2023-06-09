import React from "react";

const Treasury = () => {
  return (
    <div className="container font-rock bg-white w-full md:w-full mt-4">
      <p className="font-bold text-3xl mt-4 mb-8">JUJU DAO</p>
      <p className="opacity-60">
        the vault of JUJU DAO is for the JUJU NFT holders for the long term
        growth of the project
      </p>
      <div className="w-full flex justify-evenly rounded-xl p-2 ">
        {/*  */}
        <div className="grid place-content-center bg-[#F4F4F4] hover:border-green-300 md:overflow-hidden shadow-xl p-2 m-2 rounded-xl border-black w-[560px] h-[232px]">
          <span className="text-stone-600 font-semibold text-4xl opacity-80 ">
            Eth
          </span>
          <h3 className="mt-2 mb-2 font-bold text-4xl">283150</h3>
        </div>
        {/*  */}
        <div className="grid place-content-center bg-[#F4F4F4] shadow-md hover:border-green-300 shadow p-2 m-2 rounded-xl w-1/3 border-black w-[560px] h-[231px]">
          <span className="text-stone-600 font-semibold text-4xl opacity-80 ">
            $ USD
          </span>
          <h3 className="mt-2 mb-2 font-bold text-4xl">28350</h3>
        </div>
        {/*  */}
        {/* <div className="border-2 hover:border-green-300 shadow p-2 m-2 rounded-xl w-1/2 border-black">
          This treasury exists for JUJUS DAO participants to allocate resources
          for the long-term growth and prosperity of the JUJUS project.
        </div> */}
      </div>
    </div>
  );
};

export default Treasury;
