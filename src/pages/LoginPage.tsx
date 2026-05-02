import LoginBrand from "../components/login/LoginBrand";
import LoginCard from "../components/login/LoginCard";
import DecorativeBg from "../components/login/DecorativeBg";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <DecorativeBg />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-[430px]">
          <LoginBrand />
          <LoginCard />
        </div>
      </section>
    </main>
  );
}