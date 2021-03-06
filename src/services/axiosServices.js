import axios from "axios";

export async function sendContactFormular(emailAddress, message, subject) {
  const options = {
    method: "POST",
    url: "/sendEmail",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ emailAddress, message, subject })
  };
  try {
    const response = await axios(options);
    console.log(response);
  } catch (error) {
    console.log("error", error);
  }
}

export function UploadPhoto(photoFile) {
  const photoData = new FormData();
  photoData.append("photo", photoFile);
  const options = {
    method: "POST",
    url: "/gallery",
    headers: { "Content-Type": "multipart/form-data" },
    data: photoData
  };
}

export function returnFetchPhotosPromise() {
  const options = {
    method: "GET",
    url: "/gallery"
  };
  console.log("promise", axios(options));
  return axios(options);
}
