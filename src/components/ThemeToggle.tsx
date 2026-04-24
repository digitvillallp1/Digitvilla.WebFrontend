import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/stores/useThemeStore'

const themes = [
  { id: 'dark', label: 'Dark Mode' },
  { id: 'blue', label: 'Digitvilla Blue' },
]

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme)
  const setTheme = useThemeStore((state) => state.setTheme)

  return (
    <div className="inline-flex flex-wrap items-center gap-2 rounded-3xl border theme-border theme-surface p-2 text-sm shadow-lg shadow-slate-950/20 backdrop-blur-xl text-[var(--text)]">
      <span className="font-medium text-[var(--text)]">Theme</span>
      {themes.map((option) => (
        <Button
          key={option.id}
          size="sm"
          variant={theme === option.id ? 'default' : 'outline'}
          className="font-medium"
          onClick={() => setTheme(option.id as 'dark' | 'blue')}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}
