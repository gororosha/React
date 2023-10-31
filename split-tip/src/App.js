import { Button } from "./Button";
import { Sidebar } from "./Sidebar";
import "./index.css";
import { useState } from "react";
import { initialFriends } from "./initialFriends";
import { FormSplitBill } from "./FormSplitBill";
import { AddFriendForm } from "./AddFriendForm";

export default function App() {
  const [selectedFriend, setselectedFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  function handleSelection(friend) {
    // setselectedFriend(friend);
    setselectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setIsOpen(false);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setIsOpen(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setselectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {isOpen && <AddFriendForm onAddFriend={handleAddFriend} />}

        <Button onClick={handleIsOpen}>
          {isOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          key={selectedFriend.id}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
