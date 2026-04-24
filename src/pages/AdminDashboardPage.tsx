import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter } from '@/components/ui/sidebar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { payments } from '@/data'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/useAuthStore'
import { ThemeToggle } from '@/components/ThemeToggle'
import { BarChart, Users, DollarSign, FileText, LayoutDashboard } from 'lucide-react'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const adminMenuItems = [
  { name: 'Dashboard', path: '/admin' },
  { name: 'Users', path: '/admin/users' },
  { name: 'Fee Collections', path: '/admin/collections' },
  { name: 'Payments', path: '/admin/payments' },
  { name: 'Receipts', path: '/admin/receipts' },
  { name: 'Reports', path: '/admin/reports' },
  { name: 'Settings', path: '/admin/settings' },
]

export default function AdminDashboardPage() {
  const navigate = useNavigate()
  const logout = useAuthStore(state => state.logout)

  const totalUsers = 150
  const totalCollections = 75000
  const paidAmount = 60000
  const pendingAmount = 15000

  const chartData = [
    { month: 'Jan', paid: 5000, pending: 1200 },
    { month: 'Feb', paid: 6200, pending: 1700 },
    { month: 'Mar', paid: 5400, pending: 1300 },
    { month: 'Apr', paid: 7100, pending: 1800 },
    { month: 'May', paid: 8600, pending: 2100 },
    { month: 'Jun', paid: 7800, pending: 1650 },
  ]

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-slate-100">
      <Sidebar>
        <SidebarHeader>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Digitvilla Admin</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Operations panel</p>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <nav className="space-y-2">
            {adminMenuItems.map(item => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start text-left text-slate-200 hover:bg-slate-800"
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
            <h1 className="text-4xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="mt-2 text-slate-400">Monitor collections, users, and transaction activity at a glance.</p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <ThemeToggle />
            <div className="inline-flex items-center gap-3 rounded-3xl bg-slate-900 px-5 py-3 shadow-lg shadow-slate-950/40">
              <LayoutDashboard className="h-5 w-5 text-sky-400" />
              <span className="text-sm text-slate-300">Live insights</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-4 mb-6">
          <Card className="bg-slate-900 p-5">
            <div className="flex items-center gap-4">
              <Users className="h-6 w-6 text-cyan-400" />
              <div>
                <div className="text-3xl font-semibold">{totalUsers}</div>
                <div className="text-sm text-slate-400">Total Users</div>
              </div>
            </div>
          </Card>
          <Card className="bg-slate-900 p-5">
            <div className="flex items-center gap-4">
              <DollarSign className="h-6 w-6 text-emerald-400" />
              <div>
                <div className="text-3xl font-semibold">${totalCollections.toLocaleString()}</div>
                <div className="text-sm text-slate-400">Total Collections</div>
              </div>
            </div>
          </Card>
          <Card className="bg-slate-900 p-5">
            <div className="flex items-center gap-4">
              <BarChart className="h-6 w-6 text-lime-400" />
              <div>
                <div className="text-3xl font-semibold">${paidAmount.toLocaleString()}</div>
                <div className="text-sm text-slate-400">Paid Amount</div>
              </div>
            </div>
          </Card>
          <Card className="bg-slate-900 p-5">
            <div className="flex items-center gap-4">
              <FileText className="h-6 w-6 text-rose-400" />
              <div>
                <div className="text-3xl font-semibold">${pendingAmount.toLocaleString()}</div>
                <div className="text-sm text-slate-400">Pending Amount</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-4 xl:grid-cols-[2fr_1fr] mb-6">
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Monthly collections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip wrapperStyle={{ backgroundColor: '#0f172a', borderRadius: 12, border: '1px solid #1e293b' }} />
                    <Legend wrapperStyle={{ color: '#cbd5e1' }} />
                    <Line type="monotone" dataKey="paid" stroke="#22c55e" strokeWidth={3} dot={false} />
                    <Line type="monotone" dataKey="pending" stroke="#f97316" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 p-6 text-slate-100">
            <CardTitle>Need help?</CardTitle>
            <p className="mt-3 text-slate-400">Access reports, review logs, or update settings on the fly.</p>
            <Button className="mt-6 w-full">View reports</Button>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map(payment => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.transactionId}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>${payment.amount}</TableCell>
                    <TableCell>Success</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}