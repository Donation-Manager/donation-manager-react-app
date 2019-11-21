import React, { useState, useEffect, forwardRef } from 'react';
import { DonationNeed } from '../../models/DonationNeed';
import { DonationNeedService } from '../../services/DonationNeedService';
import { List, ListItemAvatar, Avatar, ListItemText, ListItem, ListItemSecondaryAction, IconButton, Button, makeStyles, Fab } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable, { Column, Icons } from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { DonationNeedMessage } from '../../messages/DonationNeedMessage';

const tableIcons : Icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

interface TableState {
  columns: Array<Column<DonationNeed>>;
  data: Array<DonationNeed>;
}

const StockList: React.FC<RouteComponentProps> = (props, context) => {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Item', field: 'donationItem.itemName' },
      { title: 'Quantidade', field: 'itemQuantity', type: 'numeric' },
      { title: 'Unidade de Medida', field: 'donationItem.itemUOM', editable: 'never' },
      { title: 'Descrição', field: 'donationItem.itemDescription', editable: 'never' }
    ],
    data: [],
  });

  async function fetchAllDonationNeeds(): Promise<void> {
    const donationNeeds = await DonationNeedService.getAllDonationNeeds();
    setState((prevState) => {
      const data = donationNeeds;
      return { ...prevState, data };
    });
  }


  const deleteDonationNeed = async (donationNeedId: string): Promise<void> => {
    // eslint-disable-next-line no-restricted-globals
    await DonationNeedService.deleteDonationNeedById(donationNeedId);
    return fetchAllDonationNeeds();
  }

  const saveDonationNeed = async (donationNeed: any): Promise<void> => {
    if (donationNeed.donationItem) {
      donationNeed.donationItem = donationNeed.donationItem._id
    }
    const newDonationNeed = await DonationNeedService.createDonationNeed(donationNeed);
    if (newDonationNeed) {
      alert(DonationNeedMessage.CreatedSuccessfully);
    }
    fetchAllDonationNeeds();
  }

  useEffect(() => {
    fetchAllDonationNeeds();
  }, [ ]);

  return (
    <div>
      <MaterialTable
      icons={tableIcons}
      title="Estoque"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData => {
          return saveDonationNeed(newData);
        },
        onRowUpdate: newData => {
          return saveDonationNeed(newData);
        },
        onRowDelete: oldData => {
          return deleteDonationNeed(oldData._id);
        },
      }}
    />
    </div>
  );
}

export default withRouter(StockList);
