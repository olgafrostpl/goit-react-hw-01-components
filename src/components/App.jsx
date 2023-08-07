import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} title="Upload stats"/>
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions}/>
      <GlobalStyle />
    </>
  );
};
