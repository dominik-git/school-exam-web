import axios from "axios";

export function returnGetPromise(urlAddress) {
  const options = {
    method: "GET",
    url: urlAddress,
  };
  return axios(options);
}

export function returnPostObjectPromise(url, data) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    url,
    data,
  };
  return axios(options);
}
export function returnPostPathVariablePromise(url) {
  const options = {
    method: "POST",
    url,
  };
  return axios(options);
}
