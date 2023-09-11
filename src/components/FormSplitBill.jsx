import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("User");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSplitBill(whoIsPaying === "User" ? paidByFriend : -paidByUser);

    setBill("");
    setPaidByUser("");
  };

  return (
    <form className="space-y-6 p-8 bg-[#fff4e6] rounded-xl " onSubmit={handleSubmit}>
      <h1 className="text-xl font-semibold uppercase">
        SPLIT A BILL WITH {selectedFriend.name}{" "}
      </h1>

      <div className="grid grid-cols-2 gap-5 justify-end">
        <label> Bill Value </label>
        <Input value={bill} setValue={setBill} />

        <label> Your expense </label>
        <input
          type="text"
          value={paidByUser}
          className="py-2 w-full"
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value)
            )
          }
        />

        <label> {selectedFriend.name}'s expense </label>
        <Input
          value={paidByFriend}
          className="bg-[#faf6f6]"
          isDisabled={true}
        />

        <label> Who is paying the bill </label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
          className="w-full py-2"
        >
          <option value="User">You</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>

        <Button className="col-start-2">Split Bill</Button>
      </div>
    </form>
  );
};

export default FormSplitBill;
