import create from 'zustand'
import { MonthlyPaymentStatus, Payment, Receipt } from '@/types'
import { billingMonths, payments, receipts } from '@/data'

interface BillingState {
  billingMonths: MonthlyPaymentStatus[]
  payments: Payment[]
  receipts: Receipt[]
  selectedMonths: string[]
  setSelectedMonths: (months: string[]) => void
}

export const useBillingStore = create<BillingState>((set) => ({
  billingMonths,
  payments,
  receipts,
  selectedMonths: [],
  setSelectedMonths: (selectedMonths: string[]) => set({ selectedMonths })
}))