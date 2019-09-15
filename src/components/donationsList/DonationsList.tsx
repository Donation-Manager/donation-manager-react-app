import React, { useState, useEffect } from 'react';
import { Button } from '@rmwc/button';
import { List, ListItem, ListItemGraphic, ListItemText, ListItemPrimaryText, ListItemSecondaryText, ListItemMeta } from '@rmwc/list';
import '@material/list/dist/mdc.list.css';
import Axios from 'axios';
import { Donation } from '../../models/Donation';

const DonationsList: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    Axios.get(`http://localhost:4000/donations`)
    .then(res => {
      const donations = res.data;
      setDonations(donations);
    });
  }, [ donations ]);

  return (
    <List twoLine>
      { donations.map(donation =>
        <ListItem>
          <ListItemGraphic icon="" />
          <ListItemText>
              <ListItemPrimaryText>{ donation.description }</ListItemPrimaryText>
              <ListItemSecondaryText>{ new Date (donation.date).toDateString() }</ListItemSecondaryText>
          </ListItemText>
          <ListItemMeta icon="">Details</ListItemMeta>
        </ListItem>
      )}
    </List>
  );
}

export default DonationsList;
