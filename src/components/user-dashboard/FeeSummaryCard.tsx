const fees = [
  {
    label: "Total Fees",
    amount: "₹ 36,000",
    bg: "bg-[#eef0ff]",
    border: "border-[#ccd2ff]",
    text: "text-[#25249c]",
  },
  {
    label: "Paid Fees",
    amount: "₹ 24,000",
    bg: "bg-[#eaf8ef]",
    border: "border-[#c9efd7]",
    text: "text-[#11823b]",
  },
  {
    label: "Pending Fees",
    amount: "₹ 12,000",
    bg: "bg-[#fff0f0]",
    border: "border-[#ffd2d2]",
    text: "text-[#dc2626]",
  },
];

export default function FeeSummaryCard() {
  return (
    <div className="rounded-[10px] border border-[#dfe4f0] bg-white p-5">
      <h3 className="text-[15px] font-bold text-[#07185f]">Fee Summary</h3>

      <div className="mt-5 space-y-4">
        {fees.map((fee) => (
          <div
            key={fee.label}
            className={`flex h-[45px] items-center justify-between rounded-md border px-4 ${fee.bg} ${fee.border}`}
          >
            <p className={`text-[12px] font-bold ${fee.text}`}>{fee.label}</p>
            <p className={`text-[12px] font-bold ${fee.text}`}>
              {fee.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}