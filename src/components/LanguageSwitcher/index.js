import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { switchLanguage } from "./ducks";

class LanguageSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.handleLanguage = this.handleLanguage.bind(this);
  }
  handleLanguage(id) {
    this.props.switchLanguage(id);
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="#" onClick={() => this.handleLanguage("en")}>
              EN
            </a>
          </li>
          <li>
            <a href="#" onClick={() => this.handleLanguage("sk")}>
              SK
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ switchLanguage }, dispatch);
}

export default connect(null, mapDispatchToProps)(LanguageSwitcher);
