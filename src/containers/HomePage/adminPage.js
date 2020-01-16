import React from "react";
import Axios from "axios";
import DragAndDropArea from "../../components/DragAndDropArea";
import { HomePageWrapper, StyledTitle, StyledRow } from "./styles";
import {
  returnFetchPhotosPromise,
  returnDeletePhotosPromise,
  getAboutItemsPromise,
  deleteAboutItemPromise,
  postAboutItemPromise,
} from "../../services/HomePageServices";
import Photo from "./parts/Photo";
import AboutItem from "../../components/AboutItem/AboutItem";
import AboutItemCreate from "../../components/AboutItem/AboutItemCreate";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      allPhotos: [],
      aboutItems: [],
      photoFile: {},
      photosToUpload:  [],
      parsedFileToShow:  [],
      token:  "",
    };
  }

  componentWillMount()  {
    this.setState({  token: sessionStorage.getItem("token") }, () => {
      console.log(this.state.token);
});
  }
  componentDidMount() {
    this.getAllPhotosRequest();
    this.getAboutItems();
  }

  onSubmitAboutItem = async values =>  {
    const { description, photo, secondTitle, title } = values.toJS();
    const form = new FormData();
    form.append("description", description);
    form.append("photo", photo[0]);
    form.append("secondTitle", secondTitle);
    form.append("title", title);
    console.log(form);
     try {
      await postAboutItemPromise(form);
      this.getAboutItems();
      console.log();;
    } catch (err) {
    }
  };

  getAllPhotosRequest = async () => {
    try {
      const response = await returnFetchPhotosPromise();
      this.setState({ allPhotos: response.data });
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

  uploadPhotoRequest = async () => {
    const photoData = new FormData();
    this.state.photosToUpload.map(item => (
      photoData.append("photoList", item)
    ));
    try {
      const response = await Axios({
        method: "POST",
        url: "/home",
        headers: { "Content-Type": "multipart/form-data" },
        mimeType: "multipart/form-data",
        data: photoData,
      });;
      this.setState({  photosToUpload: []  });
      this.getAllPhotosRequest();
    } catch (err) {
      console.log(err);
    }
  };

  deletePhoto = async photoID => {
    try {
      await returnDeletePhotosPromise(photoID);
      const newArray = this.state.allPhotos.filter(value => value.id !== photoID);
      this.setState({ allPhotos: newArray });;
    } catch (err) {
      console.log(err);
    }
  };
  deleteAboutItem = async photoID => {
    try {
      await deleteAboutItemPromise(photoID,  this.state.token);
      const newArray = this.state.aboutItems.filter(value => value.id !== photoID);
      this.setState({ aboutItems: newArray });
    } catch (err) {
      console.log(err);
    }
  };
  pushPhotoToArray = photos => {
    const copy = [];
    for (let i = 0; i < photos.length; i += 1) {
      copy.push(photos[i]);
    }
    const arrayToSave = this.state.photosToUpload.concat(copy);
    this.setState({ photosToUpload: arrayToSave });
  };

  handleSetSlides(arrayOfSlides) {
    this.setState({ slides: arrayOfSlides });
  }


  onDragEnter=(e) => {
    e.stopPropagation();
    e.preventDefault();

  }

  onDragOver = e  => {
    e.stopPropagation();
    e.preventDefault();

  }

  onDragLeave = e  => {
    e.stopPropagation();
    e.preventDefault();

  };

  onDrop = e  => {
    e.stopPropagation();
    e.preventDefault();
    const copy  = [];
    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < e.dataTransfer.items.length; i += 1) {
        // If dropped items aren't files, reject them
        if (e.dataTransfer.items[i].kind === "file") {
          const file = e.dataTransfer.items[i].getAsFile();
          copy.push(file);
        }
      }
    }
    this.pushPhotoToArray(copy);
  };
  onUploadFile = e => {
    this.pushPhotoToArray(e.target.files);
  };
  render() {
    const photoImages = this.state.allPhotos.map(photoFile => (
      <Photo deletePhoto={this.deletePhoto} photoFile={photoFile} key={photoFile.id}  />
    ));;
    const aboutItems = this.state.aboutItems.map(item => (
      <AboutItem item={item} key={item.id} deleteFunc={this.deleteAboutItem}  />
    ));;

    return (
      <HomePageWrapper>

        <StyledTitle>Slider foto</StyledTitle>
        <StyledRow>
          { this.state.allPhotos.length > 0 ? photoImages : <span>Ziadne fotky</span> }
        </StyledRow>
        <StyledTitle>Domovske polozky </StyledTitle>
            <StyledRow>{this.state.aboutItems.length > 0 ? aboutItems : <span>Ziadne domovske polozky</span>}</StyledRow>
        <StyledTitle>Pridat domovsku polozku</StyledTitle>
            <div>
              <AboutItemCreate onSubmit={this.onSubmitAboutItem} />
        </div>
            <StyledTitle>Pridat fotku</StyledTitle>
        <DragAndDropArea
          onDragEnter={this.onDragEnter}
            onDragOver={this.onDragOver}
            onDragLeave={this.onDragLeave}
          onDrop={this.onDrop}
          photoArray={this.state.photosToUpload}
            uploadFile={this.onUploadFile}
            uploadPhotos={this.uploadPhotoRequest}
          />
      </HomePageWrapper>
    );
  }
}
export default HomePage;
