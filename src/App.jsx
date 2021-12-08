import Profile from "./Components/Profile";
import user from "./data/user.json";
import Statistics from "./Components/Statistics";
import statistic from './data/statistic.json';
import FriendList from "./Components/FriendList";
import friends from './data/friends.json';
import TransactionHistory from "./Components/TransactionHistory";
import transactions from './data/transactions.json';



function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag = {user.tag}
        location = {user.location}
        avatar = {user.avatar}
        stats={user.stats} />
      
       <Statistics title="Upload stats" stats={statistic} />
       <Statistics stats={statistic} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />;

    </div>
  );
}

export default App;
