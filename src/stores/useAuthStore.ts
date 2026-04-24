import create from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  user: any | null
  login: (email: string, password: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (email, _password) => {
    // Simulate login
    set({ isAuthenticated: true, user: { email } })
  },
  logout: () => {
    set({ isAuthenticated: false, user: null })
  }
}))