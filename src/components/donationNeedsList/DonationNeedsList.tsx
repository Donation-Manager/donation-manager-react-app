import '@material/list/dist/mdc.list.css';
import React, { useState, useEffect } from 'react';

import "./DonationNeedsList.css"
import { List, ListItem, ListItemGraphic, ListItemText, ListItemPrimaryText, ListItemSecondaryText, ListItemMeta } from '@rmwc/list';
import { DonationNeed } from '../../models/DonationNeed';
import { DonationNeedService } from '../../services/DonationNeedService';
import { Link } from 'react-router-dom';
import { DonationItem } from '../../models/DonationItem';
import Button from '@material-ui/core/Button';

const DonationNeedsList: React.FC = () => {
  const [donationNeeds, setDonationNeeds] = useState<DonationNeed[]>([]);

  async function fetchAllDonationNeeds(): Promise<void> {
    const donationNeeds = await DonationNeedService.getAllDonationNeeds();
    setDonationNeeds(donationNeeds);
  }

  const buildItemQuantityText = (donationNeed: DonationNeed): string => {
    if (donationNeed.donationItem) {
      return `${donationNeed.itemQuantity} ${donationNeed.donationItem.itemUOM}`
    }
    return "";
  }

  useEffect(() => {
    fetchAllDonationNeeds();
  }, [ donationNeeds ]);

  return (
    <List twoLine>
      { donationNeeds.map(donationNeed =>
          <ListItem>
            <ListItemGraphic icon="" />
            <ListItemText>
                <ListItemPrimaryText>{ donationNeed.donationItem ? donationNeed.donationItem.itemName : "" }</ListItemPrimaryText>
                <ListItemSecondaryText>{ buildItemQuantityText(donationNeed) }</ListItemSecondaryText>
            </ListItemText>
            <ListItemMeta icon="">Data de crição: { new Date (donationNeed.dateCreationDate).toDateString() }</ListItemMeta>
            <ListItemMeta icon="">Details</ListItemMeta>
          </ListItem>
      )}
    </List>
  );
}

export default DonationNeedsList;
