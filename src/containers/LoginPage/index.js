import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logIn } from "../../actions/roleActions";
import LoginForm from "./form";
import login from "../../services/user.service";
import { StyledWrapper } from "./styles";

class LoginPage extends React.Component {
  static saveTokenToSessionStorage(token) {
    window.sessionStorage.setItem("token", token);
  }

  handleSubmit = async values => {
    const { username, password } = values.toJS();
    try {
      const response = await login(username, password);
      this.props.logIn();
      LoginPage.saveTokenToSessionStorage(response.data);
      this.props.history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <StyledWrapper>
        <LoginForm onSubmit={this.handleSubmit} />
      </StyledWrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logIn }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginPage);
