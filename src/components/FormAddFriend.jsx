import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
  };

  return (
    <div className="col-span-3 p-5 bg-[#fff4e6] rounded-lg">
      <form
        className="grid grid-cols-2 gap-x-4 gap-y-2"
        onSubmit={handleSubmit}
      >
        <label> 👫 Friend Name </label>
        <Input value={name} setValue={setName} />

        <label> 🌄 Image URL </label>
        <Input value={image} setValue={setImage} />

        <Button className="col-start-2">Add</Button>
      </form>
    </div>
  );
};

export default FormAddFriend;
