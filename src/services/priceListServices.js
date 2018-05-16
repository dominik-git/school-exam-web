import axios from "axios";
// get all services
export function returnAllServicesPromise() {
  const options = {
    method: "GET",
    url: "/pricelist"
  };
  return axios(options);
}

// create new service
export function returnPromiseCreateNewService(serviceImage, service, description, price) {
  const options = {
    method: "POST",
    url: "/pricelist",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ serviceImage, service, description, price })
  };
  return axios(options);
}

// delete service by id
export function returnPromiseUpdateServiceById(id, serviceImage, service, description, price) {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    url: `/pricelist/${id}`,
    data: JSON.stringify({ serviceImage, service, description, price })
  };
  return axios(options);
}

// delete service by id
export function returnPromiseDeleteServiceById(id) {
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    url: `/pricelist/${id}`
  };
  return axios(options);
}
