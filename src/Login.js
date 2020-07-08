
import React from 'react'
import { Redirect } from "react-router-dom";

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100);
    }
  };

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      redirectToReferrer: false
    };
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    const { redirectToReferrer } = this.state;

    return redirectToReferrer ? (
      <Redirect to={from} />
    ) : (
      <div>
        <p className ="Txt">You must log in to view the page at {from.pathname}</p>
        <button className ="big-button "  onClick={() => this.login () , hello}>
          Log in
        </button>
      </div>
    );
  }
}
 const hello=()=>{
   alert('Welcome Admin')
 }