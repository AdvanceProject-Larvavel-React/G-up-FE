import { apiClient } from "./DefaultApis";

const PRODUCT_ENDPOINT = "/product";

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
  const formData = new FormData();
  for (const key in productData) {
    formData.append(key, productData[key]);
  }
  return apiClient.post(`${PRODUCT_ENDPOINT}/post/create`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getAllCategories = () => {
  return apiClient.get("/category/get/all");
};

export const updateProduct = (id, productData) => {
  return apiClient.put(`${PRODUCT_ENDPOINT}/put/update/${id}`, productData);
};

export const disableProduct = (id) => {
  return apiClient.patch(`${PRODUCT_ENDPOINT}/patch/disable/${id}`);
};

export const destroyProduct = (id) => {
  return apiClient.delete(`${PRODUCT_ENDPOINT}/delete/destroy/${id}`);
};