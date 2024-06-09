// Get Active Stores
import BaseApi from "./BaseApis";

const STORE_ENDPOINT = "user";

export const getActiveStores = () => {
    return BaseApi.get(`${STORE_ENDPOINT}/get/active`);
  };
  
  // Get Inactive Stores
  export const getInactiveStores = () => {
    return BaseApi.get(`${STORE_ENDPOINT}/get/in-active`);
  };
  
  // Get Store by ID
  export const getStoreById = (id) => {
    return BaseApi.get(`${STORE_ENDPOINT}/get/by-id/${id}`);
  };
  
  // Create Store
  export const createStore = (storeData) => {
    return BaseApi.post(`${STORE_ENDPOINT}/post/create`, storeData);
  };
  
  // Update Store
  export const updateStore = (id, storeData) => {
    return BaseApi.put(`${STORE_ENDPOINT}/put/update/${id}`, storeData);
  };
  
  // Disable Store
  export const disableStore = (id) => {
    return BaseApi.patch(`${STORE_ENDPOINT}/patch/disable/${id}`);
  };
  
  // Destroy Store
  export const destroyStore = (id) => {
    return BaseApi.delete(`${STORE_ENDPOINT}/delete/destroy/${id}`);
  };