import { PeopleList } from '../components/PeopleList.tsx';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <h1
        style={{
          fontSize: '2rem',
          paddingTop: '1rem',
        }}
      >
        Dashboard
      </h1>
      <PeopleList />
      <Outlet />
    </>
  );
};

export { Dashboard };
