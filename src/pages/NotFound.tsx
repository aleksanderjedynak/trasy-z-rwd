import { Link } from 'react-router-dom';

const NotFound = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <h1 className={'title is-1'}>404</h1>
    <Link to="/" className={`button is-danger`}>
      Go to Dashboard asd
    </Link>
  </div>
);

export { NotFound };
