import React from "react";
import { Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/themes/default";
import HomePage from "./containers/HomePage";
import ContactPage from "./containers/ContactPage";
import AutoservicePage from "./containers/AutoservicePage";
import SalesPage from "./containers/SalesPage";
import GalleryPage from "./containers/GalleryPage";
import ReviewPage from "./containers/ReviewPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const Wrapper = styled.div`
    height: 100%;
    width: 90%;
    margin: 0 auto;
  `;
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/autoservice" component={AutoservicePage} />
          <Route path="/sales" component={SalesPage} />
          <Route path="/galery" component={GalleryPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/review" component={ReviewPage} />
        </Switch>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
