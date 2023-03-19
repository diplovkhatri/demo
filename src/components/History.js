import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const History = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = [
    {
      jid: 1,
      wid: "ed1356640ooncpdn56",
      eth: 26.51,
      link: "/winner",
    },
    {
      jid: 2,
      wid: "ed1356640ooncpdn57",
      eth: 22.51,
      link: "/winner",
    },
    {
      jid: 3,
      wid: "ed1356640ooncpdn568",
      eth: 27.01,
      link: "/winner",
    },
    {
      jid: 4,
      wid: "ed1356640ooncpdn569",
      eth: 14.951,
      link: "/winner",
    },
  ];
  return (
    <div className="container grid mt-4">
      <div className="flex p-2 font-semibold text-2xl md:flex-wrap justify-between shadow-lg w-full">
        <div>JUJU ID</div>
        <div>WINNER ID</div>
        <div>Bid value</div>
      </div>
      {data.map((item) => (
        <div
          className="cursor-pointer flex p-2 font-semibold text-xl md:flex-wrap 
        justify-between shadow-lg w-full
         rounded-xl mt-2 text-black no-underline "
        >
          <div onClick={handleShow}>#{item.jid}</div>
          <div onClick={handleShow}>{item.wid}</div>
          <div onClick={handleShow}>{item.eth} Eth</div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>JUJU #{item.jid}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Congratulation JUJU "{item.wid}" for winning the bid with the
              highest bid place bid price "{item.eth}" eth"
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Done
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default History;
