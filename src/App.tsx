import React, { useState, createContext } from 'react';
import Header from './components/header/Header';
import Home from './components/pages/Home/Home';
import Donations from './components/pages/Donations/Donations';
import DonationIntentionForm from './components/pages/DonationIntentions/DonationIntentionsForm';
import DonationIntentions from './components/pages/DonationIntentions/DonationIntentions';
import DonationNeeds from './components/pages/DonationNeeds/DonationNeeds';
import DonationNeedForm from './components/pages/DonationNeeds/DonationNeedForm';
import DonationDetail from './components/donationDetail/DonationDetail';
import { BrowserRouter, Route } from 'react-router-dom';
import Stock from './components/pages/Stock/Stock';

export interface Props {
  pageTitle: string
}

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" title="Teste" component={Home}/>
        <Route path="/donations" component={Donations} />
        <Route path="/donationIntentionCreation" component={DonationIntentionForm as any} />
        <Route path="/donationIntentions" component={DonationIntentions} />
        <Route path="/donationNeedCreation" component={DonationNeedForm as any} />
        <Route path="/donationNeedEdition/:id" component={DonationNeedForm as any} />
        <Route path="/donationIntentions/donation{id}" component={DonationDetail} />
        <Route path="/donationsNeeds" component={DonationNeeds as any} />
        <Route path="/stock" component={Stock as any} />
      </div>
    </BrowserRouter>
  );
}

export default App;
