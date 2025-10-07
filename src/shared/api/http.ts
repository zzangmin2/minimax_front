import { axiosInstance } from './base';

export const http = {
  get: async <T>(url: string, params?: object): Promise<T> => {
    const res = await axiosInstance.get<T>(url, { params });
    return res.data;
  },
  post: async <T>(url: string, body?: object): Promise<T> => {
    const res = await axiosInstance.post<T>(url, body);
    return res.data;
  },
  put: async <T>(url: string, body?: object): Promise<T> => {
    const res = await axiosInstance.put<T>(url, body);
    return res.data;
  },
  del: async <T>(url: string): Promise<T> => {
    const res = await axiosInstance.delete<T>(url);
    return res.data;
  },
};
