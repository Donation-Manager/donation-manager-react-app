import React, { useEffect, FormEvent, SyntheticEvent } from 'react';
import { FormField } from '@rmwc/formfield';
import '@material/form-field/dist/mdc.form-field.css';


const DonationIntention: React.FC = () => {

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  }

  return (
    <div>
      <span>Donation Intention</span>
      <form onSubmit={handleSubmit}>
        <FormField>
          <label htmlFor="idCollectFromGiver">Coletar no endereço do doador</label>
          <input type="checkbox" id="idCollectFromGiver" />
        </FormField>
        <FormField>
          <label htmlFor="idCollectDate">Data da coleta</label>
          <input type="date" id="idCollectDate" />
        </FormField>
        <FormField>
          <label htmlFor="idDescription">Descrição</label>
          <input type="text" id="idDescription" />
        </FormField>
        <FormField>
          <input type="submit" id="idSubmit"/>
        </FormField>
      </form>
    </div>
  );
}

export default DonationIntention;
