import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Switch, Route, withRouter, BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/themes/default";
import HomePage from "./containers/HomePage";
import ContactPageForUser from "./containers/ContactPage/userPage";
import ContactPageForAdmin from "./containers/ContactPage/adminPage";
import AutoservicePage from "./containers/AutoservicePage";
import SalesPage from "./containers/SalesPage";
import GalleryPageForAdmin from "./containers/GalleryPage/adminPage";
import GalleryPageForUser from "./containers/GalleryPage/userPage";
import GalleryPage from "./containers/GalleryPage/index";
import ReviewPageForAdmin from "./containers/ReviewPage/adminPage";
import ReviewPageForUser from "./containers/ReviewPage/userPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import getComponents from "./containers/ReturnAdminOrUserPage";
import LoginPage from "./containers/LoginPage";
import { fetchContactDetailsAction } from "./actions/contactDetailActions";
import { returnContentDetailPromise } from "./services/ContactPageServices";
import Root from "./components/Root";

class App extends React.Component {
  render() {
    const Wrapper = styled.div`
      width: 90%;
      margin: 0 auto;
      position: relative;
    `;
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Root>
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} onEnter={this.handleFetchContantDetail} />
              <Route path="/autoservice" component={AutoservicePage} />
              <Route path="/sales" component={SalesPage} />
              <Route path="/galery" component={getComponents(GalleryPageForAdmin, GalleryPageForUser)} />
              <Route path="/contact" component={getComponents(ContactPageForAdmin, ContactPageForUser)} />
              <Route path="/review" component={getComponents(ReviewPageForAdmin, ReviewPageForUser)} />
              <Route path="/admin" component={LoginPage} />
            </Switch>
            <Footer />
          </Root>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
