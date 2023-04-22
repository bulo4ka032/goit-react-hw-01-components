import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import users from "../user.json";
import data from '../data.json';
import friends from "../friends.json";
import transactions from "../transactions.json"

export const App = () => {
  return (
    <div> 
      <Profile username={users.username} tag={users.tag} location={users.location} avatar={users.avatar} followers={users.stats.followers} views={users.stats.views} likes={users.stats.likes}/>
      <Statistics data={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions}/>
    </div>
  );
};




