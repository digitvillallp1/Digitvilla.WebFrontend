import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  CreditCard, 
  User, 
  Calendar, 
  ChevronLeft, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Receipt
} from "lucide-react";
import {
  createRazorpayOrder,
  verifyRazorpayPayment,
} from "../services/razorpayService";
import { useBillingStore } from "@/stores/useBillingStore";
import { useAuthStore } from "@/stores/useAuthStore";

const PaymentCheckoutPage = () => {
  const navigate = useNavigate();
  const { billingMonths, selectedMonths } = useBillingStore();
  const { user } = useAuthStore();

  const [isPaying, setIsPaying] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const selectedBillingMonths = billingMonths.filter((f) =>
    selectedMonths.includes(f.month)
  );
  const totalAmount = selectedBillingMonths.reduce(
    (sum, f) => sum + f.amount,
    0
  );

  const handlePayment = async () => {
    try {
      setIsPaying(true);
      setPaymentError("");

      const monthlyPaymentStatusId = selectedBillingMonths[0]?.id || "";
      console.log("[PAYMENT DEBUG] Starting payment flow:", { totalAmount, monthlyPaymentStatusId });

      const orderResponse = await createRazorpayOrder(totalAmount, monthlyPaymentStatusId);
      console.log("[PAYMENT DEBUG] Order created:", orderResponse);

      const options = {
        key: orderResponse.keyId,
        amount: orderResponse.amount * 100,
        currency: orderResponse.currency,
        name: "Digitvilla Premium",
        description: `Billing for ${selectedMonths.join(", ")}`,
        order_id: orderResponse.orderId,

        handler: async function (response: any) {
          try {
           await verifyRazorpayPayment({
  razorpayOrderId: response.razorpay_order_id,
  razorpayPaymentId: response.razorpay_payment_id,
  razorpaySignature: response.razorpay_signature,
  amount: totalAmount,
  monthlyPaymentStatusId: monthlyPaymentStatusId || undefined,
});

            navigate("/payment-success");
          } catch (error: any) {
            console.error("VERIFY ERROR:", error);
            setPaymentError(error.message || "Payment verification failed");
          } finally {
            setIsPaying(false);
          }
        },

        prefill: {
          name: user?.fullName || "User",
          email: user?.email || "user@example.com",
          contact: "9999999999",
        },

        theme: {
          color: "#06b6d4",
        },

        modal: {
          ondismiss: function () {
            setIsPaying(false);
          },
        },
      };

      const razorpay = new (window as any).Razorpay(options);

      razorpay.on("payment.failed", function (response: any) {
        setPaymentError(response.error?.description || "Payment failed");
        setIsPaying(false);
      });

      razorpay.open();
    } catch (error: any) {
      setPaymentError(error.message || "Something went wrong");
      setIsPaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-12 lg:py-20">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to selection
          </button>
          
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-500">
            <ShieldCheck className="h-4 w-4" />
            Secure SSL Encryption
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* Main Content */}
          <div className="space-y-8">
            <header>
              <h1 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
                Finalize <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Payment</span>
              </h1>
              <p className="mt-3 text-base text-slate-400 max-w-xl leading-relaxed">
                Please review your billing summary and selected periods before proceeding to secure checkout.
              </p>
            </header>

            <section className="relative overflow-hidden rounded-[2rem] bg-slate-900/40 p-7 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/20">
                  <Receipt className="h-4 w-4" />
                </div>
                <h2 className="text-lg font-semibold text-white">Order Summary</h2>
              </div>

              <div className="grid gap-4">
                {/* Info Rows */}
                <div className="group flex items-center justify-between rounded-xl bg-slate-950/50 p-5 transition-all hover:bg-slate-950/80 ring-1 ring-white/5">
                  <div className="flex items-center gap-4">
                    <div className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 group-hover:text-cyan-400 transition-colors">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Account Holder</p>
                      <p className="text-base font-medium text-white">{user?.fullName || "User"}</p>
                    </div>
                  </div>
                </div>

                <div className="group flex items-center justify-between rounded-xl bg-slate-950/50 p-5 transition-all hover:bg-slate-950/80 ring-1 ring-white/5">
                  <div className="flex items-center gap-4">
                    <div className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 group-hover:text-cyan-400 transition-colors">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Billing Cycles</p>
                      <p className="text-base font-medium text-white">
                        {selectedMonths.length > 0 ? selectedMonths.join(", ") : "No months selected"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group flex items-center justify-between rounded-xl bg-slate-950/50 p-5 transition-all hover:bg-slate-950/80 ring-1 ring-white/5">
                  <div className="flex items-center gap-4">
                    <div className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 group-hover:text-cyan-400 transition-colors">
                      <CreditCard className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Payment Currency</p>
                      <p className="text-base font-medium text-white">Indian Rupee (INR)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Breakdown Table */}
              <div className="mt-10">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4 px-2">Detailed Breakdown</h3>
                <div className="space-y-1">
                  {selectedBillingMonths.map((bill) => (
                    <div 
                      key={bill.month} 
                      className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-500" />
                        <span className="text-sm font-medium text-slate-300">{bill.month} {bill.year}</span>
                      </div>
                      <span className="font-mono text-sm text-white">₹{bill.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar / Checkout */}
          <aside className="relative">
            <div className="sticky top-12 space-y-5">
              <div className="overflow-hidden rounded-[2rem] bg-slate-900/40 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
                <div className="bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-7 border-b border-white/5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-500/80">Total Due</p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-white">₹{totalAmount.toLocaleString()}</span>
                    <span className="text-slate-400 text-xs font-medium">INR</span>
                  </div>
                </div>

                <div className="p-7">
                  {paymentError && (
                    <div className="mb-5 animate-in fade-in slide-in-from-top-2 rounded-xl bg-red-500/10 p-3 text-center text-xs font-medium text-red-400 ring-1 ring-red-500/20">
                      {paymentError}
                    </div>
                  )}

                  <button
                    onClick={handlePayment}
                    disabled={isPaying || totalAmount === 0}
                    className="group relative h-14 w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 p-px transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="relative flex h-full w-full items-center justify-center gap-2.5 rounded-[calc(0.75rem-1px)] bg-slate-950 text-sm font-bold text-white transition-all group-hover:bg-transparent">
                      {isPaying ? (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <>
                          Confirm & Pay
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </div>
                  </button>

                  <div className="mt-6 space-y-3 border-t border-white/5 pt-6">
                    <div className="flex items-center gap-2.5 text-[11px] text-slate-500">
                      <ShieldCheck className="h-3.5 w-3.5 text-cyan-500/60" />
                      Secure payment via Razorpay
                    </div>
                    <div className="flex items-center gap-2.5 text-[11px] text-slate-500">
                      <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                      Real-time payment verification
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Card */}
              <div className="rounded-2xl bg-white/5 p-5 border border-white/5">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Need help? <button className="text-cyan-400 hover:underline">Contact Support</button> for any billing queries.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PaymentCheckoutPage;