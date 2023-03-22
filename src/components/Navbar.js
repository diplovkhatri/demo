import React, { useState } from "react";
import Bidplace from "./Bidplace";
import Button from "./Button";

const Navbar = () => {
  const treasury = 234565432;
  let items = [
    { name: "DAO", link: "/vote" },
    { name: "Docs", link: "/documents" },
    { name: "Discourser", link: "/discourser" },
    // { name: "History", link: "/history" },
    // { name: "Playground", link: "/playground" },
    // { name: "Nouns & Traits", link: "/nouns&traits" },
    // { name: "Language", link: "/language" },
  ];
  //   console.log(items);
  let [open, setOpen] = useState(false);
  return (
    <div className="container font-rock h-[80px] grid w-full text-2xl z-40 mt-2 no-underline mb-3">
      <div className="md:flex items-center justify-between h-4/3">
        <div className="grid gap-2 font-bold text-2xl cursor-pointer flex items-center font-[Poppins] grid grid-cols-2">
          <span className="text-3xl font-bolded ">JUJU</span>
          <div
            className=" sm:ml-[-90px] sm:mr-[190px] 
          font-bold border-2 rounded-2xl
          border-black text-xl md:p-2
          md:ml-4 md:w-full  lg:w-[200px] lg:h-[60px] grid place-content-center
          overflow-hidden hover:border-slate-900 
         hover:grid hover:overflow-hidden 
          hover:place-content-center"
          >
            Vault: {treasury}
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center 
        md:pb-0 pb-12 absolute md:static
        md:z-auto z-[-1] text-center w-full
        md:w-auto 
        md:pl-0 pr-9
        ${open ? "top-15 bg-stone-300 sm:z-10" : "top-[-496px]"}`}
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
