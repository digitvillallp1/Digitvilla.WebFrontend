import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useBillingStore } from "../../stores/useBillingStore";

export default function SelectMonthsCard() {
  const navigate = useNavigate();
  const { billingMonths, selectedMonths, setSelectedMonths } = useBillingStore();

  const togglePeriod = (monthName: string) => {
    const monthData = billingMonths.find(m => m.month === monthName);
    if (monthData?.status === 'paid') return;

    setSelectedMonths(
      selectedMonths.includes(monthName)
        ? selectedMonths.filter((m) => m !== monthName)
        : [...selectedMonths, monthName]
    );
  };

  const totalAmount = billingMonths
    .filter(m => selectedMonths.includes(m.month))
    .reduce((sum, m) => sum + m.amount, 0);

  return (
    <div className="w-full">
      <h1 className="text-[26px] font-bold text-[#07185f]">
        Select Billing Periods
      </h1>

      <p className="mt-1 text-[12px] text-[#7b8499]">
        Select one or more periods you want to pay for
      </p>

      <div className="mt-8 border-t border-[#e4e8f2] pt-5">
        <div className="flex items-center justify-between">
          <button type="button" className="text-[#07185f]">
            <ArrowLeft className="h-5 w-5" />
          </button>

          <h2 className="text-[24px] font-bold text-[#07185f]">2026</h2>

          <button type="button" className="text-[#07185f]">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-6 gap-5">
          {billingMonths.map((bill) => {
            const selected = selectedMonths.includes(bill.month);
            const isPaid = bill.status === 'paid';

            return (
              <button
                key={bill.id}
                type="button"
                disabled={isPaid}
                onClick={() => togglePeriod(bill.month)}
                className={`relative h-[96px] rounded-md border text-center transition ${
                  selected
                    ? "border-[#25249c] bg-[#eef0ff]"
                    : isPaid
                    ? "border-[#c9efd7] bg-[#eaf8ef] cursor-not-allowed"
                    : "border-[#dfe4f0] bg-white hover:border-[#25249c]/30"
                }`}
              >
                {selected && (
                  <CheckCircle className="absolute right-2 top-2 h-4 w-4 fill-[#25249c] text-[#25249c]" />
                )}

                <p className="text-[13px] font-bold text-[#07185f]">
                  {bill.month.substring(0, 3)}
                </p>

                <p
                  className={`mt-3 text-[11px] font-semibold ${
                    isPaid
                      ? "text-[#11823b]"
                      : selected
                      ? "text-[#25249c]"
                      : "text-[#111827]"
                  }`}
                >
                  {isPaid ? "Paid" : "Pending"}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-10 border-t border-[#e4e8f2] pt-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-[13px] font-semibold text-[#07185f]">
                Selected Periods:{" "}
                <span className="font-medium text-slate-500">
                  {selectedMonths.length
                    ? selectedMonths.map((p) => `${p} 2026`).join(", ")
                    : "None"}
                </span>
              </p>
              {totalAmount > 0 && (
                <p className="text-[14px] font-bold text-[#25249c]">
                  Total Amount: ₹{totalAmount.toLocaleString()}
                </p>
              )}
            </div>

            <button
              type="button"
              disabled={selectedMonths.length === 0}
              onClick={() => navigate("/payment-checkout")}
              className="flex h-[48px] items-center gap-5 rounded-md bg-[#25249c] px-7 text-[13px] font-semibold text-white transition-all hover:bg-[#1a1980] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Proceed to Pay
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}