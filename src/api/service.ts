import axios, { AxiosRequestConfig } from "axios"
import { APIResponse } from "./types"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

const server = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json"
  }
})

axios.interceptors.response.use(
  (response) => {
    return response.headers["content-type"] === "application/json"
      ? response
      : Promise.reject(response)
  },
  (error) => Promise.reject(error)
)

function get<T>(
  path: string,
  params?: Record<string, unknown>,
  config?: AxiosRequestConfig
): APIResponse<T> {
  const finalParams = {
    ...params,
    appid: API_KEY
  }
  return server.get(path, { params: finalParams, ...config })
}

export const API = {
  get
}
