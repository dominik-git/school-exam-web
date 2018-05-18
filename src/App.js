import React from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Route, withRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/themes/default";
import HomePageForAdmin from "./containers/HomePage/adminPage";
import HomePageForUser from "./containers/HomePage/userPage";
import ContactPageForUser from "./containers/ContactPage/userPage";
import ContactPageForAdmin from "./containers/ContactPage/adminPage";
import PriceListPageForAdmin from "./containers/PriceListPage/adminPage";
import PriceListPageForUser from "./containers/PriceListPage/userPage";
import GalleryPageForAdmin from "./containers/GalleryPage/adminPage";
import GalleryPageForUser from "./containers/GalleryPage/userPage";
import OrderPageForUser from "./containers/Order/userPage";
import OrderPageForAdmin from "./containers/Order/adminPage";
import ReviewPageForAdmin from "./containers/ReviewPage/adminPage";
import ReviewPageForUser from "./containers/ReviewPage/userPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import getComponents from "./containers/ReturnAdminOrUserPage";
import LoginPage from "./containers/LoginPage";
import ScrollTop from "./components/ScrollTop";

// eslint-disable-next-line
class App extends React.Component {
  render() {
    const Wrapper = styled.div`
      min-height: 100%;
    `;
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />

          <Switch>
            <Route exact path="/" component={getComponents(HomePageForAdmin, HomePageForUser)} />
            <Route path="/services" component={getComponents(PriceListPageForAdmin, PriceListPageForUser)} />
            <Route path="/orders" component={getComponents(OrderPageForAdmin, OrderPageForUser)} />
            <Route path="/galery" component={getComponents(GalleryPageForAdmin, GalleryPageForUser)} />
            <Route path="/contact" component={getComponents(ContactPageForAdmin, ContactPageForUser)} />
            <Route path="/review" component={getComponents(ReviewPageForAdmin, ReviewPageForUser)} />
            <Route path="/admin" component={LoginPage} />
          </Switch>
          <ScrollTop />

          <Footer />
          <ToastContainer position="bottom-center" hideProgressBar />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
