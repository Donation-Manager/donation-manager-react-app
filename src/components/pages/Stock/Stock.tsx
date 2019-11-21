import React from 'react';
import { RouteComponentProps, withRouter, Route } from 'react-router';
import StockList from '../../stockList/StockList';

const Stock: React.FC<RouteComponentProps> = (props, context) => {

  return (
    <div>
      <StockList />
    </div>
  );
}

export default withRouter(Stock);
