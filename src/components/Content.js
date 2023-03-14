import React from "react";

const Content = () => {
  return (
    <>
      <div className="w-full lg:px-80 grid lg:px-70 lg:grid-cols-2 sm:grid-cols-1">
        {/* <p>One Noun,Every Day,Forever</p> */}
        <div className="grid place-content-center h-96">
          <p className="font-bold text-3xl md:w-full md:text-5xl px-20">
            One Noun,Every Day,Forever
          </p>
          <p className="text-xl flex md:w-full px-20  items-strach">
            Behold, an infinite work of art! Nouns is a community-owned brand
            that makes a positive impact by funding ideas and fostering
            collaboration. From collectors and technologists, to non-profits and
            brands, Nouns is for everyone.
          </p>
        </div>
        <div className="grid place-content-center">VIDEO</div>
        <div className="grid place-content-center lg:h-96 bg-indigo-200 md:hidden ">
          IMAGEhbksdfkhk
        </div>
        <div className="grid place-content-center h-96">
          <p className="font-bold text-3xl md:w-full md:text-5xl px-20">
            Download the Free iso App
          </p>
          <p className="text-xl flex md:w-full px-20  items-strach">
            Every new Noun pushed right to your pocket! View the current
            auction, remix your own Noun, and explore the entire history
            directly from the app.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
