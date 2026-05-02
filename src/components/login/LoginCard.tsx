import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="rounded-[14px] bg-white px-7 py-8 shadow-[0_10px_35px_rgba(15,23,42,0.16)]">
      <div className="mb-7 text-center">
        <h2 className="text-[28px] font-bold text-[#111827]">
          Welcome Back!
        </h2>
        <p className="mt-1 text-[14px] text-[#0c1d5a]">
          Login to your account
        </p>
      </div>

      <form className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7c8497]" />
          <input
            type="text"
            placeholder="Enter Email / Mobile Number"
            className="h-[48px] w-full rounded-md border border-[#d7ddec] bg-white pl-11 pr-4 text-[14px] text-[#111827] outline-none placeholder:text-[#8a94a8] focus:border-[#25249c]"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7c8497]" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="h-[48px] w-full rounded-md border border-[#d7ddec] bg-white pl-11 pr-11 text-[14px] text-[#111827] outline-none placeholder:text-[#8a94a8] focus:border-[#25249c]"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7c8497]"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>

        <div className="text-right">
          <button
            type="button"
            className="text-[12px] font-semibold text-[#25249c]"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="h-[50px] w-full rounded-md bg-[#25249c] text-[15px] font-semibold text-white"
        >
          Login
        </button>

        <div className="flex items-center gap-4 py-1">
          <div className="h-px flex-1 bg-[#e1e5ef]" />
          <span className="text-[12px] text-[#6b7280]">or</span>
          <div className="h-px flex-1 bg-[#e1e5ef]" />
        </div>

        <button
          type="button"
          className="flex h-[48px] w-full items-center justify-center gap-3 rounded-md border border-[#d7ddec] bg-white text-[14px] font-semibold text-[#111827]"
        >
          <span className="text-[20px] font-bold text-[#4285f4]">G</span>
          Login with Google
        </button>
      </form>
    </div>
  );
}