import { UserProfile, BillingPlan, MonthlyPaymentStatus, Payment, Receipt, Notice, SupportTicket } from '@/types'
import { apiClient } from './apiClient'

export const getUserProfile = async (userId: string): Promise<UserProfile> => {
  return apiClient(`/api/users/profile?userId=${userId}`)
}

export const updateUserProfile = async (profile: Partial<UserProfile>): Promise<UserProfile> => {
  return apiClient('/api/users/profile', {
    method: 'PUT',
    body: JSON.stringify(profile)
  })
}

export const getBillingPlans = async (): Promise<BillingPlan[]> => {
  return apiClient('/api/billing-plans')
}

export const getMonthlyPaymentStatus = async (): Promise<MonthlyPaymentStatus[]> => {
  return apiClient('/api/monthly-payments')
}

export const getPayments = async (): Promise<Payment[]> => {
  return apiClient('/api/payments')
}

export const getPaymentHistory = async (userId: string): Promise<Payment[]> => {
  return apiClient(`/api/payments/history/user/${userId}`)
}

export const getUserReceipts = async (userId: string): Promise<Receipt[]> => {
  return apiClient(`/api/receipts/user/${userId}`)
}

export const makePayment = async (paymentData: any): Promise<any> => {
  return apiClient('/api/payments', {
    method: 'POST',
    body: JSON.stringify(paymentData)
  })
}

export const getNotices = async (): Promise<Notice[]> => {
  return apiClient('/api/notices')
}

export const submitSupportRequest = async (ticket: Partial<SupportTicket>): Promise<SupportTicket> => {
  return apiClient('/api/support', {
    method: 'POST',
    body: JSON.stringify(ticket)
  })
}
