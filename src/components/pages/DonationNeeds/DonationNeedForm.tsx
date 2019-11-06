import React, { FormEvent, useState, InputHTMLAttributes } from 'react';
import { FormField } from '@rmwc/formfield';
import '@material/form-field/dist/mdc.form-field.css';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { DonationNeedMessage } from '../../../messages/DonationNeedMessage';
import { DonationNeedService } from '../../../services/DonationNeedService';
import { ManagerService } from '../../../services/ManagerService';

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
      history.push("/donationNeeds");
    }
  }

  return (
    <div className="DonationNeeds">
      <span>Necessidade de Doação</span>
      <form onSubmit={handleSubmit} className="DonationNeeds-Form">
        <FormField className="DonationNeeds-FormField">
          <label htmlFor="idItemNameLabel">Nome do item</label>
          <input type="text" id="idItemName" ref={inputItemName}/>
        </FormField>
        <br />
        <FormField className="DonationNeeds-FormField">
          <label htmlFor="idItemDescriptionLabel">Descrição do item</label>
          <input type="text" id="idItemDescription" ref={inputItemDescription}/>
        </FormField>
        <br />
        <FormField className="DonationNeeds-FormField">
          <label htmlFor="idItemQuantityLabel">Quantidade</label>
          <input type="number" id="idItemQuantity" ref={inputItemQuantity}/>
        </FormField>
        <br />
        <FormField className="DonationNeeds-FormField">
          <label htmlFor="idItemUOMLabel">Unidade</label>
          <input type="text" id="idItemUOM" ref={inputItemUOM}/>
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
