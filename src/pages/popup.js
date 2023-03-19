import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Overlay = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <button
      className="shadow-2xl text-black mt-3 
                        font-[Poppins] font-bold  text-2xl
                         rounded-xl w-full h-[50px] 
                          hover:bg-zinc-300 duration-500"
    >
      <a href="" className="no-underline text-black" onClick={handleShow}>
        connnect
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>bid Number</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Congratulation JUJU id for winning the bid with the highest bid place
          bid price eth"
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </button>
  );
};
export default Overlay;
