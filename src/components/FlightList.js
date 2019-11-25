
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import MUIDataTable from "mui-datatables";

const useStyles = makeStyles({
    myRoot: {
      width: '100%',
      overflowX: 'auto',
    },
    tableCell: {
      color: '#EEEEEE',
    },
});
  
function createData(ticketId, userLastName, userFirstName, flightId, cost) {
  return { ticketId, userLastName, userFirstName, flightId, cost};
}

const rows = [
  createData(1, "James", "Jimothy", 3, 79.50),
  createData(2, "Bichael", "Tire", 1, 66.50),
  createData(3, "Gertrude", "Rude", 1, 75.50),
  createData(4, "Nicc", "Compastable", 3, 89.50),
  createData(5, "Today", "Eco", 1, 69.50),
];


export default function SimpleTable() {

  const columns = ['Ticket ID', 'Last Name', 'First Name', 'Flight Id', 'Cost'];

  //const classes = useStyles();

  const options = {
    filterType: 'checkbox',
  };

  return (
    <Container className='flightTableContainer' component="main">
      <MUIDataTable
        title={"Booking"}
        data={...rows}
        column={columns}
        options={options}
      />
    </Container>
  );
}
