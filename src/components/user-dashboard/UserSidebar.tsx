import {
  Bell,
  CreditCard,
  Headphones,
  History,
  Home,
  LogOut,
  Receipt,
  User,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSidebarStore } from "@/stores/useSidebarStore";

const menuItems = [
  { label: "Dashboard", icon: Home, path: "/dashboard" },
  { label: "My Profile", icon: User, path: "/profile" },
  { label: "Payments", icon: CreditCard, path: "/payments" },
  { label: "Payment History", icon: History, path: "/payment-history" },
  { label: "Receipts", icon: Receipt, path: "/receipts" },
  { label: "Notices", icon: Bell, path: "/notices" },
  { label: "Support", icon: Headphones, path: "/support" },
  { label: "Logout", icon: LogOut, path: "/" },
];

export default function UserSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, setIsOpen } = useSidebarStore();

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed bottom-0 top-0 z-50 flex w-[260px] flex-col bg-[#081c73] px-6 py-8 text-white transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-[32px] font-extrabold leading-none tracking-tight">
              digit<span className="text-[#7c86ff]">villa</span>
            </h1>
            <p className="mt-1 text-[9px] font-medium text-white/70">
              Digital Future, Infinite Possibilities
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavigate(item.path)}
                className={`flex h-[46px] w-full items-center gap-3 rounded-xl px-4 text-left text-[14px] font-semibold transition-all ${
                  isActive
                    ? "bg-white/15 text-white shadow-lg shadow-black/10"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-[#7c86ff]" : ""}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-white/10 pt-6">
          <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-[12px] font-bold text-white">Premium Account</p>
            <p className="mt-1 text-[10px] text-white/60">Expires in 120 days</p>
            <button className="mt-3 w-full rounded-lg bg-[#7c86ff] py-2 text-[11px] font-bold text-white transition-hover hover:bg-[#6b75ff]">
              Upgrade Plan
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}