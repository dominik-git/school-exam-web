import axios from "axios";

// get content
export function returnContentDetailPromise() {
  const options = {
    method: "GET",
    url: "/api/contact",
  };
  return axios(options);
}
// create content
export function returnSaveContentDetailPromise(contentData) {
  // const formData = {
  //   serviceName: contentData.serviceName,
  //   address: contentData.address,
  //   emailAddress: contentData.emailAddress,
  //   number1: contentData.number1,
  //   number2: contentData.number2,
  //   openDay: contentData.openDay,
  //   closeDay: contentData.closeDay,
  //   openTime,
  //   closeTime,
  // };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    url: "/api/contact",
    data: contentData,
  };
  return axios(options);
}

// update content
export function returnUpdateContentDetailPromise(contentData) {
  // const formData = {
  //   serviceName: contentData.serviceName,
  //   address: contentData.address,
  //   emailAddress: contentData.emailAddress,
  //   number1: contentData.number1,
  //   number2: contentData.number2,
  //   openDay: contentData.openDay,
  //   closeDay: contentData.closeDay,
  //   openTime,
  //   closeTime,
  // };
  // const data = JSON.stringify({ nickName, message, rating, date });
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    url: `/api/contact/updateInfo/${contentData.id}`,
    data: contentData,
  };
  return axios(options);
}
