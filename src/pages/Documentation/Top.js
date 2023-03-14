import React from "react";
import test from "./test.png";

const Top = () => {
  return (
    <div className="lg:h-[43vh] w-full  grid">
      <div className="w-7/12 grid justify-self-center">
        <div className="h-[17vh] w-full grid place-content-center ">
          <img src={test} alt="" className="pt-10 w-full" />
        </div>
        <div className="grid -h-[15vh] w-full lg:mt-[-40px]">
          <h2 className="grid justify-self-center lg:text-7xl lg:font-bold text-3xl font-bold lg:mt-[-50px]">
            Welcome to JUJUs Center
          </h2>
          <p className="grid justify-self-center text-xl lg:w-2/3 lg:mt-[-40px] text-center">
            The knowledge center & resource hub for Nouns DAO. Learn about the
            project, the community and ways to get involved and funded.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Top;
