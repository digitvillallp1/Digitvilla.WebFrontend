import UserSidebar from "../components/user-dashboard/UserSidebar";
import UserHeader from "../components/user-dashboard/UserHeader";
import StudentInfoCard from "../components/user-dashboard/StudentInfoCard";
import FeeSummaryCard from "../components/user-dashboard/FeeSummaryCard";
import FeeStatusCard from "../components/user-dashboard/FeeStatusCard";
import RecentReceiptsCard from "../components/user-dashboard/RecentReceiptsCard";
import QuickPayCard from "../components/user-dashboard/QuickPayCard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-white">
      <div className="flex min-h-screen w-full bg-white">
        <UserSidebar />

        <section className="flex-1 px-8 py-7">
          <UserHeader />

          <div className="mt-7 grid grid-cols-2 gap-6">
            <StudentInfoCard />
            <FeeSummaryCard />
          </div>

          <div className="mt-6">
            <FeeStatusCard />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6">
            <RecentReceiptsCard />
            <QuickPayCard />
          </div>
        </section>
      </div>
    </main>
  );
}