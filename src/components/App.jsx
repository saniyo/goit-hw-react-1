import { User } from './Profile/Profile';
import user from '../data/user';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data';
export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >

    // </div>
    <>
      <User user={user} />
      <Statistics title={'Preved'} items={data} />
    </>
  );
};
