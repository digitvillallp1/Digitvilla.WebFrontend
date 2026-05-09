import UserSidebar from "../components/user-dashboard/UserSidebar";
import UserHeader from "../components/user-dashboard/UserHeader";
import UserInfoCard from "../components/user-dashboard/UserInfoCard";
import PaymentSummaryCard from "../components/user-dashboard/PaymentSummaryCard";
import PaymentStatusCard from "../components/user-dashboard/PaymentStatusCard";
import RecentReceiptsCard from "../components/user-dashboard/RecentReceiptsCard";
import QuickPayCard from "../components/user-dashboard/QuickPayCard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen w-full bg-[#f8fafc]">
      <div className="flex min-h-screen w-full">
        <UserSidebar />

        <section className="flex-1 overflow-x-hidden px-4 py-6 md:px-8 md:py-7">
          <UserHeader />

          <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <UserInfoCard />
            <PaymentSummaryCard />
          </div>

          <div className="mt-6">
            <PaymentStatusCard />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <RecentReceiptsCard />
            <QuickPayCard />
          </div>
        </section>
      </div>
    </main>
  );
}