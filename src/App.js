import React from "react";
import { Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/themes/default";
import HomePage from "./containers/HomePage";
import ContactPageForUser from "./containers/ContactPage/userPage";
import ContactPageForAdmin from "./containers/ContactPage/adminPage";
import AutoservicePage from "./containers/AutoservicePage";
import PriceListPageForAdmin from "./containers/PriceListPage/adminPage";
import PriceListPageForUser from "./containers/PriceListPage/userPage";
import GalleryPageForAdmin from "./containers/GalleryPage/adminPage";
import GalleryPageForUser from "./containers/GalleryPage/userPage";
import ReviewPageForAdmin from "./containers/ReviewPage/adminPage";
import ReviewPageForUser from "./containers/ReviewPage/userPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import getComponents from "./containers/ReturnAdminOrUserPage";
import LoginPage from "./containers/LoginPage";
import Root from "./components/Root";

class App extends React.Component {
  render() {
    const Wrapper = styled.div`
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
              <Route path="/sales" component={getComponents(PriceListPageForAdmin, PriceListPageForUser)} />
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
