import { CheckCircle, Download, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import UserSidebar from "../components/user-dashboard/UserSidebar";

export default function PaymentSuccessPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="flex min-h-screen w-full bg-white">
        <UserSidebar />

        <section className="flex-1 px-8 py-7">
          <div className="flex min-h-[calc(100vh-56px)] items-center justify-center rounded-[14px] border border-[#dfe4f0] bg-white p-8">
            <div className="w-full max-w-[520px] text-center">
              <div className="mx-auto flex h-[96px] w-[96px] items-center justify-center rounded-full bg-[#eaf8ef]">
                <CheckCircle className="h-[58px] w-[58px] text-[#16a34a]" />
              </div>

              <h1 className="mt-6 text-[30px] font-bold text-[#07185f]">
                Payment Successful!
              </h1>

              <p className="mt-2 text-[12px] text-[#7b8499] md:text-[13px]">
                Your payment has been completed successfully
              </p>

              <div className="mt-8 rounded-[10px] border border-[#dfe4f0] bg-white p-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] text-[#7b8499]">Amount Paid</p>
                    <p className="text-[15px] font-bold text-[#07185f]">
                      ₹ 6,000
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[13px] text-[#7b8499]">Paid Months</p>
                    <p className="text-[15px] font-bold text-[#07185f]">
                      Jun 2026, Jul 2026
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[13px] text-[#7b8499]">
                      Transaction ID
                    </p>
                    <p className="text-[15px] font-bold text-[#07185f]">
                      DVTXN2026001
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[13px] text-[#7b8499]">Status</p>
                    <span className="rounded-md bg-[#eaf8ef] px-4 py-1 text-[12px] font-bold text-[#11823b]">
                      Paid
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex h-[48px] items-center justify-center gap-2 rounded-md border border-[#25249c] bg-white text-[13px] font-bold text-[#25249c]"
                >
                  <Download className="h-5 w-5" />
                  Download Receipt
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/dashboard")}
                  className="flex h-[48px] items-center justify-center gap-2 rounded-md bg-[#25249c] text-[13px] font-bold text-white"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}