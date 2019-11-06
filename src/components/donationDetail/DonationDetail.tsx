import React, { useState } from 'react';
import './DonationDetail.css';
import { List, ListItem, ListItemGraphic, ListItemText, ListItemPrimaryText, ListItemSecondaryText } from '@rmwc/list';
import { DonationIntention } from '../../models/DonationIntention';
import { DonationIntentionService } from '../../services/DonationIntentionService';


const DonationDetail: React.FC = () => {
  const [donationIntentions, setDonationIntentions] = useState<DonationIntention[]>([]);

  async function fetchAllDonationIntetions(): Promise<void> {
    const donationIntentions = await DonationIntentionService.getAllDonationIntentions();
    setDonationIntentions(donationIntentions);
  }

  return (
    <div>
      <List twoLine>
        { donationIntentions.map(donationIntention =>
            <ListItem>
              <ListItemGraphic icon="" />
              <ListItemText>
                  <ListItemPrimaryText>Giver's: { donationIntention.giver ? donationIntention.giver.name : "" }</ListItemPrimaryText>
                  <ListItemSecondaryText>Giver's e-mail: { donationIntention.giver.email ? donationIntention.giver.email : "" }</ListItemSecondaryText>
                  <ListItemSecondaryText>Giver's phone: { donationIntention.giver.phone ? donationIntention.giver.phone : "" }</ListItemSecondaryText>
                  <ListItemPrimaryText>Donation description: { donationIntention.description ? donationIntention.description : "" }</ListItemPrimaryText>
                  <ListItemSecondaryText>{ new Date (donationIntention.collectDate).toDateString() }</ListItemSecondaryText>
                  <ListItemSecondaryText>Giver CPF: { donationIntention.giver.cpf }</ListItemSecondaryText>
              </ListItemText>
            </ListItem>
        )}
      </List>
    </div>
  );
}

export default DonationDetail;
