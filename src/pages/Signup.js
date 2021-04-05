import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle } from "../helpers/auth";
import { Button, TextField, Container,  } from "@material-ui/core"

export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
 
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: '' });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }



  render() {
    return (
      <Container maxWidth="xs">
        
      
        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit} >
          <h2 >
            Sign Up to <h1><Link className="title ml-2" to="/">Convomod</Link>
          </h1></h2>
          <p className="lead">Fill in the form below to create an account.</p>
          <div className="form-group">
            <TextField id="standard-basic" label="Name" onChange={this.handleChange} value={this.state.email}/>
          </div>
          <div className="form-group">
            <TextField id="standard-basic" label="Password" onChange={this.handleChange} value={this.state.password}/>
          </div>
          <br></br>
          <div className="form-group">
            {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
            <Button variant="contained" color="primary">Sign up</Button>
          </div>
          <p>You can also sign up with any of these services</p>
          <Button variant="contained" color="primary" onClick={this.googleSignIn}>
            Sign up with Google
          </Button>

          <br></br>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
        
      </Container>
    )
  }
}