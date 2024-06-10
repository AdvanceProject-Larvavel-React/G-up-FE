import BaseApi from "./BaseApis";

const PRODUCT_ENDPOINT = "product";

export const getActiveProducts = () => {
  return BaseApi.get(`${PRODUCT_ENDPOINT}/get/active`);
};

export const getInactiveProducts = () => {
  return BaseApi.get(`${PRODUCT_ENDPOINT}/get/in-active`);
};

export const getProductById = (id) => {
  return BaseApi.get(`${PRODUCT_ENDPOINT}/get/by-id/${id}`);
};

export const createProduct = (productData) => {
  return BaseApi.post(`${PRODUCT_ENDPOINT}/post/create`, productData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};


export const  getAllCategory = () => {
  return BaseApi.get("/category/get/all", {headers: {
    'Content-Type': 'multipart/form-data'
  }})

}

// http://localhost:8000/api/category/get/all
export const updateProduct = (id, productData) => {
  return BaseApi.put(`${PRODUCT_ENDPOINT}/put/update/${id}`, productData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const disableProduct = (id) => {
  return BaseApi.patch(`${PRODUCT_ENDPOINT}/patch/disable/${id}`);
};

export const destroyProduct = (id) => {
  return BaseApi.delete(`${PRODUCT_ENDPOINT}/delete/destroy/${id}`);
};
