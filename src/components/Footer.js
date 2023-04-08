import React from "react";

const Footer = () => {
  const footeritem = [
    {
      name: "JUJU",
      link: "/https://twitter.com/?lang=en",
    },
    {
      name: "Twiter",
      link: "/etherscan",
    },
  ];
  return (
    <div className="container font-rock w-full mt-8 bg-white">
      <div className="mx-auto grid grid-cols-1 md:w-full sm:w-full">
        <ul
          className="
                font-bold text-3xl h-36 p-2 flex justify-between"
        >
          {footeritem.map((item) => (
            <li key={item.name} className="text-center">
              <a href={item.link} className="grid no-underline text-black">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
