import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const periods = [
  { name: "January", status: "Paid", disabled: true },
  { name: "February", status: "Paid", disabled: true },
  { name: "March", status: "Paid", disabled: true },
  { name: "April", status: "Pending", disabled: true, danger: true },
  { name: "May", status: "Pending", disabled: true, danger: true },
  { name: "June", status: "Pending", disabled: false },
  { name: "July", status: "Pending", disabled: false },
  { name: "August", status: "Pending", disabled: false },
  { name: "September", status: "Pending", disabled: false },
  { name: "October", status: "Pending", disabled: false },
  { name: "November", status: "Pending", disabled: false },
  { name: "December", status: "Pending", disabled: false },
];

import { useBillingStore } from "../../stores/useBillingStore";

export default function SelectMonthsCard() {
  const navigate = useNavigate();
  const { selectedMonths, setSelectedMonths } = useBillingStore();

  const togglePeriod = (period: string) => {
    setSelectedMonths(
      selectedMonths.includes(period)
        ? selectedMonths.filter((item) => item !== period)
        : [...selectedMonths, period]
    );
  };

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
          {periods.map((period) => {
            const selected = selectedMonths.includes(period.name);

            return (
              <button
                key={period.name}
                type="button"
                disabled={period.disabled}
                onClick={() => togglePeriod(period.name)}
                className={`relative h-[96px] rounded-md border text-center transition ${
                  selected
                    ? "border-[#25249c] bg-[#eef0ff]"
                    : period.disabled && period.danger
                    ? "border-[#ffcaca] bg-[#fff0f0]"
                    : period.disabled
                    ? "border-[#c9efd7] bg-[#eaf8ef]"
                    : "border-[#dfe4f0] bg-white"
                }`}
              >
                {selected && (
                  <CheckCircle className="absolute right-2 top-2 h-4 w-4 fill-[#25249c] text-[#25249c]" />
                )}

                <p className="text-[13px] font-bold text-[#07185f]">
                  {period.name.substring(0, 3)}
                </p>

                <p
                  className={`mt-3 text-[11px] font-semibold ${
                    period.disabled && !period.danger
                      ? "text-[#11823b]"
                      : period.danger
                      ? "text-[#dc2626]"
                      : selected
                      ? "text-[#25249c]"
                      : "text-[#111827]"
                  }`}
                >
                  {period.status}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-10 border-t border-[#e4e8f2] pt-6">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-semibold text-[#07185f]">
              Selected Periods:{" "}
              <span className="font-medium">
                {selectedMonths.length
                  ? selectedMonths.map((p) => `${p} 2026`).join(", ")
                  : "None"}
              </span>
            </p>

            <button
              type="button"
              onClick={() => navigate("/payment-checkout")}
              className="flex h-[48px] items-center gap-5 rounded-md bg-[#25249c] px-7 text-[13px] font-semibold text-white"
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