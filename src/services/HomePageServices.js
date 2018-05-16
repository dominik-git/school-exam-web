import axios from "axios";

export function returnUploadPhotoPromise(photoFile) {
  const photoData = new FormData();
  photoData.append("photo", photoFile);
  const options = {
    method: "POST",
    url: "/gallery",
    headers: { "Content-Type": "multipart/form-data" },
    data: photoData,
  };
  return axios(options);
}

export function returnFetchPhotosPromise() {
  const options = {
    method: "GET",
    url: "/gallery",
  };
  return axios(options);
}

export function returnDeletePhotosPromise(id) {
  const options = {
    method: "POST",
    url: `/gallery/delete/${id}`,
  };
  return axios(options);
}
