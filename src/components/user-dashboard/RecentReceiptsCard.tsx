import { FileText } from "lucide-react";

const receipts = [
  {
    title: "April 2024 Receipt",
    desc: "Paid on 05 Apr 2024",
  },
  {
    title: "March 2024 Receipt",
    desc: "Paid on 15 Mar 2024",
  },
  {
    title: "February 2024 Receipt",
    desc: "Paid on 15 Feb 2024",
  },
  {
    title: "January 2024 Receipt",
    desc: "Paid on 15 Jan 2024",
  },
];

export default function RecentReceiptsCard() {
  return (
    <div className="rounded-[10px] border border-[#dfe4f0] bg-white p-5">
      <h3 className="text-[15px] font-bold text-[#07185f]">
        Recent Receipts
      </h3>

      <div className="mt-4 space-y-3">
        {receipts.map((receipt) => (
          <div
            key={receipt.title}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#eef0ff] text-[#25249c]">
                <FileText className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[12px] font-bold text-[#07185f]">
                  {receipt.title}
                </p>
                <p className="text-[10px] text-[#7b8499]">{receipt.desc}</p>
              </div>
            </div>

            <button className="h-8 rounded-md bg-[#f3f5ff] px-4 text-[11px] font-semibold text-[#25249c]">
              Download
            </button>
          </div>
        ))}
      </div>

      <button className="mt-4 block w-full text-center text-[12px] font-semibold text-[#25249c]">
        View All
      </button>
    </div>
  );
}