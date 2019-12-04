import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData, this.props.history)
    console.log(userData)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      
        <div className="formContainer"
        style={{marginTop: "40px"}}>
        <div className="formCard" >

   
              <h1 style={{marginTop: "55px"}}>Log In</h1>
              <p style={{marginBottom: "30px"}}>
                  Input your Utopia Airlines&trade; account information
              </p>
              <form onSubmit={this.onSubmit} noValidate>
                <Grid spacing={2} container>
                  <Grid item xs={12}>

                  <TextField
                    style={{marginBottom: '20px', width: "60%"}}
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}

                  <Grid item xs={12}>

                  <TextField
                    type="password"
                    style={{marginBottom: '40px', width:"60%"}}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                  </Grid>
                <Button 
                  type="submit"
                  className="formButtons"
                  style={{width: "60%"}}>Sign In</Button> 
                </Grid>
                </Grid>
              </form>
        </div>
        </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
