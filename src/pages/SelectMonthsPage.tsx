import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useBillingStore } from '@/stores/useBillingStore'
import { useNavigate } from 'react-router-dom'
import { MonthlyPaymentStatus } from '@/types'

export default function SelectMonthsPage() {
  const navigate = useNavigate()
  const { billingMonths, selectedMonths, setSelectedMonths } = useBillingStore()

  const toggleMonth = (month: string) => {
    if (selectedMonths.includes(month)) {
      setSelectedMonths(selectedMonths.filter(m => m !== month))
    } else {
      setSelectedMonths([...selectedMonths, month])
    }
  }

  const selectedBillingMonths = billingMonths.filter((f: MonthlyPaymentStatus) => selectedMonths.includes(f.month))
  const totalAmount = selectedBillingMonths.reduce((sum: number, f: MonthlyPaymentStatus) => sum + f.amount, 0)

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-[2rem] bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Payment selection</p>
            <h1 className="mt-3 text-4xl font-bold">Select months to pay</h1>
            <p className="mt-2 max-w-2xl text-slate-400">Choose pending months and preview the total balance before checkout.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl bg-slate-800 p-5 shadow-lg shadow-slate-950/40">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Selected</p>
              <p className="mt-3 text-3xl font-semibold text-white">{selectedMonths.length}</p>
            </div>
            <div className="rounded-3xl bg-slate-800 p-5 shadow-lg shadow-slate-950/40">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Total amount</p>
              <p className="mt-3 text-3xl font-semibold text-white">${totalAmount}</p>
            </div>
            <div className="rounded-3xl bg-slate-800 p-5 shadow-lg shadow-slate-950/40">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Pending months</p>
              <p className="mt-3 text-3xl font-semibold text-white">{billingMonths.filter((f: MonthlyPaymentStatus) => f.status === 'pending').length}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.7fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {billingMonths.map((bill: MonthlyPaymentStatus) => (
              <Card
                key={bill.month}
                className={`cursor-pointer border-2 transition ${selectedMonths.includes(bill.month) ? 'border-cyan-400 bg-slate-800/90 shadow-cyan-400/20' : 'border-slate-800 bg-slate-900'} hover:border-cyan-300`}
                onClick={() => bill.status === 'pending' && toggleMonth(bill.month)}
              >
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-semibold text-white">{bill.month}</p>
                  <Badge variant={bill.status === 'paid' ? 'green' : 'red'} className="mt-4" />
                  <p className="mt-4 text-2xl font-semibold text-white">${bill.amount}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-slate-900/95 p-6">
            <CardHeader>
              <CardTitle>Review selection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {selectedBillingMonths.length ? selectedBillingMonths.map((bill: MonthlyPaymentStatus) => (
                  <div key={bill.month} className="flex items-center justify-between rounded-2xl bg-slate-950/70 p-4">
                    <span>{bill.month}</span>
                    <span>${bill.amount}</span>
                  </div>
                )) : (
                  <p className="text-slate-400">No months selected yet. Click pending months to add them.</p>
                )}
                <div className="mt-4 rounded-2xl bg-slate-950/70 p-4">
                  <div className="flex justify-between text-slate-400">Total</div>
                  <div className="mt-2 flex items-center justify-between text-2xl font-semibold text-white">${totalAmount}</div>
                </div>
                <Button size="lg" className="w-full" disabled={!selectedMonths.length} onClick={() => navigate('/payment-checkout')}>
                  Proceed to Pay
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
