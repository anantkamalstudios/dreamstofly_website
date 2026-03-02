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
}) => {
  const payload = {
    from: from?.toUpperCase() || "",
    to: to?.toUpperCase() || "",
    date,
    adults: Number(adults) || 1,
    children: Number(children) || 0,
    infants: Number(infants) || 0,
  };
  if (trip_type === "round_trip" && returnDate) {
    payload.return_date = returnDate;
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
    provider: provider || "amadeus",
    offer_id: String(offer_id),
  });
  return data;
};

export const bookFlight = async (payload) => {
  const { data } = await axiosInstance.post("/Flight_booking/book", payload);
  return data;
};
