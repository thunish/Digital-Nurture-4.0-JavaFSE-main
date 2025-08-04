import React from 'react';

const ListOfPlayers = ({ players }) => {
  return (
    <ul>
      {players.map((item) => (
        <li key={item.name}>
          Mr. {item.name} <span>({item.score})</span>
        </li>
      ))}
    </ul>
  );
};

export default ListOfPlayers;
