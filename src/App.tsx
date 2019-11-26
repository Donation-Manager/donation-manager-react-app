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
import { createMuiTheme, MuiThemeProvider, makeStyles } from '@material-ui/core';
import backgroundImage from './images/background.jpg'

export interface Props {
  pageTitle: string
}

// use default theme
// const theme = createMuiTheme();

// Or Create your Own theme:
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF'
    },
    secondary: {
      main: '#7EBD69'
    },
    text:{
      primary: '#444',
      secondary: '#777'
    }
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: 0,
    height:'100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '100%'
  }
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
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
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
