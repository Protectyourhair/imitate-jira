import { User } from 'screens/project-list/search-panel';

//在真实环境中，如果使用firebase这种第三方auth服务的话，本地不需要
const localStorageKey = '__auth_provider_token__';

const baseUrl = process.env.REACT_APP_API_URL;

//获取token
export const getToken = () => {
  return window.localStorage.getItem(localStorageKey);
};

//处理返回的数据
export const handleResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || '');
  return user;
};

//登录
export const login = (data: { username: string; password: string }) => {
  fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleResponse(await response.json());
    }
  });
};

//注册
export const register = (data: { username: string; password: string }) => {
  fetch(`${baseUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleResponse(await response.json());
    }
  });
};

//退出
export const logout = () => window.localStorage.removeItem(localStorageKey);
