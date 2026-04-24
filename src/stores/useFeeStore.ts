import create from 'zustand'
import { FeeMonth, Payment, Receipt } from '@/types'
import { feeMonths, payments, receipts } from '@/data'

interface FeeState {
  feeMonths: FeeMonth[]
  payments: Payment[]
  receipts: Receipt[]
  selectedMonths: string[]
  setSelectedMonths: (months: string[]) => void
}

export const useFeeStore = create<FeeState>((set) => ({
  feeMonths,
  payments,
  receipts,
  selectedMonths: [],
  setSelectedMonths: (selectedMonths) => set({ selectedMonths })
}))