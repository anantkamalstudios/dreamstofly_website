import axiosInstance from "./axiosInstance";

/**
 * Search airports by keyword (use with debouncing)
 * @param {string} keyword - Search keyword (e.g. "MA", "DEL")
 * @returns {Promise<{status: boolean, data: Array<{iata, name, city, country}>}>}
 */
export const searchAirports = async (keyword) => {
  if (!keyword || keyword.trim().length < 2) {
    return { status: true, data: [] };
  }
  const { data } = await axiosInstance.get(
    `/Flight_booking/airports?keyword=${encodeURIComponent(keyword.trim())}`
  );
  return data;
};

export const searchFlights = async ({
  from,
  to,
  date,
  returnDate,
  adults = 1,
  children = 0,
  infants = 0,
  trip_type = "one_way",
  page = 1,
  filters = {},
}) => {
  const payload = {
    from: from?.toUpperCase() || "",
    to: to?.toUpperCase() || "",
    date,
    adults: Number(adults) || 1,
    children: Number(children) || 0,
    infants: Number(infants) || 0,
    page: Number(page) || 1,
  };
  if (trip_type === "round_trip" && returnDate) {
    payload.return_date = returnDate;
  }
  
  // Add filters if they exist
  if (filters && Object.keys(filters).length > 0) {
    payload.filters = {
      stops: filters.stops || [],
      airlines: filters.airlines || [],
      departure_time: filters.departure_time || [],
      departure_airports: filters.departure_airports || [],
      arrival_airports: filters.arrival_airports || [],
      aircraft_size: filters.aircraft_size || [],
      price_min: filters.price_min,
      price_max: filters.price_max,
      baggage_included: filters.baggage_included,
      refundable: filters.refundable,
    };
  }
  
  const { data } = await axiosInstance.post("/Flight_booking/search", payload);
  return data;
};

/**
 * Verify flight price before booking
 * @param {Object} params - { provider, offer_id } from search API response
 * @returns {Promise<{status, provider, offer_id, price, currency}>}
 */
export const verifyFlight = async ({ provider, offer_id }) => {
  const { data } = await axiosInstance.post("/Flight_booking/verify", {
    provider: provider,
    offer_id: String(offer_id),
  });
  return data;
};

export const bookFlight = async (payload) => {
  const { data } = await axiosInstance.post("/Flight_booking/book", payload);
  return data;
};

/**
 * Create payment order for flight booking
 * @param {Object} payload - Payment order details
 * @returns {Promise<{status, order_id, payment_url, amount}>}
 */
export const createPaymentOrder = async (payload) => {
  try {
    console.log("Creating payment order with payload:", payload);
    const { data } = await axiosInstance.post("/Flight_Payment/create_order", payload);
    console.log("Payment order response:", data);
    return data;
  } catch (error) {
    console.error("Payment order creation error:", error);
    console.error("Error response:", error?.response?.data);
    throw error;
  }
};
