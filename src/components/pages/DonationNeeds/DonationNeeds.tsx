import React from 'react';
import DonationNeedsList from '../../donationNeedsList/DonationNeedsList';
import { RouteComponentProps, withRouter, Route } from 'react-router';

const DonationNeeds: React.FC<RouteComponentProps> = (props, context) => {

  return (
    <div>
      <DonationNeedsList />
    </div>
  );
}

export default withRouter(DonationNeeds);
