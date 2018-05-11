import axios from "axios";
// get all reviews
export function returnAllReviewsPromise() {
  const options = {
    method: "GET",
    url: "/api/review"
  };
  return axios(options);
}

// get all approved reviews
export function returnApprovedReviewsPromise() {
  const options = {
    method: "GET",
    url: "/api/review/approved"
  };
  return axios(options);
}

// upload new review
export function returnPromiseUploadReview(nickName, message, rating, date) {
  const options = {
    method: "POST",
    url: "/api/review",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ nickName, message, rating, date })
  };
  return axios(options);
}

// delete review by id
export function returnPromiseDeleteReview(id) {
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    url: `/api/review/delete/${id}`
  };
  return axios(options);
}

// approve review by id
export function returnPromiseApproveReview(id) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    url: `/api/review/approve/${id}`
  };
  return axios(options);
}
