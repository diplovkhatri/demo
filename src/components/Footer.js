import React from "react";

const Footer = () => {
  const footeritem = [
    {
      name: "Twiter",
      link: "/https://twitter.com/?lang=en",
    },
    {
      name: "Etherscan",
      link: "/etherscan",
    },
    {
      name: "Forums",
      link: "/Forums",
    },
  ];
  return (
    <div className="w-full bg-white">
      <div className="mx-auto grid grid-cols-1 lg:w-1/4 md:w-full sm:w-full">
        <ul
          className="
                font-bold text-3xl h-36 grid lg:grid-cols-3 md:grid-cols-3 content-center md:text-2xl sm:text-xl"
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
