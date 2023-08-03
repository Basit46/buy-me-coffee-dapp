import React from "react";
import { ethers } from "ethers";
import { useEffect } from "react";
import { useState } from "react";
import { contractAbi, contractAddress } from "../contractDetails";
import Senders from "./Senders";

const MainSection = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [senders, setSenders] = useState(null);

  useEffect(() => {
    const connect = async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://goerli.infura.io/v3/7fa06c473ce3459f8358a3751f048048"
      );

      const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        provider
      );

      const res = await contract.getSenders();
      setSenders(res);
    };

    connect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseFloat(amount) == 0) {
      alert("Amount must be more than 0 boss!");
      return;
    }

    const writeProvider = new ethers.providers.Web3Provider(window.ethereum);
    await writeProvider.send("eth_requestAccounts", []);
    const signer = writeProvider.getSigner();

    const writeContract = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );

    const buycoffee = await writeContract.buy(name, {
      value: ethers.utils.parseEther(amount),
    });

    alert("Transaction Processing, Pls wait!");
    setName("");
    setAmount("");
    await buycoffee.wait();
    alert("Coffee Bought!!");
    window.location.reload();
  };

  return (
    <div className="w-full lg:w-[65vw] p-[30px] flex flex-col items-center">
      <h1 className="text-center text-[2rem] vsm:text-[3rem] font-bold mb-[20px]">
        BUY ME COFFEE
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-fit flex flex-col gap-[2rem] items-center border-[2px] border-gray-500 rounded-[10px] p-[10px] vsm:p-[30px] "
      >
        <input
          className="w-[90%] vsm:w-[300px] border-[2px] border-gray-400 p-[5px]"
          type="text"
          placeholder="Your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-[90%] vsm:w-[300px] border-[2px] border-gray-400 p-[5px]"
          type="number"
          placeholder="Enter ether amount"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="bg-[green] px-[10px] py-[5px] text-white ">
          BUY ME COFFEE
        </button>
      </form>

      {senders && <Senders senders={senders} />}
    </div>
  );
};

export default MainSection;
