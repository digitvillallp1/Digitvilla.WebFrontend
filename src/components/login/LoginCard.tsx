import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Lock, Mail, Loader2 } from "lucide-react";
import { useAuthStore } from "../../stores/useAuthStore";

export default function LoginCard() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setIsLoading(true);
      const success = await login(email, password);
      
      if (success) {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white p-8 shadow-2xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-[#07185f]">Welcome Back!</h2>
        <p className="mt-3 text-sm text-[#07185f]">Login to your account</p>
      </div>

      <form onSubmit={handleLogin}>
        <div className="relative mb-5">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Enter Email / Mobile Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 w-full rounded-lg border border-[#dfe4f0] bg-white pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-[#4338ca]"
          />
        </div>

        <div className="relative mb-5">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 w-full rounded-lg border border-[#dfe4f0] bg-white pl-12 pr-12 text-sm outline-none focus:ring-2 focus:ring-[#4338ca]"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          >
            <Eye size={18} />
          </button>
        </div>

        <div className="mb-6 text-right">
          <button type="button" className="text-sm font-semibold text-[#081c73]">
            Forgot Password?
          </button>
        </div>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-3 text-center text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="flex h-14 w-full items-center justify-center rounded-lg bg-[#2f2aa5] font-semibold text-white transition-all hover:bg-[#1e1d82] disabled:opacity-70"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            "Login"
          )}
        </button>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#dfe4f0]" />
          <span className="text-sm text-gray-500">or</span>
          <div className="h-px flex-1 bg-[#dfe4f0]" />
        </div>

        <button
          type="button"
          className="flex h-14 w-full items-center justify-center gap-3 rounded-lg border border-[#dfe4f0] bg-white font-semibold text-[#07185f]"
        >
          <span className="text-xl font-bold text-blue-500">G</span>
          Login with Google
        </button>
      </form>
    </div>
  );
}