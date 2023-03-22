import React from "react";

const Treasury = () => {
  return (
    <div className="container font-rock bg-white w-full md:w-full mt-4">
      <p className="font-bold text-5xl mt-4 mb-8">The Vault</p>

      <div className="w-full flex rounded-xl p-2">
        {/*  */}
        <div className="border-2 hover:border-green-300 md:overflow-hidden shadow-xl p-2 m-2 rounded-xl border-black w-1/4">
          <span className="text-stone-600 font-semibold text-2xl opacity-80 ">
            Eth
          </span>
          <h3 className="mt-2 mb-2 font-bold text-4xl">283150</h3>
        </div>
        {/*  */}
        <div className="border-2 hover:border-green-300 shadow p-2 m-2 rounded-xl w-1/3 border-black">
          <span className="text-stone-600 font-semibold text-2xl opacity-80 ">
            $ USD
          </span>
          <h3 className="mt-2 mb-2 font-bold text-4xl">28350</h3>
        </div>
        {/*  */}
        <div className="border-2 hover:border-green-300 shadow p-2 m-2 rounded-xl w-1/2 border-black">
          This treasury exists for JUJUS DAO participants to allocate resources
          for the long-term growth and prosperity of the JUJUS project.
        </div>
      </div>
    </div>
  );
};

export default Treasury;
