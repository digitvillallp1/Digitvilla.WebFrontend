const API_BASE_URL = "http://localhost:5000/api";

export interface CreateOrderRequest {
  amount: number;
  currency?: string;
}

export interface VerifyPaymentRequest {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
  amount: number;
  notes?: string; // ✅ added
}

export interface CreateOrderResponse {
  orderId: string;
  key: string;
  amount: number;
  currency: string;
}

// ✅ Extra fields added for PaymentSuccess page
export interface VerifyPaymentResponse {
  success: boolean;
  message: string;
  paymentId: string;
  amount?: number;
  razorpayPaymentId?: string;
  paidAt?: string;
}

function getAuthHeaders() {
  const token =
    localStorage.getItem("digitvilla_token") ||
    localStorage.getItem("token") ||
    localStorage.getItem("authToken") ||
    localStorage.getItem("accessToken");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

// ✅ DO NOT TOUCH — Razorpay create order
export async function createRazorpayOrder(
  data: CreateOrderRequest
): Promise<CreateOrderResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/payments/create-order`,
      {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          amount: data.amount,
          currency: data.currency || "INR",
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Create order failed:", response.status, errorText);
      throw new Error(
        errorText || `Failed to create order (Status: ${response.status})`
      );
    }

    const result = await response.json();
    return result;
  } catch (error: unknown) {
    console.error("Create order error:", error);
    throw error;
  }
}

// ✅ DO NOT TOUCH — Razorpay verify payment
export async function verifyRazorpayPayment(
  data: VerifyPaymentRequest
): Promise<VerifyPaymentResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/payments/verify-payment`,
      {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          razorpayOrderId: data.razorpayOrderId,
          razorpayPaymentId: data.razorpayPaymentId,
          razorpaySignature: data.razorpaySignature,
          amount: data.amount,
          notes: data.notes ?? "",
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Verify payment failed:", response.status, errorText);
      throw new Error(
        errorText || `Payment verification failed (Status: ${response.status})`
      );
    }

    const result = await response.json();
    return result;
  } catch (error: unknown) {
    console.error("Verify payment error:", error);
    throw error;
  }
}