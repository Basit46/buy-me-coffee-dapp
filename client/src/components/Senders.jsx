import React from "react";
import Sender from "./Sender";

const Senders = ({ senders }) => {
  return (
    <table className="w-[98%] md:w-[80%] mt-[30px] bg-blue-200">
      <thead>
        <tr className="font-bold underline">
          <td>No</td>
          <td>Name</td>
          <td>Amount Sent</td>
          <td>Date</td>
        </tr>
      </thead>
      <tbody>
        {senders.map((sender, index) => (
          <Sender key={index} sender={sender} />
        ))}
      </tbody>
    </table>
  );
};

export default Senders;
