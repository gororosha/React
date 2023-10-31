import { Button } from "./Button";
import { Sidebar } from "./Sidebar";
import "./index.css";
import { useState } from "react";
import { initialFriends } from "./initialFriends";
import { FormSplitBill } from "./FormSplitBill";
import { AddFriendForm } from "../AddFriendForm";

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isOpen, setIsOpen] = useState(true);

  function handleAdd() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setIsOpen(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar friends={friends} />
        {isOpen && <AddFriendForm onAddFriend={handleAddFriend} />}

        <Button onClick={handleAdd}>{isOpen ? "Close" : "Add Friend"}</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
