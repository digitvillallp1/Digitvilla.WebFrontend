const paymentHistory = [
  { period: "Jan 2024", status: "Paid", type: "paid" },
  { period: "Feb 2024", status: "Paid", type: "paid" },
  { period: "Mar 2024", status: "Paid", type: "paid" },
  { period: "Apr 2024", status: "Paid", type: "paid" },
  { period: "May 2024", status: "Pending", type: "pending" },
  { period: "Jun 2024", status: "Pending", type: "pending" },
  { period: "Jul 2024", status: "Pending", type: "pending" },
];

export default function PaymentStatusCard() {
  return (
    <div className="rounded-[10px] border border-[#dfe4f0] bg-white p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-[15px] font-bold text-[#07185f]">
          Payment Status (Monthly)
        </h3>

        <div className="flex items-center gap-5 text-[11px] font-medium text-[#5f6b84]">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-[#16a34a]" />
            Paid
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-[#ef476f]" />
            Pending
          </span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        {paymentHistory.map((item) => (
          <div
            key={item.period}
            className={`flex h-[68px] flex-col items-center justify-center rounded-md border text-center ${
              item.type === "paid"
                ? "border-[#c9efd7] bg-[#eaf8ef] text-[#11823b]"
                : "border-[#ffd2d2] bg-[#fff0f0] text-[#dc2626]"
            }`}
          >
            <p className="text-[10px] font-medium text-[#07185f]">
              {item.period}
            </p>
            <p className="mt-2 text-[11px] font-bold">
              {item.type === "paid" ? "✓ " : ""}
              {item.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}