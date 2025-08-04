import React from 'react';
import ListOfPlayers from './components/ListOfPlayers';
import ScoreBelow70 from './components/ScoreBelow70';
import OddPlayers from './components/OddPlayers';
import EvenPlayers from './components/EvenPlayers';
import ListOfIndianPlayers from './components/ListOfIndianPlayers';

function App() {
  const flag = false;

  const players = [
    { name: 'A', score: 60 },
    { name: 'B', score: 85 },
    { name: 'C', score: 40 },
    { name: 'D', score: 70 },
    { name: 'E', score: 65 },
    { name: 'F', score: 50 },
    { name: 'G', score: 90 },
    { name: 'H', score: 75 },
    { name: 'I', score: 55 },
    { name: 'J', score: 80 },
    { name: 'K', score: 95 },
  ];

  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const playerNames = players.map((p) => p.name);

  return (
    <div>
      {flag ? (
        <>
          <h1>List of Players:</h1>
          <ListOfPlayers players={players} />
          <h1>List of Players having Scores Less than 70:</h1>
          <ScoreBelow70 players={players} />
        </>
      ) : (
        <>
          <h1>Indian Team:</h1>
          <h3>Odd Players</h3>
          <OddPlayers players={players} />
          <h3>Even Players</h3>
          <EvenPlayers players={players} />
          <h1>List of Indian Players Merged:</h1>
          <ListOfIndianPlayers IndianPlayers={IndianPlayers} />
        </>
      )}
    </div>
  );
}

export default App;
