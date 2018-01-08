import React from "react";
import axios from "axios";
import base64 from "base-64";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logIn } from "../ReturnAdminOrUserPage/ducks";

import LoginForm from "./form";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.handleSetPassword = this.handleSetPassword.bind(this);
    this.handleSetUsername = this.handleSetUsername.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSetPassword(e) {
    this.setState({ password: e.target.value });
  }
  handleSetUsername(e) {
    this.setState({ username: e.target.value });
  }
  async handleSubmit(values) {
    const { username, password } = values.toJS();
    console.log(base64.encode(`${username} ${password}`));
    const options = {
      method: "GET",
      url: "/api/car/ping",
      headers: {
        Authorization: `Basic${base64.encode(`${username} ${password}`)}`,
      },
    };
    try {
      await axios(options);
      this.props.logIn();
    } catch (err) {
      console.log(err);
      this.props.logIn();
    }
  }

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      //   <input type="text" onChange={this.handleSetPassword} />
      //   <input type="text" onChange={this.handleSetUsername} />
      //   <input type="submit" value="submit" />
      // </form>
      <LoginForm onSubmit={this.handleSubmit} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logIn }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginPage);
