import BaseApi from './BaseApis';

const ProductApi = {
    getAllProducts: async () => {
        try {
            const response = await BaseApi.get('/product/get/all');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    getProductById: async (id) => {
        try {
            const response = await BaseApi.get(`/product/get/by-id/${id}`);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    getActiveProducts: async () => {
        try {
            const response = await BaseApi.get('/product/get/active');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    getInactiveProducts: async () => {
        try {
            const response = await BaseApi.get('/product/get/in-active');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    createProduct: async (productData) => {
        try {
            const response = await BaseApi.post('/product/post/create', productData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    updateProduct: async (id, productData) => {
        try {
            const response = await BaseApi.put(`/product/put/update/${id}`, productData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    disableProduct: async (id) => {
        try {
            const response = await BaseApi.patch(`/product/patch/disable/${id}`);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    destroyProduct: async (id) => {
        try {
            const response = await BaseApi.delete(`/product/delete/destroy/${id}`);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    }
};

export default ProductApi;
