import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Overlay = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <button
      className="font-rock shadow-2xl text-black mt-3 sm:z-40 
                        font-[Poppins] font-bold  text-2xl
                         rounded-xl w-full h-[50px] 
                          hover:border-green-900 hover:bg-green-600  duration-500
                          border-4 border-black bg-slate-900"
    >
      <a
        href=""
        className="no-underline cursor-pointer text-white "
        onClick={handleShow}
      >
        Bid history
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
