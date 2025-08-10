import axios from "axios";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const { url } = config;

  if (
    url?.includes("api/members/member/signup") ||
    url?.includes("api/members/member/signin") ||
    url?.includes("api/members/member/logout") ||
    url?.includes("api/members/member/") ||
    url?.includes("oauth2/authorization/kakao")
  ) {
    return config;
  }

  const accessToken = cookie.get("accessToken");
  const refreshToken = cookie.get("refreshToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  if (refreshToken) {
    config.headers.Refresh = `Bearer ${refreshToken}`;
  }
  return config;
});

export default instance;
