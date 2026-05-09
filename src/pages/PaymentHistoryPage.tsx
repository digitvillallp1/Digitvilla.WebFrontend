import {
  CalendarDays,
  CheckCircle,
  Download,
  Filter,
  Receipt,
  Search,
} from "lucide-react";
import UserSidebar from "../components/user-dashboard/UserSidebar";
import UserHeader from "../components/user-dashboard/UserHeader";

const payments = [
  {
    id: "DVTXN2026001",
    periods: "Jun 2026, Jul 2026",
    date: "15 Jul 2026",
    amount: "₹ 6,000",
    method: "UPI",
    status: "Paid",
  },
  {
    id: "DVTXN2026002",
    periods: "Apr 2026",
    date: "05 Apr 2026",
    amount: "₹ 3,000",
    method: "Card",
    status: "Paid",
  },
  {
    id: "DVTXN2026003",
    periods: "Mar 2026",
    date: "15 Mar 2026",
    amount: "₹ 3,000",
    method: "Net Banking",
    status: "Paid",
  },
  {
    id: "DVTXN2026004",
    periods: "Feb 2026",
    date: "15 Feb 2026",
    amount: "₹ 3,000",
    method: "UPI",
    status: "Paid",
  },
];

export default function PaymentHistoryPage() {
  return (
    <main className="h-screen w-full overflow-hidden bg-white">
      <div className="flex h-full w-full">
        <UserSidebar />

        <section className="flex-1 overflow-y-auto px-8 py-7">
          <UserHeader />
          <div className="mt-6 min-h-[calc(100vh-140px)] rounded-[14px] border border-[#dfe4f0] bg-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[28px] font-bold text-[#07185f]">
                  Payment History
                </h1>
                <p className="mt-1 text-[12px] text-[#7b8499] md:text-[13px]">
                  Track all your previous transactions
                </p>
              </div>

              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#eef0ff] text-[#25249c]">
                <Receipt className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="rounded-[10px] border border-[#ccd2ff] bg-[#eef0ff] p-5">
                <p className="text-[13px] font-semibold text-[#25249c]">
                  Total Paid
                </p>
                <h2 className="mt-3 text-[30px] font-bold text-[#07185f]">
                  ₹ 24,000
                </h2>
              </div>

              <div className="rounded-[10px] border border-[#c9efd7] bg-[#eaf8ef] p-5">
                <p className="text-[13px] font-semibold text-[#11823b]">
                  Successful Payments
                </p>
                <h2 className="mt-3 text-[30px] font-bold text-[#07185f]">
                  08
                </h2>
              </div>

              <div className="rounded-[10px] border border-[#ffd2d2] bg-[#fff0f0] p-5">
                <p className="text-[13px] font-semibold text-[#dc2626]">
                  Pending Amount
                </p>
                <h2 className="mt-3 text-[30px] font-bold text-[#07185f]">
                  ₹ 12,000
                </h2>
              </div>
            </div>

            <div className="mt-8 rounded-[12px] border border-[#dfe4f0] bg-white p-6">
              <div className="flex flex-col gap-4 justify-between md:flex-row md:items-center">
                <h2 className="text-[20px] font-bold text-[#07185f]">
                  Transactions
                </h2>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7b8499]" />
                    <input
                      type="text"
                      placeholder="Search transaction"
                      className="h-[42px] w-full rounded-md border border-[#dfe4f0] bg-white pl-10 pr-4 text-[13px] outline-none placeholder:text-[#8a94a8] focus:border-[#25249c] md:w-[240px]"
                    />
                  </div>

                  <button className="flex h-[42px] items-center gap-2 rounded-md border border-[#dfe4f0] px-4 text-[13px] font-semibold text-[#07185f]">
                    <Filter className="h-4 w-4" />
                    Filter
                  </button>
                </div>
              </div>

              <div className="mt-5 overflow-x-auto rounded-[10px] border border-[#dfe4f0]">
                <table className="w-full text-[14px]">
                  <thead className="bg-[#eef0ff] text-[#07185f]">
                    <tr>
                      <th className="px-5 py-4 text-left font-bold whitespace-nowrap">
                        Transaction ID
                      </th>
                      <th className="px-5 py-4 text-left font-bold whitespace-nowrap">
                        Periods
                      </th>
                      <th className="px-5 py-4 text-left font-bold whitespace-nowrap">Date</th>
                      <th className="px-5 py-4 text-left font-bold whitespace-nowrap">
                        Method
                      </th>
                      <th className="px-5 py-4 text-right font-bold whitespace-nowrap">
                        Amount
                      </th>
                      <th className="px-5 py-4 text-center font-bold whitespace-nowrap">
                        Status
                      </th>
                      <th className="px-5 py-4 text-center font-bold whitespace-nowrap">
                        Receipt
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {payments.map((payment) => (
                      <tr
                        key={payment.id}
                        className="border-t border-[#e4e8f2]"
                      >
                        <td className="px-5 py-4 font-bold text-[#07185f]">
                          {payment.id}
                        </td>

                        <td className="px-5 py-4 text-[#374151]">
                          {payment.periods}
                        </td>

                        <td className="px-5 py-4 text-[#374151]">
                          <span className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-[#7b8499]" />
                            {payment.date}
                          </span>
                        </td>

                        <td className="px-5 py-4 font-medium text-[#07185f]">
                          {payment.method}
                        </td>

                        <td className="px-5 py-4 text-right font-bold text-[#07185f]">
                          {payment.amount}
                        </td>

                        <td className="px-5 py-4 text-center">
                          <span className="inline-flex items-center gap-1 rounded-md bg-[#eaf8ef] px-3 py-1 text-[12px] font-bold text-[#11823b]">
                            <CheckCircle className="h-3.5 w-3.5" />
                            Paid
                          </span>
                        </td>

                        <td className="px-5 py-4 text-center">
                          <button className="inline-flex h-8 items-center gap-2 rounded-md bg-[#f3f5ff] px-3 text-[12px] font-bold text-[#25249c]">
                            <Download className="h-3.5 w-3.5" />
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 flex flex-col gap-4 items-center justify-between text-[13px] text-[#6b7280] md:flex-row">
                <p>Showing 4 of 8 transactions</p>

                <div className="flex gap-2">
                  <button className="h-8 rounded-md border border-[#dfe4f0] px-3 font-semibold text-[#07185f]">
                    Previous
                  </button>
                  <button className="h-8 rounded-md bg-[#25249c] px-3 font-semibold text-white">
                    1
                  </button>
                  <button className="h-8 rounded-md border border-[#dfe4f0] px-3 font-semibold text-[#07185f]">
                    2
                  </button>
                  <button className="h-8 rounded-md border border-[#dfe4f0] px-3 font-semibold text-[#07185f]">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}