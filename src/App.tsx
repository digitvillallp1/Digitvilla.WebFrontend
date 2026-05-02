import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import PaymentPage from "./pages/PaymentPage";
import PaymentHistoryPage from "./pages/PaymentHistoryPage";
import ReceiptPage from "./pages/ReceiptPage";
import NoticePage from "./pages/NoticePage";
import SupportPage from "./pages/SupportPage";
import PaymentCheckoutPage from "./pages/PaymentCheckoutPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/fee-payment" element={<PaymentPage />} />
        <Route path="/payment-history" element={<PaymentHistoryPage />} />
        <Route path="/receipts" element={<ReceiptPage />} />
        <Route path="/notices" element={<NoticePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/payment-checkout" element={<PaymentCheckoutPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route path="/receipts" element={<ReceiptPage />} />
      </Routes>
    </BrowserRouter>
  );
}