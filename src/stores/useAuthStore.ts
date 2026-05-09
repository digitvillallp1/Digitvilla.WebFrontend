import create from 'zustand'
import { apiClient } from "../services/apiClient";

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  token: string | null;
  userId: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loadUserFromStorage: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,
  userId: null,

  login: async (email: string, password: string) => {
    try {
      const data = await apiClient("/Auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const token = data.token;
      const user = data.user;
      const userId = user?.id || data.userId || data.id;

      if (!token) {
        console.error("Login failed: token not found in response", data);
        return false;
      }

      localStorage.setItem("digitvilla_token", token);

      if (user) {
        localStorage.setItem("digitvilla_user", JSON.stringify(user));
      }

      if (userId) {
        localStorage.setItem("digitvilla_userId", userId);
      }

      set({
        isAuthenticated: true,
        user: user || null,
        token,
        userId: userId || null,
      });

      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("digitvilla_token");
    localStorage.removeItem("digitvilla_user");
    localStorage.removeItem("digitvilla_userId");

    set({
      isAuthenticated: false,
      user: null,
      token: null,
      userId: null,
    });
  },

  loadUserFromStorage: () => {
    const token = localStorage.getItem("digitvilla_token");
    const userString = localStorage.getItem("digitvilla_user");
    const userId = localStorage.getItem("digitvilla_userId");

    if (!token) return;

    let user = null;

    if (userString) {
      try {
        user = JSON.parse(userString);
      } catch {
        localStorage.removeItem("digitvilla_user");
      }
    }

    set({
      isAuthenticated: true,
      user,
      token,
      userId,
    });
  },
}));