import '@material/list/dist/mdc.list.css';
import React, { useState, useEffect } from 'react';

import "./DonationIntentionsList.css"
import { List, ListItem, ListItemGraphic, ListItemText, ListItemPrimaryText, ListItemSecondaryText, ListItemMeta } from '@rmwc/list';
import { DonationIntention } from '../../models/DonationIntention';
import { DonationIntentionService } from '../../services/DonationIntentionService';
import { Link } from 'react-router-dom';

const DonationIntentionsList: React.FC = () => {
  const [donationIntentions, setDonationIntentions] = useState<DonationIntention[]>([]);

  console.log(donationIntentions);
  async function fetchAllDonationIntetions(): Promise<void> {
    const donationIntentions = await DonationIntentionService.getAllDonationIntentions();
    setDonationIntentions(donationIntentions);
  }

  useEffect(() => {
    fetchAllDonationIntetions();
  }, []);

  return (
    <List twoLine>
      { donationIntentions.map(donationIntention =>
        <Link className="DonationIntentionList-Link" to={`/donationIntentions/donation${donationIntention.giver._id}`}>
          <ListItem>
            <ListItemGraphic icon="" />
            <ListItemText>
                <ListItemPrimaryText>Giver: { donationIntention.giver ? donationIntention.giver.name : "" }</ListItemPrimaryText>
                <ListItemPrimaryText>{ donationIntention.description }</ListItemPrimaryText>
                <ListItemSecondaryText>{ new Date (donationIntention.collectDate).toDateString() }</ListItemSecondaryText>
            </ListItemText>
            <ListItemMeta icon="">Details</ListItemMeta>
          </ListItem>
        </Link>
      )}
    </List>
  );
}

export default DonationIntentionsList;
