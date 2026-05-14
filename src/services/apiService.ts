import { UserProfile, BillingPlan, MonthlyPaymentStatus, Payment, Receipt, Notice, SupportTicket } from '@/types'
import { apiClient } from './apiClient'

export const getUserProfile = async (userId: string): Promise<UserProfile> => {
  return apiClient(`/users/profile?userId=${userId}`)
}

export const updateUserProfile = async (profile: Partial<UserProfile>): Promise<UserProfile> => {
  return apiClient('/users/profile', {
    method: 'PUT',
    body: JSON.stringify(profile)
  })
}

export const getBillingPlans = async (): Promise<BillingPlan[]> => {
  return apiClient('/billing-plans')
}

export const getMonthlyPaymentStatus = async (): Promise<MonthlyPaymentStatus[]> => {
  return apiClient('/monthly-payments')
}

export const getPayments = async (): Promise<Payment[]> => {
  return apiClient('/payments')
}

export const getPaymentHistory = async (userId: string): Promise<Payment[]> => {
  return apiClient(`/payments/history/user/${userId}`)
}

export const getUserReceipts = async (userId: string): Promise<Receipt[]> => {
  return apiClient(`/receipts/user/${userId}`)
}

export const makePayment = async (paymentData: any): Promise<any> => {
  return apiClient('/payments', {
    method: 'POST',
    body: JSON.stringify(paymentData)
  })
}

export const getNotices = async (): Promise<Notice[]> => {
  return apiClient('/notices')
}

export const submitSupportRequest = async (ticket: Partial<SupportTicket>): Promise<SupportTicket> => {
  return apiClient('/support', {
    method: 'POST',
    body: JSON.stringify(ticket)
  })
}