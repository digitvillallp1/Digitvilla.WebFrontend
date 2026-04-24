import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { currentUser } from '@/data'

export default function ReceiptPage() {
  const receipt = {
    receiptNumber: 'RCP003',
    studentName: currentUser.name,
    studentId: currentUser.id,
    course: currentUser.course,
    paidMonths: ['May', 'June'],
    amount: 1000,
    paymentMode: 'UPI',
    transactionId: 'TXN123458',
    date: '2024-05-01'
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-3xl">
        <Card className="rounded-[2rem] bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/40">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-white">Digitvilla</CardTitle>
            <p className="mt-2 text-slate-400">Fee Payment Receipt</p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/70 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Receipt number</p>
                <p className="mt-2 text-lg font-semibold text-white">{receipt.receiptNumber}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Date</p>
                <p className="mt-2 text-lg font-semibold text-white">{receipt.date}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/70 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Student</p>
                <p className="mt-2 text-lg font-semibold text-white">{receipt.studentName}</p>
                <p className="text-sm text-slate-400">{receipt.studentId}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Course</p>
                <p className="mt-2 text-lg font-semibold text-white">{receipt.course}</p>
                <p className="text-sm text-slate-400">{receipt.paymentMode}</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {receipt.paidMonths.map(month => (
                    <TableRow key={month}>
                      <TableCell>{month}</TableCell>
                      <TableCell>$500</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell className="font-semibold">Total</TableCell>
                    <TableCell className="font-semibold">${receipt.amount}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">PAID</div>
              <Button className="w-full sm:w-auto">Download Receipt</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
