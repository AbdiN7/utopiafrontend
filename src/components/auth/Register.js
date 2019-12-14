import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      userFirstName: '',
      userLastName: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/profile');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      userFirstName: this.state.userFirstName,
      userLastName: this.state.userLastName,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      password: this.state.password,
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="formContainer"
      style={{marginTop: "40px"}}>
       <div className="formCard">
 
              <h1>Sign Up</h1>
              <p>
                Create your Utopia Airlines&trade;  Account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={5} className="form-group">
                  <TextField
                    type="text"
                    placeholder="First Name"
                    // style={{left: "20%"}}
                    style={{width: "100%"}}
                    name="userFirstName"
                    value={this.state.userFirstName}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    type="text"
                    // style={{right: "20%"}}
                    style={{width: "100%"}}
                    placeholder="Last Name"
                    name="userLastName"
                    value={this.state.userLastName}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                <Grid item xs={1}></Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Email Address"
                    style={{width: "82%"}}
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Phone Number"
                    style={{width: "82%"}}
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Address"
                    style={{width: "82%"}}
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </Grid>
                <Grid item xs={12}
                >
           
                  <TextField
                    type="password"
                    placeholder="Password"
                    name="password"
                    style={{width: "82%"}}
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </Grid>
                <Grid item xs={12}>
                <Button 
                  style={{width: "82%"}}
                  className="formButtons" 
                  type="submit">Sign Up</Button>
                </Grid>
                </Grid>
              </form>
            </div>
          </div>      
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
