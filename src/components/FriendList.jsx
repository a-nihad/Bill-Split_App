import React from "react";
import Friend from "./Friend";

const FriendList = ({ friends, onSelection, selectedFriend }) => {
  return (
    <div className="col-span-full max-h-[380px] overflow-auto">
      {friends.map((friend) => (
        <Friend
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
          key={friend.id}
        />
      ))}
    </div>
  );
};

export default FriendList;
