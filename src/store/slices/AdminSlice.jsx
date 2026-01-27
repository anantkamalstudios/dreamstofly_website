import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAdminProfile = createAsyncThunk(
  "admin/fetchAdminProfile",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("adminToken");
    if (!token) return rejectWithValue("No admin token");

    try {
      const res = await axios.get("/api/admin/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Error fetching profile");
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: null,
    loading: false,
    error: null,
    isLoggedIn: false,
  },
  reducers: {
    logoutAdmin: (state) => {
      state.admin = null;
      state.isLoggedIn = false;
      localStorage.removeItem("adminToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(fetchAdminProfile.rejected, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
      });
  },
});

export const { logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
