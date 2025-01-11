import Media from 'react-media';
import { DashboardMobile } from '../pages/DashboardMobile.tsx';
import { Dashboard } from '../pages/Dashboard.tsx';

const PeopleLayout = () => {
  return (
    <Media query={{ maxWidth: 1024 }}>
      {(matches) => (matches ? <DashboardMobile /> : <Dashboard />)}
    </Media>
  );
};

export { PeopleLayout };
