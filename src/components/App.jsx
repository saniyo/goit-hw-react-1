import { User } from './Profile/Profile';
import user from '../data/user';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data';
import { FriendsList } from './FriendsList/FriendsList';
import friends from '../data/friends';

export const App = () => {
  return (
    <>
      <User user={user} />
      <Statistics title={'Upload stats'} items={data} />
      <FriendsList items={friends}/>
    </>
  );
};
