import create from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  user: any | null
  token: string | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  loadUserFromStorage: () => void
}

export const useAuthStore = create<AuthState>((set: any) => ({
  isAuthenticated: false,
  user: null,
  token: null,

  login: async (email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:5197/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      if (!response.ok) {
        return false
      }

      const data = await response.json()

      const token = data.token || ''
      const user = data.user || data.student || data

      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))

      set({
        isAuthenticated: true,
        user,
        token
      })

      return true
    } catch {
      return false
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    set({
      isAuthenticated: false,
      user: null,
      token: null
    })
  },

  loadUserFromStorage: () => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    if (user) {
      set({
        isAuthenticated: true,
        user: JSON.parse(user),
        token
      })
    }
  }
}))