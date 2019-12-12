import '@material/list/dist/mdc.list.css';
import React, { useState, useEffect, forwardRef, ReactElement } from 'react';

import { StockItem } from '../../models/StockItem';
import { StockItemService } from '../../services/StockItemService';

import "./DonationIntentionsList.css"
import { List, ListItem, ListItemGraphic, ListItemText, ListItemPrimaryText, ListItemSecondaryText, ListItemMeta } from '@rmwc/list';
import { DonationIntention } from '../../models/DonationIntention';
import { DonationIntentionService } from '../../services/DonationIntentionService';
import { DonationItemService } from '../../services/DonationItemService';
import { Link } from 'react-router-dom';
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
import { Button } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


const tableIcons : Icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <AddIcon {...props} ref={ref} />),
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
  columns: Array<Column<DonationIntention>>;
  data: Array<any>;
}

const DonationIntentionsList: React.FC = () => {
  const [donationIntentions, setDonationIntentions] = useState<DonationIntention[]>([]);
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Coletar no endereço do doador', field: 'collectFromGiver', type: 'boolean' },
      { title: 'Endereço', field: 'address' },
      { title: 'Data de coleta', field: 'collectDate', type: 'date'},
      { title: 'Horário de coleta', field: 'collectHour'},
      { title: 'Descrição', field: 'description' },
      { title: 'Doador', field: 'giver' },
      { title: 'Item', field: 'item' },
      { title: 'Quantidade', field: 'quantity' },
      { title: 'Unidade', field: 'itemUom' }
    ],
    data: [ ],
  });

  function formatDonationCollectHour(hour: any): string {
    if (hour) {
      const date = new Date(hour)
      let hours = date.getHours();
      let minutes: any = date.getMinutes();
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      let strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }
    return "";
  }

  async function fetchAllDonationIntetions(): Promise<void> {
    const donationIntentions = await DonationIntentionService.getAllDonationIntentions();
    if (donationIntentions == null) {
      return Promise.resolve();
    }
    const itens = donationIntentions.map(async (intention) => {
      const item = await DonationItemService.getDonationItemById(intention.donationNeed != undefined ? intention.donationNeed.donationItem : undefined);
      return item;
    });
    const resultado = await Promise.all(itens);
    donationIntentions.forEach((each, index) => {
      if (each.donationNeed != undefined) {
        each.donationNeed.donationItem = resultado[index];
      }
    });
    setState((prevState) => {
      const data = donationIntentions.map((donationIntention) => {
        return {
          _id: donationIntention._id,
          collectFromGiver: donationIntention.collectFromGiver,
          collectDate: new Date(donationIntention.collectDate),
          collectHour: formatDonationCollectHour(donationIntention.collectHour),
          description: donationIntention.description,
          giver: donationIntention.giver.name,
          item: donationIntention.donationNeed ?
            donationIntention.donationNeed.donationItem.itemName : undefined,
          quantity: donationIntention.quantity,
          itemUom: donationIntention.donationNeed != undefined ?
            donationIntention.donationNeed.donationItem.itemUOM : undefined,
          address: donationIntention.collectFromGiver ? donationIntention.street + ', ' + donationIntention.houseNumber + ', ' + donationIntention.city : ''
        }
      });
      return { ...prevState, data };
    });
  }

  useEffect(() => {
    fetchAllDonationIntetions();
  }, []);

  return (
    <div className="DonationIntentionsList-div">
      <MaterialTable
      options={{
        paging: false
      }}
      actions={[
        {
          icon: ThumbUpIcon as any,
          tooltip: 'Aceitar Intenção',
          onClick: async (event, rowData) => {
            // eslint-disable-next-line no-restricted-globals
            if (confirm('Tem certeza que deseja aprovar a doação?')) {
              try {
                await DonationIntentionService.acceptIntention(rowData);
                alert("Doação aprovada com sucesso.");
              } catch(e) {
                alert("Erro ao aprovar a doação.");
              }
              fetchAllDonationIntetions();
            }
          }
        },
        {
          icon: ThumbDownIcon as any,
          tooltip: 'Rejeitar Intenção',
          onClick: async (event, rowData) => {
            // eslint-disable-next-line no-restricted-globals
            const reprovedReason = prompt('Por favor, insira o motivo de rejeição da doação');
            console.log(reprovedReason);
            if (reprovedReason) {
              try {
                await DonationIntentionService.rejectIntention(rowData, reprovedReason);
                alert("Doação rejeitada com sucesso.");
              } catch(e) {
                alert("Erro ao rejeitar a doação.");
              }
              fetchAllDonationIntetions();
            }
          }
        }
      ]}
      localization={{
        pagination: {
            labelDisplayedRows: '{from}-{to} of {count}'
        },
        toolbar: {
            searchPlaceholder: "Buscar"
        },
        header: {
            actions: 'Ações'
        },
        body: {
            emptyDataSourceMessage: 'Nenhum dado para exibir.',
        }
      }}
      icons={tableIcons}
      title="Intenções de doação"
      columns={state.columns}
      data={state.data}
    />
    </div>
  );
}

export default DonationIntentionsList;
