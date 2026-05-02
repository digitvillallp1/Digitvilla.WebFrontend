import UserSidebar from "../components/user-dashboard/UserSidebar";
import SelectMonthsCard from "../components/payment/SelectMonthsCard";

export default function PaymentPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="flex min-h-screen w-full bg-white">
        <UserSidebar />

        <section className="flex-1 px-8 py-7">
          <div className="min-h-[calc(100vh-56px)] w-full rounded-[14px] border border-[#dfe4f0] bg-white p-8">
            <SelectMonthsCard />
          </div>
        </section>
      </div>
    </main>
  );
}