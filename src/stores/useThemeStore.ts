import create from 'zustand'

type ThemeOption = 'dark' | 'blue'

interface ThemeState {
  theme: ThemeOption
  setTheme: (theme: ThemeOption) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'dark',
  setTheme: (theme) => set({ theme }),
}))
