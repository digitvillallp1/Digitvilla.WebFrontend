const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export interface CreateOrderResponse {
  orderId: string;
  amount: number;
  currency: string;
  keyId: string;
}

export interface VerifyPaymentRequest {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
  amount: number;
  monthlyPaymentStatusId?: string;
}

export const createRazorpayOrder = async (
  amount: number,
  monthlyPaymentStatusId?: string
): Promise<CreateOrderResponse> => {
  const token = localStorage.getItem("digitvilla_token");

  if (!token) {
    throw new Error("Login token not found. Please login again.");
  }

  const response = await fetch(`${API_BASE_URL}/payments/create-order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      amount,
      monthlyPaymentStatusId: monthlyPaymentStatusId || null,
    }),
  });

  const text = await response.text();

  let data: any = {};
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error(text);
    }
  }

  if (!response.ok) {
    throw new Error(
      data.message ||
        data.error ||
        `Failed to create Razorpay order. Status: ${response.status}`
    );
  }

  return data;
};

export const verifyRazorpayPayment = async (
  paymentData: VerifyPaymentRequest
) => {
  const token = localStorage.getItem("digitvilla_token");
  const userId = localStorage.getItem("digitvilla_userId");

  if (!token) {
    throw new Error("Login token not found. Please login again.");
  }

  if (!userId) {
    throw new Error("User ID not found. Please login again.");
  }

  const response = await fetch(`${API_BASE_URL}/payments/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      ...paymentData,
      userId,
    }),
  });

  const text = await response.text();

  let data: any = {};
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error(text);
    }
  }

  if (!response.ok) {
    throw new Error(
      data.message ||
        data.error ||
        `Payment verification failed. Status: ${response.status}`
    );
  }

  return data;
};