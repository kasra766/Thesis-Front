import { jwtDecode } from "jwt-decode";
import { ACCESS_TOKEN_KEY } from "./constants";

export type JwtPayload = {
  sub: string;
  email: string;
  userId: string;
  role: "ADMIN" | "USER";
};

export function getToken() {
  if (typeof window === "undefined") return null;

  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setAuth(accessToken: string) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

export function logout() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function decodeToken() {
  const token = getToken();

  if (!token) return null;

  try {
    return jwtDecode<JwtPayload>(token);
  } catch {
    return null;
  }
}

export function getUserId() {
  const payload = decodeToken();

  return payload?.userId;
}

export function isAuthenticated() {
  return !!getToken();
}

export function isAdmin() {
  const payload = decodeToken();

  return payload?.role === "ADMIN";
}
