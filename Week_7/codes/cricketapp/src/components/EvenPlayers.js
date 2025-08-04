import React from 'react';

const EvenPlayers = ({ players }) => {
  const evenPlayers = players.filter((_, index) => index % 2 !== 0); // 0-based even positions

  return (
    <ul>
      {evenPlayers.map((player, idx) => (
        <li key={idx}>
          Mr. {player.name} ({player.score})
        </li>
      ))}
    </ul>
  );
};

export default EvenPlayers;
