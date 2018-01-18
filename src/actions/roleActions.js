import { LOG_IN, LOG_OUT } from "../const/const";

export function logIn() {
  return {
    type: LOG_IN,
  };
}
export function logOut() {
  return {
    type: LOG_OUT,
  };
}
