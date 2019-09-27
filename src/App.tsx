import React from 'react';
import Header from './components/header/Header';
import { Route } from 'react-router';
import Home from './components/pages/Home/Home';
import DonationIntention from './components/pages/DonationIntentions/DonationIntentions';
import Donations from './components/pages/Donations/Donations';
import { BrowserRouter } from 'react-router-dom';

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
        <Route path="/donationIntention" component={DonationIntention} />
      </div>
    </BrowserRouter>
  );
}

export default App;
