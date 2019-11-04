import React, { FormEvent, useState } from 'react';
import './DonationIntentions.css';
import { FormField } from '@rmwc/formfield';
import '@material/form-field/dist/mdc.form-field.css';
import { DonationIntentionService } from '../../../services/DonationIntentionService';
import { DonationIntentionMessage } from '../../../messages/DonationIntentionMessages';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { UserService } from '../../../services/UserService';
import { GiverService } from '../../../services/GiverService';

interface FormDonationIntention {
  collectFromGiver: string,
  collectDate: string,
  description: string
}

const DonationIntentionForm: React.FC<RouteComponentProps> = (props, context) => {

  const [collectFromGiver, setCollectFromGiver] = useState<boolean>(false);
  const [collectDate, setCollectDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const dateCollectDate = new Date(collectDate);
    const loggedGiver = await GiverService.getLoggedGiver();

    const data = {
      collectFromGiver,
      dateCollectDate,
      description,
      giver: loggedGiver
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
      <span>Donation Intention</span>
      <form onSubmit={handleSubmit} className="DonationIntentions-Form">
        <FormField className="DonationIntentions-FormField">
          <label htmlFor="idCollectFromGiver">Coletar no endereço do doador</label>
          <input type="checkbox" id="idCollectFromGiver" checked={collectFromGiver} onChange={e => setCollectFromGiver(Boolean(e.target.value))}/>
        </FormField>
        <br />
        <FormField className="DonationIntentions-FormField">
          <label htmlFor="idCollectDate">Data da coleta</label>
          <input type="date" id="idCollectDate" value={collectDate} onChange={e => setCollectDate(e.target.value)}/>
        </FormField>
        <br />
        <FormField className="DonationIntentions-FormField">
          <label htmlFor="idDescription">Descrição</label>
          <input type="text" id="idDescription" value={description} onChange={e => setDescription(e.target.value)}/>
        </FormField>
        <br />
        <FormField className="DonationIntentions-FormField">
          <input type="submit" id="idSubmit"/>
        </FormField>
      </form>
    </div>
  );
}

export default withRouter(DonationIntentionForm);
