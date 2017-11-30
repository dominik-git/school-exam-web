import axios from "axios";
import { fetchPhotos } from "../containers/GalleryPage/ducks";

export async function sendContactFormular(emailAddress, message, subject) {
  const options = {
    method: "POST",
    url: "/api/sendEmail",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ emailAddress, message, subject }),
  };
  try {
    const response = await axios(options);
    console.log(response);
  } catch (error) {
    console.log("error", error);
  }
}

export async function UploadPhoto(photoFile) {
  const photoData = new FormData();
  photoData.append("photo", photoFile);
  const options = {
    method: "POST",
    url: "/api/gallery",
    headers: { "Content-Type": "multipart/form-data" },
    data: photoData,
  };
  try {
    const response = await axios(options);
    console.log(response);
  } catch (error) {
    console.log("error", error);
  }
}

export function returnFetchPhotosPromise() {
  const options = {
    method: "GET",
    url: "/api/gallery",
  };
  console.log("promise", axios(options));
  return axios(options);
}
