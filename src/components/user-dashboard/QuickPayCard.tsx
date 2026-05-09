import { CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuickPayCard() {
  const navigate = useNavigate();

  return (
    <div className="rounded-[10px] border border-[#dfe4f0] bg-white p-5">
      <h3 className="text-[15px] font-bold text-[#07185f]">Quick Pay</h3>

      <p className="mt-5 text-[11px] text-[#7b8499]">
        Pay your pending or future billing periods
      </p>

      <div className="mt-7 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate("/payments")}
          className="h-[45px] rounded-md bg-[#10198a] px-8 text-[13px] font-semibold text-white"
        >
          Pay Now
        </button>

        <div className="flex h-[115px] w-[115px] items-center justify-center rounded-full bg-[#f0f1ff]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-lg border border-[#7c86ff] text-[#4f46e5]">
            <CreditCard className="h-9 w-9" />
          </div>
        </div>
      </div>
    </div>
  );
}