import create from "zustand";
interface User {
  id: string;
  fullName: string;
  email: string;
  roleName: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  userId: string | null;

  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loadUserFromStorage: () => void;
}

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const useAuthStore = create<AuthState>((set: any) => ({  isAuthenticated: false,
  user: null,
  token: null,
  userId: null,

  login: async (email: string, password: string) => {
    try {
      console.log("[LOGIN] Sending request...");

      const response = await fetch(`${API_BASE_URL}/Auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log("[LOGIN] Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("[LOGIN ERROR]", errorText);
        return false;
      }

      const data = await response.json();

      console.log("[LOGIN SUCCESS]", data);

      if (!data.token) {
        console.error("Token missing");
        return false;
      }

      localStorage.setItem("digitvilla_token", data.token);

      if (data.user) {
        localStorage.setItem(
          "digitvilla_user",
          JSON.stringify(data.user)
        );

        localStorage.setItem(
          "digitvilla_userId",
          data.user.id
        );
      }

      set({
        isAuthenticated: true,
        user: data.user,
        token: data.token,
        userId: data.user?.id || null,
      });

      return true;
    } catch (error) {
      console.error("[LOGIN FAILED]", error);
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
    const user = localStorage.getItem("digitvilla_user");
    const userId = localStorage.getItem("digitvilla_userId");

    if (!token || !user) return;

    set({
      isAuthenticated: true,
      token,
      user: JSON.parse(user),
      userId,
    });
  },
}));