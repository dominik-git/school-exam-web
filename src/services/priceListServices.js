import axios from "axios";
// get all services
export function returnAllServicesPromise() {
  const options = {
    method: "GET",
    url: "/api/pricelist",
  };
  return axios(options);
}


// create new service
export function returnPromiseCreateNewService(service, description, price) {
  const options = {
    method: "POST",
    url: "/api/pricelist",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ service, description, price }),
  };
  return axios(options);
}

// delete service by id
export function returnPromiseUpdateServiceById(id, service, description, price) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    url: `/api/pricelist/updateItem/${id}`,
    data: JSON.stringify({ service, description, price }),
  };
  return axios(options);
}

// delete service by id
export function returnPromiseDeleteServiceById(id) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    url: `/api/pricelist/delete/${id}`,
  };
  return axios(options);
}

