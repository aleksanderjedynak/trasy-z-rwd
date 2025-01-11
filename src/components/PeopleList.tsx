import data from '../assets/data.json';
import { NavLink } from 'react-router-dom';
import React from 'react';

type PeopleListProps = {
  style?: React.CSSProperties;
};

const PeopleList = ({ style }: PeopleListProps) => {
  return (
    <nav>
      <ul className={'buttons has-addons'} style={style}>
        {data.map((item: { index: number; name: string }) => {
          return (
            <li key={`person-${item.index}`}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'button is-link' : 'button is-primary'
                }
                to={`/people/${item.index}`}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { PeopleList };
