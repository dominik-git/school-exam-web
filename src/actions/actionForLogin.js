const SET_ADMIN_TOKEN = "SET_ADMIN_TOKEN";

export function storeAdminToken(payload) {
  return {
    type: SET_ADMIN_TOKEN,
    payload,
  };
}
