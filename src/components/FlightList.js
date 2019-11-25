
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

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

  const classes = useStyles();

  return (
    <Container className='flightTableContainer' component="main">
      <Table className='flightTable' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell} align="right">Ticket Id</TableCell>
            <TableCell className={classes.tableCell} align="right">Name</TableCell>
            <TableCell className={classes.tableCell} align="right">Flight Id</TableCell>
            <TableCell className={classes.tableCell} align="right">Cost</TableCell>
            <TableCell className={classes.tableCell} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell  className={classes.tableCell} component="th" scope="row">
                {row.ticketId}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">{row.userLastName.toString() + " " + row.userFirstName.toString()}</TableCell>
              <TableCell className={classes.tableCell} align="right">{row.flightId}</TableCell>
              <TableCell className={classes.tableCell} align="right">{row.cost}</TableCell>
              <TableCell className={classes.tableCell} align="right">
                <Button variant="contained" color="secondary">
                    Cancel Ticket
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

// export default class FlightList extends React.Component{

//     createTicketRow() {
//         let buttonStyle = {
//             padding: '5px',
//         };
//         return (
//             <tr>
//                 <td> 1 </td>
//                 <td> 1 </td>
//                 <td> 1 </td>
//                 <td> 79.50 </td>
//                 <view style={buttonStyle}><button>Button</button></view>
//             </tr>
//         );
//     }
//     render() {
//         let content = '';

//         console.log("Pending...");
//         content = (
//             < table className="table" >
//                 <thead>
//                     <tr>
//                         <th> Ticket Number </th>
//                         <th> User ID </th>
//                         <th> Flight ID </th>
//                         <th> Cost </th>
//                     </tr>
//                 </thead>
//                 <tbody> {this.createTicketRow} </tbody>
//             </table>
//         );
    
//         return (
//             <div>
//                 <h1> Tickets </h1> {content}
//             </div>
//         );
//     }
// }