import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
function About() {
  const data = [
    {
      heading: "JUJU",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas!",
    },
    {
      heading: "Acutions",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas!",
    },
    {
      heading: "JUJUs DAO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas!",
    },
    {
      heading: "NFTS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas!",
    },
  ];
  return (
    <div className="container lg:px-60 font-rock">
      {data.map((item) => (
        <div className="flex ">
          <a
            href=""
            key={item.heading}
            className="font-bold text-3xl list-none no-underline text-black p-3 "
          >
            {item.heading}
          </a>
        </div>
      ))}

      {/* <Accordion className="mb-2">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
    </div>
  );
}

export default About;
