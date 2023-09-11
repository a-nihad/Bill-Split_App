import React from "react";
import Button from "./Button";

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <ul
      className={`flex justify-between hover:bg-[#fff4e6] py-2 px-5 ${
        isSelected ? "bg-[#fff4e6]" : ""
      }`}
    >
      <div className="flex gap-2">
        <img src={friend.image} alt={friend.name} className="rounded-full" />
        <div>
          <h1 className="capitalize"> {friend.name} </h1>

          {friend.balance > 0 && (
            <p className="text-green-600">
              You owe {friend.name} ${friend.balance}
            </p>
          )}
          {friend.balance < 0 && (
            <p className="text-red-600">
              You owe {friend.name} ${Math.abs(friend.balance)}
            </p>
          )}
          {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        </div>
      </div>
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}{" "}
      </Button>
    </ul>
  );
};

export default Friend;
