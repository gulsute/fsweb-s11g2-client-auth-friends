import "./App.css";
import AddFriend from "./Components/AddFriend";
import Login from "./Components/Login";
import FriendsList from "./Components/FriendsList";

function App() {
  return (
    <div className="App">
      <Login />
      <AddFriend />
      <FriendsList />
    </div>
  );
}

export default App;
