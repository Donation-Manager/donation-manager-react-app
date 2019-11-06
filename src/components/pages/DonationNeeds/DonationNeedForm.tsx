import React, { FormEvent, useState, InputHTMLAttributes } from 'react';
import '@material/form-field/dist/mdc.form-field.css';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { DonationNeedMessage } from '../../../messages/DonationNeedMessage';
import { DonationNeedService } from '../../../services/DonationNeedService';
import { ManagerService } from '../../../services/ManagerService';
import { TextField, FormControl, makeStyles, Button, Input, Icon, Grid, Typography } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const DonationIntentionForm: React.FC<RouteComponentProps> = (props, context) => {

  const inputItemName = React.createRef() as React.RefObject<HTMLInputElement>;
  const inputItemDescription = React.createRef() as React.RefObject<HTMLInputElement>;
  const inputItemQuantity = React.createRef() as React.RefObject<HTMLInputElement>;
  const inputItemUOM = React.createRef() as React.RefObject<HTMLInputElement>;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const dateCreationDate = new Date();
    const loggedManager = await ManagerService.getLoggedManager();

    const itemName = inputItemName.current ? inputItemName.current.value : "";
    const itemDescription = inputItemDescription.current ? inputItemDescription.current.value : "";
    const itemUOM = inputItemUOM.current ? inputItemUOM.current.value : "";
    const itemQuantity = inputItemQuantity.current ? inputItemQuantity.current.valueAsNumber : 0;

    const donationNeed = {
      dateCreationDate,
      donationItem: {
        itemName,
        itemDescription,
        itemUOM
      },
      itemQuantity,
      loggedManager
    }

    DonationNeedService.createDonationNeed(donationNeed).then(() => {
      alert(DonationNeedMessage.CreatedSuccessfully);
      redirectToDonationNeeds();
    }).catch(err => {
      console.log(err);
    });
  }

  const redirectToDonationNeeds = () => {
    const { history } = props;
    if(history) {
      history.push("/donationsNeeds");
    }
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '60vh'}}
    >
      <Typography variant="h5" component="h2">
        Cadastro de Necessidade de Doação
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            id="idItemNameTextField"
            label="Nome do Item"
            defaultValue=""
            helperText="Helper text"
            margin="normal"
            inputRef={inputItemName}
          />
          <TextField
            id="idItemDescriptionTextField"
            label="Descrição do Item"
            defaultValue=""
            helperText="Helper text"
            margin="normal"
            inputRef={inputItemDescription}
          />
          <TextField
            id="idItemQuantityTextField"
            label="Quantidade"
            defaultValue=""
            helperText="Helper text"
            margin="normal"
            type="number"
            inputRef={inputItemQuantity}
          />
          <TextField
            id="idItemUOMTextField"
            label="Unidade"
            defaultValue=""
            helperText="Helper text"
            margin="normal"
            inputRef={inputItemUOM}
          />
          <Button  id="idSubmit"
            color="primary"
            variant="contained"
            type="submit"
            endIcon={<CloudUploadIcon/>}>
            Publicar Necessidade
          </Button>
        </FormControl>
      </form>
    </Grid>
  );
}

export default withRouter(DonationIntentionForm);
