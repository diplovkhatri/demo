import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
function About() {
  const data = [
    {
      heading: "Summary",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas!",
    },
    {
      heading: "Daily Acutions",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas!",
    },
    {
      heading: "JUJUs DAO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas!",
    },
    {
      heading: "Governance 'Slow Start'",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas!",
    },
    {
      heading: "JUJU Traits",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas!",
    },
    {
      heading: "On-Chart Artwork",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas!",
    },
    {
      heading: "Noun Seeder Contract",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas!",
    },
    {
      heading: "JUJUs Rewards",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas!",
    },
  ];
  return (
    <div className="lg:container lg:px-60 font-rock">
      <div className="lg:px-40 px-20 grid place-content-center">
        <h1 className="font-bold text-5xl tracking-widest">WTF ?</h1>
        <p className="mt-6">
          Nouns are an experimental attempt to improve the formation of on-chain
          avatar communities. While projects such as Cryptopunks have attempted
          to bootstrap digital community and identity, Nouns attempt to
          bootstrap identity, community, governance, and a treasury that can be
          used by the community.
        </p>

        {data.map((item) => (
          <Accordion className="mb-2">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{item.heading}</Accordion.Header>
              <Accordion.Body>{item.description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
    </div>
  );
}

export default About;
