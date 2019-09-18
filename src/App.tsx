import React from 'react';
import DonationsList from './components/donationsList/DonationsList';
import Header from './components/header/Header';
import { Route } from 'react-router';
import Home from './components/pages/Home';
import DonationIntention from './components/pages/DonationIntentions';
import Donations from './components/pages/Donations';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/donations" component={Donations} />
        <Route path="/donationIntention" component={DonationIntention} />
      </div>
    </BrowserRouter>
  );
}

export default App;
