import React from "react";
import { HomePageWrapper, StyledContent, StyledSlider, StyledImg, StyledUserContent } from "./styles";
import { returnFetchPhotosPromise,getAboutItemsPromise } from "../../services/HomePageServices";
import HomePageSlider from "../../components/HomePageSlider";
import AboutItem from "../../components/AboutItem/AboutItem";


class HomePage extends React.Component {
  state = {
    allPhotos: [],
    aboutItems: [],
  };

  componentWillMount() {
    this.getAllPhotosRequest();
    this.getAboutItems();
  }

  getAllPhotosRequest = async () => {
    try {
      const response = await returnFetchPhotosPromise();
      this.setState({ allPhotos: response.data });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  getAboutItems = async () => {
    try {
      const response = await getAboutItemsPromise();
      console.log(response.data);
      this.setState({ aboutItems: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const aboutItems = this.state.aboutItems.map(item => (
      <AboutItem item={item} key={item.id} deleteFunc={this.deleteAboutItem}/>
    ))
    return (
    <div>
    {this.state.allPhotos.length > 0 ? <HomePageSlider sliderPhotos={this.state.allPhotos} /> : null}
      <StyledUserContent>{ this.state.aboutItems.length>0 ? aboutItems :null}</StyledUserContent>
    </div>
  );
  }
}
export default HomePage;
