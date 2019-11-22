
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles({
//     root: {
//       width: '100%',
//       overflowX: 'auto',
//     },
//     table: {
//       minWidth: 650,
//       backgroundColor: '#3a4750',
//       color: '#EEEEEE',
//       .MuiTableCell-head
//     },
// });
  
  function createData(ticketId, userId, flightId, cost) {
    return { ticketId, userId, flightId, cost};
  }
  
  const rows = [
    createData(1, 2, 3, 79.50),
    createData(2, 2, 1, 66.50),
    createData(1, 2, 1, 75.50),
    createData(1, 3, 3, 89.50),
    createData(3, 2, 1, 69.50),
  ];
  
  export default function SimpleTable() {
  
    return (
      <Paper className='flightTable'>
        <Table className='flightTable' aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Ticket Id</TableCell>
              <TableCell align="right">User Id</TableCell>
              <TableCell align="right">Flight Id</TableCell>
              <TableCell align="right">Cost</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.ticketId}
                </TableCell>
                <TableCell align="right">{row.userId}</TableCell>
                <TableCell align="right">{row.flightId}</TableCell>
                <TableCell align="right">{row.cost}</TableCell>
                <TableCell align="right">
                <Button variant="contained" color="secondary">
                    Delete
                </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
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