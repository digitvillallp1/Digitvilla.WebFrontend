import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuthStore } from '@/stores/useAuthStore'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LogIn } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

type LoginForm = z.infer<typeof loginSchema>

export default function LoginPage() {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)
  const [loginError, setLoginError] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginForm) => {
    setLoginError('')
    setLoading(true)

    const success = await login(data.email, data.password)

    setLoading(false)

    if (success) {
      navigate('/dashboard')
    } else {
      setLoginError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen theme-background text-[var(--text)]">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-8 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.24),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_20%)]" />
        <div className="relative grid gap-8 rounded-[2rem] border theme-border theme-surface p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl md:grid-cols-[420px_1fr]">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-slate-900 to-violet-700 p-10 text-slate-100">
            <div className="absolute -right-16 top-0 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-sky-200/70">Digitvilla</p>
                <h1 className="mt-6 text-4xl font-bold leading-tight">Next-gen fee payments for students</h1>
                <p className="mt-4 text-sm text-slate-200/80">A polished dashboard, payment flow, and receipt experience designed for modern campuses.</p>
              </div>
              <div className="space-y-3 rounded-3xl bg-white/10 p-5 text-sm text-slate-200 shadow-inner shadow-slate-950/20">
                <p className="font-semibold">Configurable theme</p>
                <p className="text-slate-300">Switch between the dark portal and Digitvilla blue style anytime.</p>
              </div>
            </div>
          </div>

          <Card className="rounded-[1.75rem] border border-slate-200/5 bg-white/95 text-slate-950 shadow-2xl shadow-slate-950/10">
            <CardHeader className="flex flex-col gap-4 px-8 pt-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle className="text-3xl font-semibold text-slate-950">Welcome Back</CardTitle>
                  <CardDescription className="text-slate-500">Login to your student portal and pay fees in a few clicks.</CardDescription>
                </div>
                <ThemeToggle />
              </div>
            </CardHeader>

            <CardContent className="px-8 pb-10 pt-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="Enter Email"
                    className="w-full bg-slate-100 text-slate-900"
                  />
                  {errors.email && <p className="mt-2 text-sm text-rose-500">{errors.email.message}</p>}
                </div>

                <div>
                  <Input
                    {...register('password')}
                    type="password"
                    placeholder="Enter Password"
                    className="w-full bg-slate-100 text-slate-900"
                  />
                  {errors.password && <p className="mt-2 text-sm text-rose-500">{errors.password.message}</p>}
                </div>

                {loginError && <p className="text-sm text-rose-500">{loginError}</p>}

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </Button>

                <Button type="button" variant="ghost" className="w-full text-slate-700">
                  Forgot Password?
                </Button>

                <Button type="button" variant="outline" className="w-full gap-2 text-slate-900">
                  <LogIn className="h-4 w-4" />
                  Login with Google
                </Button>
        
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}