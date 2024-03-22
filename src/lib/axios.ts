import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  timeout: 30000,
  timeoutErrorMessage: "Time out!",
});

async function post(route: string, body = {}, header = {}) {
  try {
    return await instance.post(`${route}`, body, header);
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
}

async function get(route: string, header = {}) {
  try {
    return await instance.get(`${route}`, header);
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
}

export { get as apiGet, post as apiPost };
