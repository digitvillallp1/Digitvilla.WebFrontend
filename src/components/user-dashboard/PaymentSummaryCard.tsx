const paymentSummaryItems = [
  {
    label: "Total Amount",
    amount: "₹ 36,000",
    bg: "bg-[#eef0ff]",
    border: "border-[#ccd2ff]",
    text: "text-[#25249c]",
  },
  {
    label: "Paid Amount",
    amount: "₹ 24,000",
    bg: "bg-[#eaf8ef]",
    border: "border-[#c9efd7]",
    text: "text-[#11823b]",
  },
  {
    label: "Pending Amount",
    amount: "₹ 12,000",
    bg: "bg-[#fff0f0]",
    border: "border-[#ffd2d2]",
    text: "text-[#dc2626]",
  },
];

export default function PaymentSummaryCard() {
  return (
    <div className="rounded-[10px] border border-[#dfe4f0] bg-white p-5">
      <h3 className="text-[15px] font-bold text-[#07185f]">Payment Summary</h3>

      <div className="mt-5 space-y-4">
        {paymentSummaryItems.map((item) => (
          <div
            key={item.label}
            className={`flex h-[45px] items-center justify-between rounded-md border px-4 ${item.bg} ${item.border}`}
          >
            <p className={`text-[12px] font-bold ${item.text}`}>{item.label}</p>
            <p className={`text-[12px] font-bold ${item.text}`}>
              {item.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}