import UserSidebar from "../components/user-dashboard/UserSidebar";
import PaymentCheckoutCard from "../components/payment/PaymentCheckoutCard";

export default function PaymentCheckoutPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="flex min-h-screen w-full bg-white">
        <UserSidebar />

        <section className="flex-1 px-8 py-7">
          <PaymentCheckoutCard />
        </section>
      </div>
    </main>
  );
}