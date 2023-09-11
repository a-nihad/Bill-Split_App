import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowForm = () => {
    setShowAddForm((showAddForm) => !showAddForm);
  };

  const handleAddForm = (newFriend) => {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddForm(false);
  };

  const handleSelection = (fried) => {
    // setSelectedFriend(fried);
    setSelectedFriend((currentSelected) =>
      currentSelected?.id === fried.id ? null : fried
    );
    setShowAddForm(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  };

  return (
    <div className="container m-auto mt-[100px] grid gap-5 lg:grid-cols-2 justify-items-center">
      <div className="w-[450px] grid grid-cols-3 gap-2 ">
        <FriendList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddForm && <FormAddFriend onAddFriend={handleAddForm} />}
        <Button className="col-start-3 mr-5" onClick={handleShowForm}>
          {showAddForm ? "Close" : "Add Friend"}{" "}
        </Button>
      </div>
      <div className="w-[500px]">
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
}

export default App;
