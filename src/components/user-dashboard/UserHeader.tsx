import { ChevronDown, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useSidebarStore } from "@/stores/useSidebarStore";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/profile": "My Profile",
  "/payments": "Payments",
  "/payment-history": "Payment History",
  "/receipts": "My Receipts",
  "/notices": "Notices",
  "/support": "Help & Support",
  "/payment-checkout": "Checkout",
  "/payment-success": "Success",
};

export default function UserHeader() {
  const location = useLocation();
  const { toggleSidebar } = useSidebarStore();
  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="flex items-center justify-between pb-6">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h2 className="text-[20px] font-bold text-[#07185f] md:text-[24px]">
          {title}
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden text-right md:block">
          <p className="text-[14px] font-bold text-[#07185f]">Mayank Raj</p>
          <p className="text-[11px] text-[#7b8499]">Premium User</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-slate-200 p-1 pr-3">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mayank"
            alt="Mayank Raj"
            className="h-8 w-8 rounded-full bg-slate-100"
          />
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </div>
      </div>
    </header>
  );
}