import React, { FormEvent, useState } from 'react';
import { FormField } from '@rmwc/formfield';
import '@material/form-field/dist/mdc.form-field.css';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { DonationNeedMessage } from '../../../messages/DonationNeedMessage';
import { DonationNeedService } from '../../../services/DonationNeedService';

const DonationIntentionForm: React.FC<RouteComponentProps> = (props, context) => {

  const [itemName, setItemName] = useState<string>("");
  const [itemDescription, setItemDescription] = useState<string>("");
  const [itemQuantity, setItemQuantity] = useState<string>();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const dateCreationDate = new Date();
    // const loggedManager = await ManagerService.getLoggedManager();

    const data = {
      dateCreationDate,
      itemName,
      itemDescription,
      itemQuantity
      // loggedManager
    }

    DonationNeedService.createDonationNeed(data).then(() => {
      alert(DonationNeedMessage.CreatedSuccessfully);
      redirectToDonationNeeds();
    }).catch(err => {
      console.log(err);
    });
  }

  const redirectToDonationNeeds = () => {
    const { history } = props;
    if(history) {
      history.push("/donationNeeds");
    }
  }

  return (
    <div className="DonationNeeds">
      <span>Necessidade de Doação</span>
      <form onSubmit={handleSubmit} className="DonationNeeds-Form">
        <FormField className="DonationNeeds-FormField">
          <label htmlFor="idItemNameLabel">Nome do item</label>
          <input type="text" id="idItemName" value={itemName} onChange={e => setItemName(e.target.value)}/>
        </FormField>
        <br />
        <FormField className="DonationNeeds-FormField">
          <label htmlFor="idItemDescriptionLabel">Descrição do item</label>
          <input type="text" id="idItemDescription" value={itemDescription} onChange={e => setItemDescription(e.target.value)}/>
        </FormField>
        <br />
        <FormField className="DonationNeeds-FormField">
          <label htmlFor="idItemQuantityLabel">Quantidade</label>
          <input type="number" id="idItemQuantity" value={itemQuantity} onChange={e => setItemQuantity(e.target.value)}/>
        </FormField>
        <br />
        <FormField className="DonationNeeds-FormField">
          <input type="submit" id="idSubmit"/>
        </FormField>
      </form>
    </div>
  );
}

export default withRouter(DonationIntentionForm);
