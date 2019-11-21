import React, { useState, useEffect, forwardRef } from 'react';
import { StockItem } from '../../models/StockItem';
import { StockItemService } from '../../services/StockItemService';
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
import { StockItemMessage } from '../../messages/StockItemMessage';

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
  columns: Array<Column<StockItem>>;
  data: Array<any>;
}

const StockList: React.FC<RouteComponentProps> = (props, context) => {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Item', field: 'itemName' },
      { title: 'Quantidade', field: 'itemQuantity', type: 'numeric', initialEditValue: 0 },
      { title: 'Unidade de Medida', field: 'itemUOM' },
      { title: 'Descrição', field: 'itemDescription' }
    ],
    data: [ ],
  });

  async function fetchAllStockItems(): Promise<void> {
    const stockItems = await StockItemService.getAllStockItems();
    setState((prevState) => {
      const data = stockItems.map((stockItem) => {
        return {
          stockItemId: stockItem._id,
          donationItemId: stockItem.donationItem._id,
          itemName: stockItem.donationItem.itemName,
          itemQuantity: stockItem.itemQuantity,
          itemUOM: stockItem.donationItem.itemUOM,
          itemDescription: stockItem.donationItem.itemDescription
        }
      });
      return { ...prevState, data };
    });
  }


  const deleteStockItem = async (stockItemId: string): Promise<void> => {
    // eslint-disable-next-line no-restricted-globals
    await StockItemService.deleteStockItemById(stockItemId);
    return fetchAllStockItems();
  }

  const saveStockItem = async (stockItem: any): Promise<void> => {

    if (stockItem) {
      stockItem = {
        _id: stockItem.stockItemId ? stockItem.stockItemId : undefined,
        itemQuantity: stockItem.itemQuantity,
        donationItem: {
          _id: stockItem.donationItemId ? stockItem.donationItemId : undefined,
          itemName: stockItem.itemName,
          itemUOM: stockItem.itemUOM,
          itemDescription: stockItem.itemDescription
        }
      }
    }

    const responseStockItem = await StockItemService.createStockItem(stockItem);
    if (responseStockItem && !stockItem._id) {
      alert(StockItemMessage.CreatedSuccessfully);
    } else if (stockItem._id) {
      alert(StockItemMessage.UpdatedSuccessfully);
    }
    fetchAllStockItems();
  }

  useEffect(() => {
    fetchAllStockItems();
  }, [ ]);

  return (
    <div>
      <MaterialTable
      options={{
        paging: false
      }}
      icons={tableIcons}
      title="Estoque"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData => {
          newData.donationItem = {}
          return saveStockItem(newData);
        },
        onRowUpdate: newData => {
          return saveStockItem(newData);
        },
        onRowDelete: oldData => {
          return deleteStockItem(oldData.stockItemId);
        },
      }}
    />
    </div>
  );
}

export default withRouter(StockList);
