import BaseApi from "./BaseApis";

const CATEGORY_ENDPOINT = "category";

// Get All Categories
export const getAllCategories = () => {
  return BaseApi.get(`${CATEGORY_ENDPOINT}/get/all`); 
};

// Get Active Categories
export const getActiveCategories = () => {
  return BaseApi.get(`${CATEGORY_ENDPOINT}/get/active`);
};

// Get Inactive Categories
export const getInactiveCategories = () => {
  return BaseApi.get(`${CATEGORY_ENDPOINT}/get/in-active`);
};

// Get Category by ID
export const getCategoryById = (id) => {
  return BaseApi.get(`${CATEGORY_ENDPOINT}/get/by-id/${id}`);
};

// Create Category
export const createCategory = (categoryData) => {
  return BaseApi.post(`${CATEGORY_ENDPOINT}/post/create`, categoryData);
};

// Update Category
export const updateCategory = (id, categoryData) => {
  return BaseApi.put(`${CATEGORY_ENDPOINT}/put/update/${id}`, categoryData);
};

// Disable Category
export const disableCategory = (id) => {
  return BaseApi.patch(`${CATEGORY_ENDPOINT}/patch/disable/${id}`);
};

// Destroy Category
export const destroyCategory = (id) => {
  return BaseApi.delete(`${CATEGORY_ENDPOINT}/delete/destroy/${id}`);
};
