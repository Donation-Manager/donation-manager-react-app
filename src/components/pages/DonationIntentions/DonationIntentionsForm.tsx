import React, { FormEvent, useState } from 'react';
import './DonationIntentions.css';
import { DonationIntentionService } from '../../../services/DonationIntentionService';
import { DonationIntentionMessage } from '../../../messages/DonationIntentionMessages';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { UserService } from '../../../services/UserService';
import { GiverService } from '../../../services/GiverService';
import { FormControl, InputLabel, FormControlLabel, Checkbox, TextField, Button, Typography, Grid, FormGroup, Divider, Box } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const DonationIntentionForm: React.FC<RouteComponentProps> = (props, context) => {

  const [collectFromGiver, setCollectFromGiver] = useState<boolean>(false);
  const [collectDate, setCollectDate] = useState<string>(new Date().toDateString());
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>();
  const [street, setStreet] = useState<string>("");
  const [houseNumber, setHouseNumber] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const donationNeed = props.location.state.donation;
  console.log(donationNeed);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const dateCollectDate = new Date(collectDate);
    const loggedGiver = await GiverService.getLoggedGiver();

    const data = {
      collectFromGiver,
      collectDate,
      description,
      quantity,
      street,
      houseNumber,
      city,
      giver: loggedGiver,
      donationNeed: donationNeed
    }

    DonationIntentionService.createDonationIntention(data).then(() => {
      alert(DonationIntentionMessage.CreatedSuccessfully);
      redirectToDonationIntentions();
    }).catch(err => {
      console.log(err);
    });
  }

  const redirectToDonationIntentions = () => {
    const { history } = props;
    if(history) {
      history.push("/donationIntentions");
    }
  }

  return (
    <div className="DonationIntentions">
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '60vh'}}
      >
      <Typography variant="h5" component="h2">
        Cadastro de Intenção de Doação
      </Typography>
      <br/>
      <form onSubmit={handleSubmit} className="DonationIntentions-Form">
        <FormControl>
          <br/>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            label="Data da Coleta"
            clearable
            value={collectDate}
            placeholder="10/10/2018"
            onChange={date => { if(date) {setCollectDate((date as Date).toDateString())} }}
            minDate={new Date()}
            format="dd/MM/yyyy"
          />
          </MuiPickersUtilsProvider>
          <TextField
            id="idQuantity"
            label="Quantidade"
            defaultValue="0"
            value={quantity}
            margin="normal"
            type="number"
            onChange={e => setQuantity(Number(e.target.value))}
          />
          <TextField
            id="idDescription"
            label="Descrição"
            defaultValue=""
            value={description}
            margin="normal"
            type="text"
            onChange={e => setDescription(e.target.value)}
          />
          <br/>
          <FormControlLabel
            control={
              <Checkbox color="primary"
                checked={collectFromGiver}
                onChange={e => setCollectFromGiver(Boolean(e.target.checked))}
              />
            }
            value="collectFromGiver"
            label="Coletar no endereço do doador"
          />
          <br/>
          <Box visibility={ collectFromGiver ? 'visible' : 'hidden'}>
            <Typography variant="subtitle1">
              Endereço
            </Typography>
            <Divider />
            <TextField
              style={{margin: 10}}
              id="idDescription"
              label="Rua"
              defaultValue=""
              value={street}
              margin="normal"
              type="text"
              onChange={e => setStreet(e.target.value)}
            />
            <TextField
              style={{margin: 10}}
              id="idDescription"
              label="Número"
              defaultValue=""
              value={houseNumber}
              margin="normal"
              type="text"
              onChange={e => setHouseNumber(e.target.value)}
            />
            <TextField
              style={{margin: 10}}
              id="idDescription"
              label="Cidade"
              defaultValue=""
              value={city}
              margin="normal"
              type="text"
              onChange={e => setCity(e.target.value)}
            />
          </Box>
          <br/>
          <Button  id="idSubmit"
            color="primary"
            variant="contained"
            type="submit"
            endIcon={<CloudUploadIcon/>}>
            Publicar Intenção
          </Button>
        </FormControl>
      </form>
      </Grid>
    </div>
  );
}

export default withRouter(DonationIntentionForm);
