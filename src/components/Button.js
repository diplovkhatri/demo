import React, { useState } from "react";
import Web3 from "web3";

const Button = () => {
  const [isconnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");
  const [accounts, setAccounts] = useState("");

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("non ethereum browser detected.please install metamask");
    }
    return provider;
  };
  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
        setEthBalance(ethBalance);
        setAccounts(account);
        setIsConnected(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onDesconnected = () => {
    setIsConnected(false);
  };

  return (
    <div className="lg:mr-[-330px]  md:ml-5 font-rock">
      {!isconnected && (
        <button
          className="shadow-2xl bg-black font-rock text-white 
    font-[Poppins] px-6 grid place-content-center
      rounded md:ml-8 w-full hover:bg-slate-700
     duration-500"
          onClick={onConnect}
        >
          Login
        </button>
      )}
      {isconnected && (
        <p
          onClick={onDesconnected}
          className="lg:w-full cursor-pointer flex 
          shadow-xl p-1 rounded-xl bg-slate-400
           text-white overflow-hidden"
        >
          {accounts}
        </p>
      )}
    </div>
  );
};

export default Button;
