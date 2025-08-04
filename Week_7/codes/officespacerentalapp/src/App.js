import React from 'react';
import './App.css';

const office = {
  Name: "DBS",
  Rent: 50000,
  Address: "Chennai",
  Image: "https://www.executivecentre.com/_next/image/?url=https%3A%2F%2Fassets.executivecentre.com%2Fassets%2FPrivateOffice-IN-OfficeComboPromo.jpg&w=3840&q=75"
};

const rentStyle = {
  color: office.Rent <= 60000 ? 'red' : 'green'
};



function App() {
  return (
    <div className="App">
      <h1>Office Space, at Affordable Range</h1>
      <img src={office.Image} alt="Office Space" width="25%" height="25%" />
      <h2>Name: <b>{office.Name}</b></h2>
      <h3 style={rentStyle}>Rent: Rs. {office.Rent}</h3>
      <h3>Address: {office.Address}</h3>
    </div>
);
}

export default App;
