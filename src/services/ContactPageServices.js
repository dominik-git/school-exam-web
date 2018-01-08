import axios from "axios";

// get content
export function returnContentPromise() {
  const options = {
    method: "GET",
    url: "/api/contact",
  };
  return axios(options);
}
// create content
export function returnSaveContentPromise(contentData) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    url: "/api/contact",
    data: contentData,
  };
  return axios(options);
}

// update content
export function returnUpdateContentPromise(contentData, id) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    url: `/api/contact/${id}`,
    data: contentData,
  };
  return axios(options);
}
