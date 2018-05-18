import axios from "axios";

function login(username, password) {
  const loginData = new FormData();
  loginData.append("username", username);
  loginData.append("password", password);
  const options = {
    method: "POST",
    url: "/user/login",
    data: loginData
  };
  return axios(options);
}

export default login;
