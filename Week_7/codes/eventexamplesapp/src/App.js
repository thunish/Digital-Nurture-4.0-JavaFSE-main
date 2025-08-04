import React, { useState } from 'react';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(prev => prev + 1);
    sayHello(); // Multiple actions
  };

  const decrement = () => setCount(prev => prev - 1);

  const sayHello = () => {
    alert('Hello from React!');
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = (event) => {
    alert('I was clicked');
    console.log('Synthetic event object:', event);
  };

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => sayWelcome('welcome')}>Say Welcome</button>
      <button onClick={handleClick}>Click on me</button>

      <hr />
      <CurrencyConverter />
    </div>
  );
}

export default App;
