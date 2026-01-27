import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("userToken");
    if (!token) return rejectWithValue("No token");

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/profile_api`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data.data;
    } catch (err) {
      localStorage.removeItem("userToken");
      return rejectWithValue("Invalid token");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loadingUser: true,
  },

  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loadingUser = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loadingUser = false;
      })
      .addCase(fetchUserProfile.rejected, (state) => {
        state.user = null;
        state.loadingUser = false;
      });
  },
});

export const { setUserData, logoutUser } = userSlice.actions;
export default userSlice.reducer;
