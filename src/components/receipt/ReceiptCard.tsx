import { Download, Printer } from "lucide-react";

export default function ReceiptCard() {
  return (
    <div className="w-full rounded-[14px] border border-[#dfe4f0] bg-white p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-[24px] font-bold text-[#07185f]">
            Payment Receipt
          </h1>
          <p className="mt-1 text-[13px] text-[#6b7280]">
            View and download your fee payment receipt
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex h-[40px] items-center gap-2 rounded-md border border-[#25249c] px-5 text-[13px] font-semibold text-[#25249c]">
            <Printer className="h-4 w-4" />
            Print
          </button>

          <button className="flex h-[40px] items-center gap-2 rounded-md bg-[#25249c] px-5 text-[13px] font-semibold text-white">
            <Download className="h-4 w-4" />
            Download
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[760px] rounded-[12px] border border-[#dfe4f0] bg-white p-7 shadow-[0_10px_28px_rgba(15,23,42,0.07)]">
        <div className="border-b border-[#e4e8f2] pb-5 text-center">
          <h2 className="text-[38px] font-extrabold leading-none text-[#111f7a]">
            digit<span className="text-[#4d4cf5]">villa</span>
          </h2>

          <p className="mt-2 text-[12px] text-[#374151]">
            Digital Future, Infinite Possibilities
          </p>

          <h3 className="mt-5 text-[20px] font-bold text-[#07185f]">
            Fee Payment Receipt
          </h3>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-y-3 text-[14px]">
          <p className="font-medium text-[#374151]">Receipt No.</p>
          <p className="text-right font-bold text-[#07185f]">DVREC2026001</p>

          <p className="font-medium text-[#374151]">Transaction ID</p>
          <p className="text-right font-bold text-[#07185f]">DVTXN2026001</p>

          <p className="font-medium text-[#374151]">Payment Date</p>
          <p className="text-right font-bold text-[#07185f]">15 Jul 2026</p>

          <p className="font-medium text-[#374151]">Payment Method</p>
          <p className="text-right font-bold text-[#07185f]">UPI</p>
        </div>

        <div className="mt-5 rounded-[10px] bg-[#f7f8ff] p-5">
          <h4 className="text-[16px] font-bold text-[#07185f]">
            Student Details
          </h4>

          <div className="mt-3 grid grid-cols-2 gap-y-3 text-[14px]">
            <p className="font-medium text-[#374151]">Student Name</p>
            <p className="text-right font-bold text-[#07185f]">Rahul Sharma</p>

            <p className="font-medium text-[#374151]">Student ID</p>
            <p className="text-right font-bold text-[#07185f]">DV2024001</p>

            <p className="font-medium text-[#374151]">Course</p>
            <p className="text-right font-bold text-[#07185f]">
              Digital Marketing
            </p>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-[10px] border border-[#dfe4f0]">
          <table className="w-full text-[14px]">
            <thead className="bg-[#eef0ff] text-[#07185f]">
              <tr>
                <th className="px-5 py-3 text-left font-bold">Description</th>
                <th className="px-5 py-3 text-center font-bold">Months</th>
                <th className="px-5 py-3 text-right font-bold">Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-[#e4e8f2]">
                <td className="px-5 py-4 text-[#07185f]">
                  Monthly Course Fee
                </td>
                <td className="px-5 py-4 text-center font-medium text-[#07185f]">
                  Jun 2026, Jul 2026
                </td>
                <td className="px-5 py-4 text-right font-bold text-[#07185f]">
                  ₹ 6,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex items-center justify-between rounded-[10px] bg-[#eaf8ef] px-5 py-4">
          <p className="text-[16px] font-bold text-[#11823b]">
            Total Paid Amount
          </p>

          <p className="text-[24px] font-extrabold text-[#11823b]">
            ₹ 6,000
          </p>
        </div>

        <div className="mt-5 text-center">
          <span className="rounded-md bg-[#eaf8ef] px-5 py-2 text-[13px] font-bold text-[#11823b]">
            Payment Status: Paid
          </span>
        </div>

        <p className="mt-5 text-center text-[12px] text-[#6b7280]">
          This is a computer generated receipt and does not require signature.
        </p>
      </div>
    </div>
  );
}