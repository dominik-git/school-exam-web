import axios from "axios";

// get content
export function returnContentDetailPromise() {
  const options = {
    method: "GET",
    url: "/contact"
  };
  return axios(options);
}
// create content
export function returnSaveContentDetailPromise(contentData) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    url: "/contact",
    data: contentData
  };
  return axios(options);
}

// update content
export function returnUpdateContentDetailPromise(contentData) {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    url: `/contact/${contentData.id}`,
    data: contentData
  };
  return axios(options);
}
