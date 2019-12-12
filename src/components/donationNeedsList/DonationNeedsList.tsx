import React, { useState, useEffect } from 'react';
import { DonationNeed } from '../../models/DonationNeed';
import { DonationNeedService } from '../../services/DonationNeedService';
import { List, ListItemAvatar, Avatar, ListItemText, ListItem, ListItemSecondaryAction, IconButton, Button, makeStyles, Fab, Tooltip } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2)
  },
  input: {
    display: 'none'
  },
}));

const DonationNeedsList: React.FC<RouteComponentProps> = (props, context) => {
  const classes = useStyles();

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


  const redirectToDonationNeedCreation = (): void => {
    const { history } = props;
    if(history) {
      history.push(`/donationNeedCreation`);
    }
  }


  const deleteDonationNeed = async (donationNeedId: string): Promise<void> => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Tem certeza que deseja deletar a necessidade de doação?')) {
      await DonationNeedService.deleteDonationNeedById(donationNeedId);
      fetchAllDonationNeeds();
    }
  }

  useEffect(() => {
    fetchAllDonationNeeds();
  }, [ ]);

  return (
    <div>
      <Tooltip title="Add">
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={redirectToDonationNeedCreation}>
        <AddIcon/>
      </Fab>
      </Tooltip>
      <List>
        { donationNeeds.map(donationNeed =>
          <ListItem button divider component={Link} to={{ pathname: '/donationIntentionCreation', state: { donation: donationNeed}} }>
            <ListItemAvatar>
            <Tooltip title="Donation">
                <Avatar>
                  <EmojiPeopleIcon />
                </Avatar>
              </Tooltip>
            </ListItemAvatar>
            <ListItemText
              primary={ donationNeed.donationItem ? donationNeed.donationItem.itemName : "" }
              secondary={ buildItemQuantityText(donationNeed) }
            />
            <ListItemSecondaryAction>
              <Tooltip title="Edit">
                <IconButton edge="end" aria-label="edit" onClick={() => { redirectToDonationNeedEdition(donationNeed._id)} }>
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton edge="end" aria-label="delete" onClick={() => { deleteDonationNeed(donationNeed._id)} }>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>,
        )}
      </List>
    </div>
  );
}

export default withRouter(DonationNeedsList);
