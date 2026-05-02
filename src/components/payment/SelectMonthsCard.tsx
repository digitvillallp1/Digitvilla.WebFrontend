import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const months = [
  { name: "Jan", status: "Paid", disabled: true },
  { name: "Feb", status: "Paid", disabled: true },
  { name: "Mar", status: "Paid", disabled: true },
  { name: "Apr", status: "Paid", disabled: true },
  { name: "May", status: "Pending", disabled: true, danger: true },
  { name: "Jun", status: "Pending", disabled: false },
  { name: "Jul", status: "Pending", disabled: false },
  { name: "Aug", status: "Pending", disabled: false },
  { name: "Sep", status: "Pending", disabled: false },
  { name: "Oct", status: "Pending", disabled: false },
  { name: "Nov", status: "Pending", disabled: false },
  { name: "Dec", status: "Pending", disabled: false },
];

export default function SelectMonthsCard() {
  const navigate = useNavigate();
  const [selectedMonths, setSelectedMonths] = useState<string[]>(["Jun", "Jul"]);

  const toggleMonth = (month: string) => {
    setSelectedMonths((prev) =>
      prev.includes(month)
        ? prev.filter((item) => item !== month)
        : [...prev, month]
    );
  };

  return (
    <div className="w-full">
      <h1 className="text-[26px] font-bold text-[#07185f]">
        Select Months to Pay
      </h1>

      <p className="mt-1 text-[12px] text-[#7b8499]">
        Select one or more months you want to pay
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
          {months.map((month) => {
            const selected = selectedMonths.includes(month.name);

            return (
              <button
                key={month.name}
                type="button"
                disabled={month.disabled}
                onClick={() => toggleMonth(month.name)}
                className={`relative h-[96px] rounded-md border text-center transition ${
                  selected
                    ? "border-[#25249c] bg-[#eef0ff]"
                    : month.disabled && month.danger
                    ? "border-[#ffcaca] bg-[#fff0f0]"
                    : month.disabled
                    ? "border-[#c9efd7] bg-[#eaf8ef]"
                    : "border-[#dfe4f0] bg-white"
                }`}
              >
                {selected && (
                  <CheckCircle className="absolute right-2 top-2 h-4 w-4 fill-[#25249c] text-[#25249c]" />
                )}

                <p className="text-[13px] font-bold text-[#07185f]">
                  {month.name}
                </p>

                <p
                  className={`mt-3 text-[11px] font-semibold ${
                    month.disabled && !month.danger
                      ? "text-[#11823b]"
                      : month.danger
                      ? "text-[#dc2626]"
                      : selected
                      ? "text-[#25249c]"
                      : "text-[#111827]"
                  }`}
                >
                  {month.status}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-10 border-t border-[#e4e8f2] pt-6">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-semibold text-[#07185f]">
              Selected Months:{" "}
              <span className="font-medium">
                {selectedMonths.length
                  ? selectedMonths.map((m) => `${m} 2026`).join(", ")
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