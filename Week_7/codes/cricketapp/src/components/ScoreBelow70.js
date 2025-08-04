import React from 'react';

const ScoreBelow70 = ({ players }) => {
  const players70 = [];
  players.map((item) => {
    if (item.score < 70) {
      players70.push(item);
    }
  });

  return (
    <ul>
      {players70.map((item) => (
        <li key={item.name}>
          Mr. {item.name} <span>({item.score})</span>
        </li>
      ))}
    </ul>
  );
};

export default ScoreBelow70;
