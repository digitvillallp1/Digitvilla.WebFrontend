import { Building2, Lock, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const methods = [
  {
    id: "upi",
    title: "UPI / QR Code",
    logos: ["UPI", "GPay", "PhonePe"],
  },
  {
    id: "card",
    title: "Credit / Debit Card",
    logos: ["VISA", "Mastercard", "RuPay"],
  },
  {
    id: "netbanking",
    title: "Net Banking",
    icon: Building2,
  },
  {
    id: "wallet",
    title: "Wallets",
    icon: Wallet,
    logos: ["Paytm", "Amazon Pay"],
  },
];

export default function PaymentCheckoutCard() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("upi");

  return (
    <div className="grid min-h-[calc(100vh-56px)] grid-cols-[360px_1fr] gap-6 rounded-[14px] border border-[#dfe4f0] bg-white p-8">
      
      {/* LEFT SIDE */}
      <div className="rounded-[10px] border border-[#dfe4f0] bg-white p-6">
        <h2 className="text-[18px] font-bold text-[#07185f]">
          Payment Details
        </h2>

        <div className="mt-8 space-y-7">
          <div>
            <p className="text-[12px] text-[#7b8499]">Selected Months</p>
            <p className="mt-2 text-[18px] font-bold text-[#07185f]">
              Jun 2026, Jul 2026
            </p>
          </div>

          <div>
            <p className="text-[12px] text-[#7b8499]">Total Months</p>
            <p className="mt-2 text-[18px] font-bold text-[#07185f]">2</p>
          </div>

          <div>
            <p className="text-[12px] text-[#7b8499]">Amount per Month</p>
            <p className="mt-2 text-[22px] font-bold text-[#07185f]">
              ₹ 3,000
            </p>
          </div>

          <div>
            <p className="text-[12px] text-[#7b8499]">Total Amount</p>
            <p className="mt-2 text-[30px] font-bold text-[#07185f]">
              ₹ 6,000
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="rounded-[10px] border border-[#dfe4f0] bg-white p-6">
        <h2 className="text-[18px] font-bold text-[#07185f]">
          Choose Payment Method
        </h2>

        <div className="mt-6 space-y-4">
          {methods.map((method) => {
            const Icon = method.icon;
            const isActive = selectedMethod === method.id;

            return (
              <button
                key={method.id}
                type="button"
                onClick={() => setSelectedMethod(method.id)}
                className={`group flex h-[78px] w-full items-center justify-between rounded-lg border px-5 transition-all duration-200
                  
                  ${
                    isActive
                      ? "border-[#25249c] bg-[#f5f6ff] shadow-[0_0_0_2px_rgba(37,36,156,0.15)]"
                      : "border-[#e2e7f0] hover:border-[#c7cdea] hover:bg-[#fafbff]"
                  }
                `}
              >
                {/* LEFT */}
                <div className="flex items-center gap-4">
                  {/* RADIO */}
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full border transition
                      ${
                        isActive
                          ? "border-[#25249c]"
                          : "border-[#b8c0d4] group-hover:border-[#25249c]"
                      }
                    `}
                  >
                    {isActive && (
                      <div className="h-2.5 w-2.5 rounded-full bg-[#25249c]" />
                    )}
                  </div>

                  {/* TITLE */}
                  <span className="text-[14px] font-bold text-[#07185f]">
                    {method.title}
                  </span>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-3">
                  {Icon ? (
                    <Icon className="h-6 w-6 text-[#6b7280]" />
                  ) : (
                    method.logos?.map((logo) => (
                      <span
                        key={logo}
                        className="rounded-md bg-[#eef1ff] px-2 py-1 text-[11px] font-semibold text-[#25249c]"
                      >
                        {logo}
                      </span>
                    ))
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* PAY BUTTON */}
        <button
          type="button"
          onClick={() => navigate("/payment-success")}
          className="mt-10 flex h-[52px] w-full items-center justify-center gap-3 rounded-md bg-[#25249c] text-[15px] font-bold text-white transition hover:opacity-95"
        >
          <Lock className="h-5 w-5" />
          Pay ₹ 6,000
        </button>
      </div>
    </div>
  );
}