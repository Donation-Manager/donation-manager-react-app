import React, { useState, createContext } from 'react';
import Header from './components/header/Header';
import Home from './components/pages/Home/Home';
import Donations from './components/pages/Donations/Donations';
import { BrowserRouter, Route } from 'react-router-dom';
import DonationIntentionForm from './components/pages/DonationIntentions/DonationIntentionsForm';
import DonationIntentions from './components/pages/DonationIntentions/DonationIntentions';
import DonationNeeds from './components/pages/DonationNeeds/DonationNeeds';
import DonationNeedForm from './components/pages/DonationNeeds/DonationNeedForm';
import DonationDetail from './components/donationDetail/DonationDetail';
import AppMenu from './components/menu/AppMenu';

export interface Props {
  pageTitle: string
}

const handleMenuClose = () => {

}

const handleMenuOpen = () => {
}

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header handleMenuOpen={handleMenuOpen}/>
        <AppMenu handleMenuClose={handleMenuClose}/>
        <Route exact path="/" title="Teste" component={Home}/>
        <Route path="/donations" component={Donations} />
        <Route path="/donationIntentionCreation" component={DonationIntentionForm as any} />
        <Route path="/donationIntentions" component={DonationIntentions} />
        <Route path="/donationNeedCreation" component={DonationNeedForm as any} />
        <Route path="/donationIntentions/donation{id}" component={DonationDetail} />
        <Route path="/donationsNeeds" component={DonationNeeds} />
      </div>
    </BrowserRouter>
  );
}

export default App;
