export interface User {
  id: string
  name: string
  email: string
  phone: string
  plan: string
}

export interface UserProfile extends User {
  address?: string
  dateOfBirth?: string
  gender?: string
  nationality?: string
}

export interface BillingPlan {
  id: string
  name: string
  amount: number
  description?: string
}

export interface MonthlyPaymentStatus {
  id: string
  month: string
  year: number
  status: 'paid' | 'pending'
  amount: number
}

export interface PaymentStatus {
  status: 'paid' | 'pending'
  totalPaid: number
  totalPending: number
}

export interface Payment {
  id: string
  transactionId: string
  date: string
  amount: number
  months: string[]
  mode: string
}

export interface PaymentHistory extends Payment {}

export interface Receipt {
  id: string
  receiptNumber: string
  userName: string
  userId: string
  plan: string
  paidMonths: string[]
  amount: number
  paymentMode: string
  transactionId: string
  date: string
}

export interface Notice {
  id: string
  title: string
  content: string
  date: string
  category: string
}

export interface SupportTicket {
  id: string
  subject: string
  message: string
  status: 'open' | 'closed'
  date: string
}