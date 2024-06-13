import BaseApi from "./BaseApis";

const UPLOAD_ENDPOINT = "image";

export const getURL = (image) => {
    return BaseApi.post(`${UPLOAD_ENDPOINT}/post/url`, image, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  };