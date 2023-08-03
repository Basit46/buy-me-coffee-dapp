import React from "react";

const Sender = ({ sender }) => {
  return (
    <tr className="mt-[10px] my-2">
      <td>{sender.id.toString()}</td>
      <td>{sender.senderName}</td>
      <td>{parseFloat(sender.amountSent.toString()) / 10 ** 18} GETH</td>
      <td>{new Date(sender.timestamp * 1000).toLocaleDateString()}</td>
    </tr>
  );
};

export default Sender;
