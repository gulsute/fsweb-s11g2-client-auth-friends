import { useEffect, useState } from "react";
import axios from "axios";

export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: { authorization: props.loggedIn },
      })
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="friendsList">
      <h1 class="text-7xl font-black">FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div class="text-5xl font-black" key={key}>
          {friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
