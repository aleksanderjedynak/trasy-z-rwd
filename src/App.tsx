import { BrowserRouter } from 'react-router-dom';
import 'bulma/css/bulma.css';
import { AppRoute } from './AppRoute.tsx';

const App = () => {
  return (
    <div className={`container is-max-widescreen`}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  );
};

export default App;
