const months = [
  { month: "Jan 2024", status: "Paid", type: "paid" },
  { month: "Feb 2024", status: "Paid", type: "paid" },
  { month: "Mar 2024", status: "Paid", type: "paid" },
  { month: "Apr 2024", status: "Paid", type: "paid" },
  { month: "May 2024", status: "Pending", type: "pending" },
  { month: "Jun 2024", status: "Pending", type: "pending" },
  { month: "Jul 2024", status: "Pending", type: "pending" },
];

export default function FeeStatusCard() {
  return (
    <div className="rounded-[10px] border border-[#dfe4f0] bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[15px] font-bold text-[#07185f]">
          Fee Status (Monthly)
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

      <div className="mt-5 grid grid-cols-7 gap-4">
        {months.map((item) => (
          <div
            key={item.month}
            className={`flex h-[68px] flex-col items-center justify-center rounded-md border text-center ${
              item.type === "paid"
                ? "border-[#c9efd7] bg-[#eaf8ef] text-[#11823b]"
                : "border-[#ffd2d2] bg-[#fff0f0] text-[#dc2626]"
            }`}
          >
            <p className="text-[10px] font-medium text-[#07185f]">
              {item.month}
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