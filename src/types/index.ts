export interface User {
  id: string
  name: string
  email: string
  phone: string
  course: string
}

export interface FeeMonth {
  month: string
  year: number
  status: 'paid' | 'pending'
  amount: number
}

export interface Payment {
  id: string
  transactionId: string
  date: string
  amount: number
  months: string[]
  mode: string
}

export interface Receipt {
  id: string
  receiptNumber: string
  studentName: string
  studentId: string
  course: string
  paidMonths: string[]
  amount: number
  paymentMode: string
  transactionId: string
  date: string
}