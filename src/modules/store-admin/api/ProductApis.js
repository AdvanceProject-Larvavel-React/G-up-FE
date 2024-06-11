import { apiClient } from "./DefaultApis";

const PRODUCT_ENDPOINT = "product";

export const getActiveProducts = () => {
  return apiClient.get(`${PRODUCT_ENDPOINT}/get/active`);
};

export const getInactiveProducts = () => {
  return apiClient.get(`${PRODUCT_ENDPOINT}/get/in-active`);
};

export const getProductById = (id) => {
  return apiClient.get(`${PRODUCT_ENDPOINT}/get/by-id/${id}`);
};

export const createProduct = (productData) => {
  return apiClient.post(`${PRODUCT_ENDPOINT}/post/create`, productData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getAllCategory = () => {
  return apiClient.get("/category/get/all", {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateProduct = (id, productData) => {
  return apiClient.put(`${PRODUCT_ENDPOINT}/put/update/${id}`, productData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const disableProduct = (id) => {
  return apiClient.patch(`${PRODUCT_ENDPOINT}/patch/disable/${id}`);
};

export const destroyProduct = (id) => {
  return apiClient.delete(`${PRODUCT_ENDPOINT}/delete/destroy/${id}`);
};