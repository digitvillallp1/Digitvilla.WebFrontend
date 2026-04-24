import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useFeeStore } from '@/stores/useFeeStore'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

export default function PaymentSuccessPage() {
  const navigate = useNavigate()
  const { selectedMonths } = useFeeStore()

  const transactionId = 'TXN' + Date.now()
  const date = new Date().toLocaleDateString()
  const time = new Date().toLocaleTimeString()
  const totalAmount = selectedMonths.length * 500

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-md">
        <Card className="rounded-[2rem] bg-slate-900/95 p-8 text-center shadow-2xl shadow-slate-950/40">
          <CardContent>
            <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-emerald-400" />
            <h1 className="text-3xl font-bold">Payment Successful</h1>
            <p className="mt-2 text-slate-400">Your payment has been completed successfully.</p>
            <div className="mt-8 space-y-3 rounded-3xl bg-slate-950/80 p-5 text-left text-sm text-slate-300">
              <div className="flex justify-between"><span>Transaction ID</span><span>{transactionId}</span></div>
              <div className="flex justify-between"><span>Date & Time</span><span>{date} {time}</span></div>
              <div className="flex justify-between"><span>Paid Amount</span><span>${totalAmount}</span></div>
              <div className="flex justify-between"><span>Paid Months</span><span>{selectedMonths.join(', ')}</span></div>
            </div>
            <div className="mt-8 grid gap-3">
              <Button className="w-full">Download Receipt</Button>
              <Button variant="outline" className="w-full" onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
