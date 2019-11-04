import '@material/list/dist/mdc.list.css';
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemGraphic, ListItemText, ListItemPrimaryText, ListItemSecondaryText, ListItemMeta } from '@rmwc/list';
import { Donation } from '../../models/Donation';
import { DonationService } from '../../services/DonationService';
import { DonationIntention } from '../../models/DonationIntention';
import { DonationIntentionService } from '../../services/DonationIntentionService';

const DonationIntentionsList: React.FC = () => {
  const [donationIntentions, setDonationIntentions] = useState<DonationIntention[]>([]);

  async function fetchAllDonationIntetions(): Promise<void> {
    const donationIntentions = await DonationIntentionService.getAllDonationIntentions();
    setDonationIntentions(donationIntentions);
  }

  useEffect(() => {
    fetchAllDonationIntetions();
  }, [ donationIntentions ]);

  return (
    <List twoLine>
      { donationIntentions.map(donationIntention =>
        <ListItem>
          <ListItemGraphic icon="" />
          <ListItemText>
              <ListItemPrimaryText>Giver: { donationIntention.giver.name }</ListItemPrimaryText>
              <ListItemPrimaryText>{ donationIntention.description }</ListItemPrimaryText>
              <ListItemSecondaryText>{ new Date (donationIntention.collectDate).toDateString() }</ListItemSecondaryText>
          </ListItemText>
          <ListItemMeta icon="">Details</ListItemMeta>
        </ListItem>
      )}
    </List>
  );
}

export default DonationIntentionsList;
