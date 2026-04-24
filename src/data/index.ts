import { User, FeeMonth, Payment, Receipt } from '@/types'

export const currentUser: User = {
  id: 'STU001',
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1234567890',
  course: 'Computer Science'
}

export const feeMonths: FeeMonth[] = [
  { month: 'January', year: 2024, status: 'paid', amount: 500 },
  { month: 'February', year: 2024, status: 'paid', amount: 500 },
  { month: 'March', year: 2024, status: 'paid', amount: 500 },
  { month: 'April', year: 2024, status: 'pending', amount: 500 },
  { month: 'May', year: 2024, status: 'pending', amount: 500 },
  { month: 'June', year: 2024, status: 'pending', amount: 500 },
  { month: 'July', year: 2024, status: 'pending', amount: 500 },
  { month: 'August', year: 2024, status: 'pending', amount: 500 },
  { month: 'September', year: 2024, status: 'pending', amount: 500 },
  { month: 'October', year: 2024, status: 'pending', amount: 500 },
  { month: 'November', year: 2024, status: 'pending', amount: 500 },
  { month: 'December', year: 2024, status: 'pending', amount: 500 },
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
    studentName: 'John Doe',
    studentId: 'STU001',
    course: 'Computer Science',
    paidMonths: ['January', 'February', 'March'],
    amount: 1500,
    paymentMode: 'UPI',
    transactionId: 'TXN123456',
    date: '2024-01-15'
  },
  {
    id: 'REC002',
    receiptNumber: 'RCP002',
    studentName: 'John Doe',
    studentId: 'STU001',
    course: 'Computer Science',
    paidMonths: ['April'],
    amount: 500,
    paymentMode: 'Credit Card',
    transactionId: 'TXN123457',
    date: '2024-02-20'
  }
]