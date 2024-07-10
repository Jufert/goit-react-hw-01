import "./App.css";
import Profile from "../Profile/Profile.jsx";
import userData from "../../userData.json";
import FriendList from "../FriendList/FriendList.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";
import friends from "../../friends.json";
import transactions from "../../userTransaction.json";

function App() {
  return (
    <div className="App">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
