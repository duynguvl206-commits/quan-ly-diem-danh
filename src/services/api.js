import axios from 'axios';

// Khởi tạo Axios instance giao tiếp với Backend
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Đổi URL này theo địa chỉ backend thực tế của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;