import React from "react";
import logo from "./ntf.jpeg";

function Popup() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="font-rock shadow-2xl text-white mt-3 z-[40] sm:z-40 
                        font-[Poppins] font-bold  text-2xl 
                         rounded-xl w-full h-[50px] 
                          hover:border-green-900 hover:bg-green-600  duration-500
                          border-4 border-black bg-slate-900 
                            focus:outline-none ease-linear
                            transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Bid History
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center backdrop-blur-sm bg-transparent/70 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 w-[600px] rounded-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <div className="h-[150px] w-full flex">
                    <img
                      src={logo}
                      alt=""
                      className="w-[150px] h-full rounded-2xl shadow"
                    />
                    <span className=" ml-[30px] flex flex-col justify-content-center font-rock font-semibold text-xl">
                      <p className="text-2xl">Bid history</p>
                      <p className="text-[1rem] font-bold mt-[-20px]">
                        JUJU #567
                      </p>
                    </span>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl mt-[-140px] leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="h-6 w-6 text-3xl rounded-2xl block outline-none focus:outline-none">
                        <ion-icon name="close-outline"></ion-icon>
                      </span>
                    </button>
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-6 w-6xl h-auto">
                  <p className="my-4 text-slate-500 text-lg scrolable leading-relaxed">
                    <div className=" max-h-[19vh] ">
                      <li className="flex shadow-xl rounded-2xl h-[4vh] mb-[10px]  bg-slate-300 justify-between">
                        <span className="ml-[12px] mt-[4px]">bid Address</span>
                        <span className="font-bold text-lg mr-[12px] mt-[4px]">
                          26.51 Eth
                        </span>
                      </li>
                      <li className="flex shadow-xl rounded-2xl h-[4vh] mb-[10px]  bg-slate-300 justify-between">
                        <span className="ml-[12px] mt-[4px]">bid Address</span>
                        <span className="font-bold text-lg mr-[12px] mt-[4px]">
                          26.51 Eth
                        </span>
                      </li>
                      <li className="flex shadow-xl rounded-2xl h-[4vh] mb-[10px]  bg-slate-300 justify-between">
                        <span className="ml-[12px] mt-[4px]">bid Address</span>
                        <span className="font-bold text-lg mr-[12px] mt-[4px]">
                          26.51Eth
                        </span>
                      </li>
                      <li className="flex shadow-xl rounded-2xl h-[4vh] mb-[10px]  bg-slate-300 justify-between">
                        <span className="ml-[12px] mt-[4px]">bid Address</span>
                        <span className="font-bold text-lg mr-[12px] mt-[4px]">
                          26.51 Eth
                        </span>
                      </li>
                    </div>
                  </p>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
export default Popup;
