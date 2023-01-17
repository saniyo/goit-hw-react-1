import { User } from './Profile/Profile';
import user from '../data/user';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data';
export const App = () => {
  return (
    <>
      <User user={user} />
      <Statistics title={'Upload stats'} items={data} />
    </>
  );
};
