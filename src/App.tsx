import React from 'react';
import Header from './components/header/Header';
import { Route } from 'react-router';
import Home from './components/pages/Home/Home';
import Donations from './components/pages/Donations/Donations';
import { BrowserRouter } from 'react-router-dom';
import DonationIntentionForm from './components/pages/DonationIntentions/DonationIntentionsForm';
import DonationIntentions from './components/pages/DonationIntentions/DonationIntentions';

export interface Props {
  pageTitle: string
}

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Route exact path="/" title="Teste" component={Home}/>
        <Route path="/donations" component={Donations} />
        <Route path="/donationIntentionCreation" component={DonationIntentionForm} />
        <Route path="/donationIntention" component={DonationIntentions} />
      </div>
    </BrowserRouter>
  );
}

export default App;
