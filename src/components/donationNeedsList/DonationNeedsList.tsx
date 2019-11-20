import React, { useState, useEffect } from 'react';
import { DonationNeed } from '../../models/DonationNeed';
import { DonationNeedService } from '../../services/DonationNeedService';
import { List, ListItemAvatar, Avatar, ListItemText, ListItem, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const DonationNeedsList: React.FC<RouteComponentProps> = (props, context) => {
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

  const redirectToDonationNeedEdition = (donationNeedId: string): any => {
    const { history } = props;
    if(history) {
      history.push(`/donationNeedEdition/${donationNeedId}`);
    }
  }

  useEffect(() => {
    fetchAllDonationNeeds();
  }, [ ]);

  return (
    <div>
      <List>
        { donationNeeds.map(donationNeed =>
          <ListItem button divider>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={ donationNeed.donationItem ? donationNeed.donationItem.itemName : "" }
              secondary={ buildItemQuantityText(donationNeed) }
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => { redirectToDonationNeedEdition(donationNeed._id)} }>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>,
        )}
      </List>
    </div>
  );
}

export default withRouter(DonationNeedsList);
