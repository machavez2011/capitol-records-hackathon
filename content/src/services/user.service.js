import axiosInstance from "../config/axios.config";

const headers = {};
const baseUrl = "http://localhost:1988/";



export function update(userData) {
  const config = {
    method: "PUT",
    data: userData
  };

  return axiosInstance(baseUrl+userData._id, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

export function del(id) {
  const config = {
    method: "DELETE",
    headers
  };

  return axiosInstance(baseUrl+id, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

export function registerUser(userData) {
  const config = {
    method: "POST",
    headers,
    data: userData
  };

  return axiosInstance(baseUrl, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

export function readAll() {
  const config = {
    method: "GET"
  };
  return axiosInstance
    .get(baseUrl, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

const responseSuccessHandler = response => {
  return response.data;
};

const responseErrorHandler = error => {
  console.log(error);
  return Promise.reject(error);
};