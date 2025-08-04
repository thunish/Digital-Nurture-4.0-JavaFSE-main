import React from 'react';

const OddPlayers = ({ players }) => {
  const oddPlayers = players.filter((_, index) => index % 2 === 0); // 0-based odd positions

  return (
    <ul>
      {oddPlayers.map((player, idx) => (
        <li key={idx}>
          Mr. {player.name} ({player.score})
        </li>
      ))}
    </ul>
  );
};

export default OddPlayers;
