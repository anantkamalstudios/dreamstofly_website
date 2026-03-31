import axiosInstance from "./axiosInstance";

// ✅ Get countries
export const searchCountries = async () => {
  const { data } = await axiosInstance.get("/hotelcontent/countries");
  return data;
};

// ✅ Search hotels
export const searchHotels = async ({
  destinationCode,
  checkIn,
  checkOut,
  roomCount = 1,
  adults = 2,
  children = 0,
  maxHotels = 5,
}) => {
  const { data } = await axiosInstance.post("/hotels/search", {
    destinationCode,
    checkIn,
    checkOut,
    roomCount: Number(roomCount),
    adults: Number(adults),
    children: Number(children),
    maxHotels: Number(maxHotels),
  });
  return data;
};

// ✅ Check rate
export const checkRate = async (rateKey) => {
  const { data } = await axiosInstance.post("/hotels/checkrate", {
    rateKey,
  });
  return data;
};

// ✅ Cancellation policy
export const getCancellationPolicy = async (rateKey) => {
  const { data } = await axiosInstance.post("/hotels/cancellationpolicy", {
    rateKey,
  });
  return data;
};

// ✅ Create order (POST is correct)
export const createHotelOrder = async (payload) => {
  try {
    const { data } = await axiosInstance.post(
      "/hotel_payment/createorder",
      payload
    );
    return data;
  } catch (error) {
    console.error("Hotel order creation error:", error);
    throw error;
  }
};

// ✅ Booking detail
export const getBookingDetail = async (reference) => {
  const { data } = await axiosInstance.get("/hotels/bookingdetail", {
    params: { reference },
  });
  return data;
};

// ✅ Get hotel images
export const getHotelImages = async (hotelCode) => {
  const { data } = await axiosInstance.get("/hotelcontent/images", {
    params: { hotelCode },
  });
  return data;
};

// ✅ Get hotel detail
export const getHotelDetail = async (hotelCode) => {
  const { data } = await axiosInstance.get("/hotelcontent/detail", {
    params: { hotelCode },
  });
  return data;
};