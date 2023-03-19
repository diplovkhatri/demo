import React, { useState } from "react";
import Bidplace from "./Bidplace";
import Button from "./Button";

const Navbar = () => {
  const treasury = 234565432;
  let items = [
    { name: "DAO", link: "/vote" },
    { name: "Docs", link: "/documents" },
    { name: "History", link: "/history" },
    // { name: "Playground", link: "/playground" },
    // { name: "Nouns & Traits", link: "/nouns&traits" },
    // { name: "Language", link: "/language" },
  ];
  //   console.log(items);
  let [open, setOpen] = useState(false);
  return (
    <div className="container w-full text-2xl z-40 mt-2 no-underline">
      <div className="md:flex items-center justify-between">
        <div className="grid gap-2 font-bold text-2xl cursor-pointer flex items-center font-[Poppins] grid gap-2 grid-cols-2">
          <span className="text-3xl">JUJU</span>
          <div className=" sm:ml-[-90px] sm:mr-[190px] font-bold border-2 rounded-2xl border-zinc-300 text-sm md:p-2 overflow-hidden">
            Treaury: {treasury}
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center 
        md:pb-0 pb-12 absolute md:static
        md:z-auto z-[-1] text-center left-0 w-full
        md:w-auto 
        md:pl-0 pr-9 
        ${open ? "top-15 bg-stone-300 z-40" : "top-[-500px]"}`}
        >
          {items.map((item) => (
            <li
              key={item.name}
              className=" border-2 rounded-lg border-amber-50 md:ml-8 lg:text-2xl md:my-0 my-7 no-underline"
            >
              <a
                href={item.link}
                className="no-underline text-gray-800 hover:text-gray-400 duration-500"
              >
                {item.name}
              </a>
            </li>
          ))}
          <Button>Connect</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
