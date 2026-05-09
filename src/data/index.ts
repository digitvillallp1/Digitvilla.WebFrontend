import { User, MonthlyPaymentStatus, Payment, Receipt } from '@/types'

export const currentUser: User = {
  id: 'USR001',
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1234567890',
  plan: 'Professional Plan'
}

export const billingMonths: MonthlyPaymentStatus[] = [
  { id: '05cf566f-a978-4775-8df3-3ae3e8b4f539', month: 'January', year: 2026, status: 'paid', amount: 500 },
  { id: '15cf566f-a978-4775-8df3-3ae3e8b4f540', month: 'February', year: 2026, status: 'paid', amount: 500 },
  { id: '25cf566f-a978-4775-8df3-3ae3e8b4f541', month: 'March', year: 2026, status: 'paid', amount: 500 },
  { id: '35cf566f-a978-4775-8df3-3ae3e8b4f542', month: 'April', year: 2026, status: 'pending', amount: 500 },
  { id: '45cf566f-a978-4775-8df3-3ae3e8b4f543', month: 'May', year: 2026, status: 'pending', amount: 500 },
  { id: '55cf566f-a978-4775-8df3-3ae3e8b4f544', month: 'June', year: 2026, status: 'pending', amount: 500 },
  { id: '65cf566f-a978-4775-8df3-3ae3e8b4f545', month: 'July', year: 2026, status: 'pending', amount: 500 },
  { id: '75cf566f-a978-4775-8df3-3ae3e8b4f546', month: 'August', year: 2026, status: 'pending', amount: 500 },
  { id: '85cf566f-a978-4775-8df3-3ae3e8b4f547', month: 'September', year: 2026, status: 'pending', amount: 500 },
  { id: '95cf566f-a978-4775-8df3-3ae3e8b4f548', month: 'October', year: 2026, status: 'pending', amount: 500 },
  { id: 'a5cf566f-a978-4775-8df3-3ae3e8b4f549', month: 'November', year: 2026, status: 'pending', amount: 500 },
  { id: 'b5cf566f-a978-4775-8df3-3ae3e8b4f550', month: 'December', year: 2026, status: 'pending', amount: 500 },
]

export const payments: Payment[] = [
  {
    id: 'PAY001',
    transactionId: 'TXN123456',
    date: '2024-01-15',
    amount: 1500,
    months: ['January', 'February', 'March'],
    mode: 'UPI'
  },
  {
    id: 'PAY002',
    transactionId: 'TXN123457',
    date: '2024-02-20',
    amount: 500,
    months: ['April'],
    mode: 'Credit Card'
  }
]

export const receipts: Receipt[] = [
  {
    id: 'REC001',
    receiptNumber: 'RCP001',
    userName: 'John Doe',
    userId: 'USR001',
    plan: 'Professional Plan',
    paidMonths: ['January', 'February', 'March'],
    amount: 1500,
    paymentMode: 'UPI',
    transactionId: 'TXN123456',
    date: '2024-01-15'
  },
  {
    id: 'REC002',
    receiptNumber: 'RCP002',
    userName: 'John Doe',
    userId: 'USR001',
    plan: 'Professional Plan',
    paidMonths: ['April'],
    amount: 500,
    paymentMode: 'Credit Card',
    transactionId: 'TXN123457',
    date: '2024-02-20'
  }
]