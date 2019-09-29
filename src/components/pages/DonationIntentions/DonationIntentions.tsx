import React, { FormEvent } from 'react';
import './DonationIntentions.css';

import { FormField } from '@rmwc/formfield';
import '@material/form-field/dist/mdc.form-field.css';


const DonationIntention: React.FC = () => {

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);

    let formInput: any = event.currentTarget.elements

    window.history.back();
  }

  function mountPostData(data: any): object {
    let sendInfo: any = {}

    for (const formObject of data) {
      if (formObject.type !== "submit") {
        sendInfo[formObject.id] = formObject.value;
      }
    }

    return sendInfo;
  }

  return (
    <div className="DonationIntentions">
      <span>Donation Intention</span>
      <form onSubmit={handleSubmit} className="DonationIntentions-Form">
        <FormField className="DonationIntentions-FormField">
          <label htmlFor="idCollectFromGiver">Coletar no endereço do doador</label>
          <input type="checkbox" id="idCollectFromGiver" />
        </FormField>
        <br />
        <FormField className="DonationIntentions-FormField">
          <label htmlFor="idCollectDate">Data da coleta</label>
          <input type="date" id="idCollectDate" />
        </FormField>
        <br />
        <FormField className="DonationIntentions-FormField">
          <label htmlFor="idDescription">Descrição</label>
          <input type="text" id="idDescription" />
        </FormField>
        <br />
        <FormField className="DonationIntentions-FormField">
          <input type="submit" id="idSubmit"/>
        </FormField>
      </form>
    </div>
  );
}

export default DonationIntention;
