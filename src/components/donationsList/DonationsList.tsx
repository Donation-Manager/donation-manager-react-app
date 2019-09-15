import '@material/list/dist/mdc.list.css';
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemGraphic, ListItemText, ListItemPrimaryText, ListItemSecondaryText, ListItemMeta } from '@rmwc/list';
import { Donation } from '../../models/Donation';
import { DonationService } from '../../services/DonationService';

const DonationsList: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([]);

  async function fetchAllDonations(): Promise<void> {
    const donations = await DonationService.getAllDonations();
    setDonations(donations);
  }

  useEffect(() => {
    fetchAllDonations();
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
