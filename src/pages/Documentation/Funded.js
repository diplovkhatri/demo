import React from "react";
import test from "./test.png";

const Funded = () => {
  const items = [
    {
      name: "Overvies",
      imgs: test,
    },
    {
      name: "Small Grants",
      imgs: test,
    },
    {
      name: "Prop House",
      imgs: test,
    },
    {
      name: "Proposal",
      imgs: test,
    },
  ];
  return (
    <div className=" font-rock grid grid-cols-1 mt-20 lg:w-full place-content-center">
      <div className="w-7/12 pb-10 grid justify-self-center">
        <h2 className="font-bold text-4xl tracking-widest mb-3 w-2/3">
          Learn abot JUJU
        </h2>
        <p className="tracking-wide text-xl">
          Learn about the JUJUs project, the ecosystem and community.
        </p>
      </div>
      <div className="grid content-center lg:w-full h-auto">
        <div className="grid w-7/12 justify-self-center gap-9 lg:grid-cols-4 md:grid-cols-2 px-10 ">
          {items.map((item) => (
            <div className="grid grid-cols-1 h-[30vh] shadow-2xl rounded-lg">
              <img src={item.imgs} alt="" className="h-[25vh] w-screen" />
              <p className="h-[5vh] grid font-bold text-3xl tracking-widest place-content-center bg-slate-700 text-white ">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Funded;
