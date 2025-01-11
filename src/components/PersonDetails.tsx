import { NavLink, useParams } from 'react-router-dom';
import data from '../assets/data.json';

type Person = {
  index: number;
  name: string;
  age: number;
  email: string;
  phone: string;
};

const typedData: Person[] = data;

const PersonDetails = () => {
  const { id } = useParams<{ id: string }>();

  const index = parseInt(id || '', 10);

  if (isNaN(index) || index < 0 || index >= typedData.length) {
    return <h1>Brak danych dla indeksu: {id}</h1>;
  }

  const person = typedData[index];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          marginTop: '40px',
        }}
      >
        <h1
          style={{
            fontSize: '1rem',
            textAlign: 'center',
          }}
        >
          Szczegóły osoby o ID: <strong>{id}</strong>
        </h1>
        <p>
          <strong>Imię:</strong> {person.name}
        </p>
        <p>
          <strong>Wiek:</strong> {person.age}
        </p>
        <p>
          <strong>Email:</strong> {person.email}
        </p>
        <p>
          <strong>Telefon:</strong> {person.phone}
        </p>
      </div>
      <div
        style={{
          marginTop: '40px',
        }}
      >
        <NavLink to={'/'} className={`button`}>
          Powrót
        </NavLink>
      </div>
    </div>
  );
};

export { PersonDetails };
