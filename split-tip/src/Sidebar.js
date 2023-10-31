import { Person } from "./Person";

export function Sidebar({ friends, selectedFriend, onSelection }) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Person
            friend={friend}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
            key={friend.id}
          />
        ))}
      </ul>
    </div>
  );
}
