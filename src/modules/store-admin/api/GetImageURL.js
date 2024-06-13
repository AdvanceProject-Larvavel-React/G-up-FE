import { apiClient } from "./DefaultApis";

const UPLOAD_ENDPOINT = "image";
export const getURL = (image) => {
  return apiClient.post(`${UPLOAD_ENDPOINT}/post/url`, image, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};