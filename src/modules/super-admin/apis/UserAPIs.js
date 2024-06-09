import BaseApi from "./BaseApis";

const USER_ENDPOINT = "user";

// Get Active Users
export const getUserDataActive = () => {
  return BaseApi.get(`${USER_ENDPOINT}/get/active`);
};

// Get Inactive Users
export const getUserDataInactive = () => {
  return BaseApi.get(`${USER_ENDPOINT}/get/in-active`);
};

// Get All Users
export const getAllUserData = () => {
  return BaseApi.get(`${USER_ENDPOINT}/get/all`);
};

// Update User
export const updateUser = (id, userData) => {
  return BaseApi.put(`${USER_ENDPOINT}/put/update/${id}`, userData);
};

// Disable User
export const disableUser = (id) => {
  return BaseApi.patch(`${USER_ENDPOINT}/patch/disable/${id}`);
};

// Destroy User
export const destroyUser = (id) => {
  return BaseApi.delete(`${USER_ENDPOINT}/delete/destroy/${id}`);
};
