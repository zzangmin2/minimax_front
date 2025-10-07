import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE ?? 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10_000, // 10초
});

// // ✅ 요청 인터셉터 (예: 토큰 붙이기)
// axiosInstance.interceptors.request.use(
//   config => {
//     // ex) 토큰 있으면 자동으로 헤더에 추가
//     const token = localStorage.getItem('accessToken');
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   error => Promise.reject(error)
// );

// // ✅ 응답 인터셉터 (에러 처리 통일)
// axiosInstance.interceptors.response.use(
//   response => response,
//   (error: AxiosError) => {
//     if (error.response) {
//       console.error(
//         `[API ERROR] ${error.response.status}: ${error.response.statusText}`,
//         error.response.data
//       );
//     } else {
//       console.error('[API ERROR]', error.message);
//     }
//     return Promise.reject(error);
//   }
// );
