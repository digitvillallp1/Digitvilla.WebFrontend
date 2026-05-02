import {
  Bell,
  CreditCard,
  Headphones,
  History,
  Home,
  LogOut,
  Receipt,
  User,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: Home, path: "/dashboard" },
  { label: "My Profile", icon: User, path: "/profile" },
  { label: "Fee Payment", icon: CreditCard, path: "/fee-payment" },
  { label: "Payment History", icon: History, path: "/payment-history" },
  { label: "Receipts", icon: Receipt, path: "/receipts" },
  { label: "Notices", icon: Bell, path: "/notices" },
  { label: "Support", icon: Headphones, path: "/support" },
  { label: "Logout", icon: LogOut, path: "/" },
];

export default function UserSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="min-h-screen w-[220px] shrink-0 bg-[#081c73] px-5 py-7 text-white">
      <div className="mb-9">
        <h1 className="text-[31px] font-extrabold leading-none tracking-tight">
          digit<span className="text-[#7c86ff]">villa</span>
        </h1>
        <p className="mt-1 text-[8px] font-medium text-white/80">
          Digital Future, Infinite Possibilities
        </p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => navigate(item.path)}
              className={`flex h-[42px] w-full items-center gap-3 rounded-md px-3 text-left text-[14px] font-medium transition ${
                isActive
                  ? "bg-[#4338ca] text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Icon className="h-[17px] w-[17px]" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}