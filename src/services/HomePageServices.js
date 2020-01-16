import axios from "axios";

export function returnUploadPhotoPromise(photoFile) {
  console.log(photoFile[0]);
  const photoData = new FormData();
  // photoData.append("photoList", photoFile[0]);
  for (let i = 0; i < photoFile.lenght; i += 1) {
    photoData.append("photoList", photoFile[i]);
  }
  const options = {
    method: "POST",
    url: "/home",
    headers: { "Content-Type": "multipart/form-data" },
    mimeType: "multipart/form-data",
    data: photoData
  };
  return axios(options);
}

export function returnFetchPhotosPromise() {
  const options = {
    method: "GET",
    url: "/home"
  };
  return axios(options);
}

export function returnDeletePhotosPromise(id) {
  const options = {
    method: "DELETE",
    url: `/home/${id}`
  };
  return axios(options);
}

export function getAboutItemsPromise() {
  const options = {
    method: "GET",
    url: "/aboutItem"
  };
  return axios(options);
}

export function deleteAboutItemPromise(id, token) {
  const options = {
    method: "DELETE",
    url: `/aboutItem/${id}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  return axios(options);
}

export function postAboutItemPromise(data) {
  const options = {
    method: "POST",
    url: "/aboutItem",
    mimeType: "multipart/form-data",
    data
  };
  return axios(options);
}
