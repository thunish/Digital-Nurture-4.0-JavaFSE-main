import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);
    let converted = 0;

    if (currency.toLowerCase() === 'euro') {
      converted = amt * 0.011;
      alert(`Converting to Euro: amount is €${converted.toFixed(2)}`);
    } else if (currency.toLowerCase() === 'rupee') {
      converted = amt * 90.0;
      alert(`Converting to Rupee: amount is ₹${converted.toFixed(2)}`);
    } else {
      alert('Unknown currency entered.');
    }
  };

  return (
    <div>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Amount: <input type="text" value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <div>
          Currency: <input type="text" value={currency} onChange={e => setCurrency(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConverter;
