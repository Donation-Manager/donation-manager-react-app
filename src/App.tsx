import React from 'react';
import './App.css';
import DonationsList from './components/donationsList/DonationsList';
import Header from './components/header/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <DonationsList />
    </div>
  );
}

export default App;
