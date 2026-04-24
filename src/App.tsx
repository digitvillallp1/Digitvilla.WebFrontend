import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useThemeStore } from '@/stores/useThemeStore'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import SelectMonthsPage from './pages/SelectMonthsPage'
import PaymentPage from './pages/PaymentPage'
import PaymentSuccessPage from './pages/PaymentSuccessPage'
import ReceiptPage from './pages/ReceiptPage'
import AdminDashboardPage from './pages/AdminDashboardPage'

function App() {
  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/select-months" element={<SelectMonthsPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />
      <Route path="/receipt" element={<ReceiptPage />} />
      <Route path="/admin" element={<AdminDashboardPage />} />
    </Routes>
  )
}

export default App