export const openRazorpayCheckout = (paymentData, onSuccess, onError) => {
  if (!window.Razorpay) {
    console.error("Razorpay SDK not loaded");
    return;
  }

  const options = {
    key: paymentData.key,
    amount: paymentData.amount,
    currency: paymentData.currency,
    name: paymentData.name ?? "DreamsToFly",
    description: paymentData.description ?? "Order Payment",
    order_id: paymentData.orderId,
    image: paymentData.logo ?? "/logo.png",

    handler: function (response) {
      onSuccess(response);
    },

    prefill: {
      name: paymentData.customerName || "",
      email: paymentData.customerEmail || "",
      contact: paymentData.customerMobile || "",
    },

    notes: paymentData.notes || {},

    theme: {
      color: "#528FF0",
    },
  };

  const rzp = new window.Razorpay(options);

  rzp.on("payment.failed", function (response) {
    onError(response);
  });

  rzp.open();
};
