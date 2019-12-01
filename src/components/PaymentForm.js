// import React, {Component} from 'react';
// import {CardElement, injectStripe} from 'react-stripe-elements';

// class PaymentForm extends Component {
//   constructor(props) {
//     super(props);
//     this.submit = this.submit.bind(this);
//   }

//   async submit(ev) {
//     let {token} = await this.props.stripe.createToken({name: "Name"});
//     let response = await fetch("https://localhost:8090/charge", {
//       method: "POST",
//       headers: {"Content-Type": "text/plain"},
//       body: token.id
//     });
  
//     if (response.ok) console.log("Purchase Complete!")
//   }

//   render() {
//     return (
//       <div className="checkout">
//         <p>Would you like to complete the purchase?</p>
//         <CardElement />
//         <button onClick={this.submit}>Purchase</button>
//       </div>
//     );
//   }
// }

// export default injectStripe(PaymentForm);



// import React from 'react';
// import {TextField, Grid, MenuItem, Button, Select, InputLabel} from '@material-ui/core';


// const PaymentForm = (props) => {

//     const monthList = ['01','02','03','04','05','06','07','08','09','10','11','12'];
//     const yearList = ['2019','2020','2021','2022','2023','2024','2025','2026','2027'];

//     const [month, setMonth, year, setYear] = React.useState('');

//     const handleMonthChange = event => {
//         setMonth(event.target.value);
//     };
//     const handleYearChange = event => {
//         setYear(event.target.value);
//     };


//     return (
//         <Grid container id="PaymentForm" spacing={3}>
//             <Grid item xs={3}>
//                 <Button onClick={props.prevStep} className="formButtons">
//                     Prev
//                 </Button>
//             </Grid>

//             <Grid item xs ={6}/>

//             <Grid item xs={3}>
//                 <Button onClick={props.nextStep} className="formButtons">
//                     Submit
//                 </Button>
//             </Grid>
//             <Grid item xs={12}>
//                 <TextField
//                 required
//                 fullWidth
//                 id="nameOnCard"
//                 name="nameOnCard"
//                 label="Cardholder Name"
//                 />
//             </Grid>
//             <Grid item xs={12}>
//             <TextField
//                 required
//                 fullWidth
//                 id="cardNum"
//                 name="cardNum"
//                 label="Card Number"
//                 inputProps={{ maxLength: 16, type: 'tel'}}
//                 onInput={(e) => {
//                     e.target.value = e.target.value.replace(/[^0-9]/g, '');
//                 }}
//             />
//             </Grid>
//             <Grid item xs={12}>
//                 <Grid container id="dateForm" spacing={3}>
//                     <Grid item xs={2}>
//                     <TextField
//                         required
//                         fullWidth
//                         id="cvv"
//                         name="cvv"
//                         label="CVV"
//                         inputProps={{ maxLength: 4, type: 'tel'}}
//                         onInput={(e) => {
//                             e.target.value = e.target.value.replace(/[^0-9]/g, '');
//                         }}
//                     />
//                     </Grid>
//                     <Grid item xs={5}/>
//                     <Grid style={{justifyItems:'left'}} item xs={2}>
//                         <InputLabel id="monthLabel">Month</InputLabel>
//                         <Select
//                             required
//                             fullWidth
//                             labelId="expMonth"
//                             id="expMonth"
//                             label="MM"
//                             value={month}
//                             onChange={handleMonthChange}
//                             >
//                             {monthList.map(option => (
//                                 <MenuItem value={option}>
//                                 {option}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </Grid>
//                     <Grid item xs={3}>
//                         <InputLabel id="yearLabel">Year</InputLabel>
//                         <Select
//                             required
//                             fullWidth
//                             labelId="expYear"
//                             id="expYear"
//                             Label="YYYY"
//                             value={year}
//                             onChange={handleYearChange}
//                             >
//                             {yearList.map(option => (
//                                 <MenuItem value={option}>
//                                 {option}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Grid>
//     );
// }

// export default PaymentForm