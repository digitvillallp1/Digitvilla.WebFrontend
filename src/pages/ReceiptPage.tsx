import UserSidebar from "../components/user-dashboard/UserSidebar";
import ReceiptCard from "../components/receipt/ReceiptCard";

export default function ReceiptPage() {
  return (
    <main className="h-screen w-full overflow-hidden bg-white">
      <div className="flex h-full w-full">
        <UserSidebar />

        <section className="flex-1 overflow-y-auto px-8 py-6">
          <ReceiptCard />
        </section>
      </div>
    </main>
  );
}