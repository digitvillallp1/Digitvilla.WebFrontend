import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter } from '@/components/ui/sidebar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { currentUser } from '@/data'
import { useFeeStore } from '@/stores/useFeeStore'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/useAuthStore'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Sparkles, ShieldCheck, Clock3 } from 'lucide-react'

const menuItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'My Profile', path: '/profile' },
  { name: 'Fee Payment', path: '/select-months' },
  { name: 'Payment History', path: '/history' },
  { name: 'Receipts', path: '/receipts' },
  { name: 'Notices', path: '/notices' },
  { name: 'Support', path: '/support' },
]

export default function DashboardPage() {
  const navigate = useNavigate()
  const logout = useAuthStore(state => state.logout)
  const { feeMonths, receipts } = useFeeStore()

  const totalFees = feeMonths.reduce((sum, fee) => sum + fee.amount, 0)
  const paidFees = feeMonths.filter(f => f.status === 'paid').reduce((sum, fee) => sum + fee.amount, 0)
  const pendingFees = totalFees - paidFees

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="flex h-screen overflow-hidden theme-background text-[var(--text)]">
      <Sidebar>
        <SidebarHeader>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Digitvilla</h2>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Student portal</p>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <nav className="space-y-2">
            {menuItems.map(item => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start text-left text-[var(--text)] hover:bg-[rgba(148,163,184,0.12)]"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </Button>
            ))}
          </nav>
        </SidebarContent>
        <SidebarFooter>
          <Button variant="outline" className="w-full" onClick={handleLogout}>Logout</Button>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 overflow-auto p-6">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Welcome back, {currentUser.name}</h1>
            <p className="mt-1 text-[var(--muted)]">Manage fees, receipts, and upcoming payments from one place.</p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <ThemeToggle />
            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-3xl theme-surface px-4 py-3 text-sm text-[var(--text)] shadow-lg shadow-slate-950/10">
                <span className="block text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Course</span>
                <span className="font-semibold">{currentUser.course}</span>
              </div>
              <div className="rounded-3xl theme-surface px-4 py-3 text-sm text-[var(--text)] shadow-lg shadow-slate-950/10">
                <span className="block text-xs uppercase tracking-[0.2em] text-[var(--muted)]">ID</span>
                <span className="font-semibold">{currentUser.id}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 mb-6">
          <Card className="border-blue-500/20 p-6">
            <div className="flex items-center gap-3 text-[var(--text)]">
              <Sparkles className="h-6 w-6 text-cyan-400" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Total Fees</p>
                <p className="mt-2 text-3xl font-semibold">${totalFees}</p>
              </div>
            </div>
          </Card>
          <Card className="border-emerald-500/20 p-6">
            <div className="flex items-center gap-3 text-[var(--text)]">
              <ShieldCheck className="h-6 w-6 text-emerald-400" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Paid Fees</p>
                <p className="mt-2 text-3xl font-semibold">${paidFees}</p>
              </div>
            </div>
          </Card>
          <Card className="border-rose-500/20 p-6">
            <div className="flex items-center gap-3 text-[var(--text)]">
              <Clock3 className="h-6 w-6 text-rose-400" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Pending Fees</p>
                <p className="mt-2 text-3xl font-semibold">${pendingFees}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Monthly Fee Status</CardTitle>
                <CardDescription>Track your payment status for each month.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {feeMonths.map(fee => (
                    <div key={fee.month} className="rounded-3xl border theme-border theme-surface p-4 text-center shadow-sm shadow-slate-950/20">
                      <p className="text-sm font-semibold text-[var(--text)]">{fee.month}</p>
                      <Badge variant={fee.status === 'paid' ? 'green' : 'red'} className="mt-3 inline-flex py-1 px-3 text-xs" >
                        {fee.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Receipts</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Receipt #</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {receipts.slice(0, 4).map(receipt => (
                      <TableRow key={receipt.id}>
                        <TableCell>{receipt.receiptNumber}</TableCell>
                        <TableCell>{receipt.date}</TableCell>
                        <TableCell>${receipt.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent>
                <h2 className="text-xl font-semibold">Quick Pay</h2>
                <p className="mt-2 text-[var(--muted)]">Select pending months and complete payment instantly.</p>
                <div className="mt-6">
                  <Button size="lg" className="w-full" onClick={() => navigate('/select-months')}>
                    Pay Now
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Student Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-[var(--text)]">
                  <div><span className="text-[var(--muted)]">Name:</span> {currentUser.name}</div>
                  <div><span className="text-[var(--muted)]">Email:</span> {currentUser.email}</div>
                  <div><span className="text-[var(--muted)]">Phone:</span> {currentUser.phone}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}