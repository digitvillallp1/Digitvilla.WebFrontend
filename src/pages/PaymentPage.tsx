import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useFeeStore } from '@/stores/useFeeStore'
import { useNavigate } from 'react-router-dom'

export default function PaymentPage() {
  const navigate = useNavigate()
  const { feeMonths, selectedMonths } = useFeeStore()

  const selectedFeeMonths = feeMonths.filter(f => selectedMonths.includes(f.month))
  const totalAmount = selectedFeeMonths.reduce((sum, f) => sum + f.amount, 0)

  const handlePay = () => {
    navigate('/payment-success')
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-[2rem] bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <h1 className="text-4xl font-bold">Payment Details</h1>
          <p className="mt-2 text-slate-400">Review your selected months and choose a payment option to complete the checkout.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="bg-slate-900/95 p-6">
            <CardHeader>
              <CardTitle>Payment Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {selectedFeeMonths.map(fee => (
                  <div key={fee.month} className="flex items-center justify-between rounded-3xl bg-slate-950/80 p-4">
                    <span>{fee.month}</span>
                    <span className="font-semibold">${fee.amount}</span>
                  </div>
                ))}
                <div className="mt-4 rounded-3xl bg-slate-950/80 p-4">
                  <div className="flex justify-between text-slate-400">Total Amount</div>
                  <div className="mt-2 flex items-center justify-between text-3xl font-semibold text-white">${totalAmount}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/95 p-6">
            <CardHeader>
              <CardTitle>Choose Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button variant="outline" className="w-full justify-between">UPI / QR Code</Button>
                <Button variant="outline" className="w-full justify-between">Credit / Debit Card</Button>
                <Button variant="outline" className="w-full justify-between">Net Banking</Button>
                <Button variant="outline" className="w-full justify-between">Wallets</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-slate-400">You are paying for {selectedMonths.length} month(s).</div>
          <Button size="lg" className="w-full sm:w-auto" onClick={handlePay}>Pay Now</Button>
        </div>
      </div>
    </div>
  )
}
