import { PeopleList } from '../components/PeopleList.tsx';
import { Outlet } from 'react-router-dom';

const DashboardMobile = () => {
  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          paddingTop: '1rem',
        }}
      >
        DashboardMobile
      </h1>

      <PeopleList
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      />
      <Outlet />
    </>
  );
};

export { DashboardMobile };
