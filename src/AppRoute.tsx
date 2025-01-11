import { useRoutes } from 'react-router-dom';
import { NotFound } from './pages/NotFound.tsx';
import { PeopleLayout } from './components/PeopleLayout.tsx';
import { PersonDetails } from './components/PersonDetails.tsx';
import { People } from './components/People.tsx';

const AppRoute = () => {
  const routeConfig = [
    {
      path: '/',
      element: <PeopleLayout />,
      children: [
        { index: true, element: <People /> },
        { path: 'people/:id', element: <PersonDetails /> },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ];

  return useRoutes(routeConfig);
};

export { AppRoute };
