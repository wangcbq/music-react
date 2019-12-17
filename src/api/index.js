import axios from 'axios';
import CryptoJS from 'crypto-js';

const baseURL = 'http://192.168.2.140:3000';
const http = axios.create({
  baseURL,
  timeout: 3000
});
// 添加响应拦截器
http.interceptors.response.use(response => {
  return response && response.data;
}, function (error) {
  return Promise.reject(error);
});
// 密钥
const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF");
// 密钥偏移量
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412');

function Encrypt(word) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  return encrypted.ciphertext.toString().toUpperCase();
}

const api = {
  checkRegister: phone => http(`/cellphone/existence/check?phone=${Encrypt(phone)}`),
  login: ({ phone, password }) => http.get(`/login/cellphone?phone=${Encrypt(phone)}&password=${Encrypt(password)}`),
  loginStatus: () => http.get(`/login/status`),
};

export default api;
