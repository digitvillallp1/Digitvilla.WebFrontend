import { ChevronDown } from "lucide-react";

export default function UserHeader() {
  return (
    <header className="flex items-center justify-between">
      <h2 className="text-[22px] font-bold text-[#07185f]">Dashboard</h2>

      <div className="flex items-center gap-2">
     <img
  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mayank"
  alt="Mayank Raj"
  className="h-8 w-8 rounded-full"
/>

        <div className="flex items-center gap-1">
          <p className="text-[11px] font-semibold text-[#07185f]">
            Hello, Mayank Raj
          </p>
          <ChevronDown className="h-3 w-3 text-[#16a34a]" />
        </div>
      </div>
    </header>
  );
}