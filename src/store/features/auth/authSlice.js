import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerApi, loginApi } from "../../../api/auth";

// First, create the thunk
export const registerAccount = createAsyncThunk(
  "users/registerAccount",
  async (data, thunkAPI) => {
    const response = await registerApi(data);
    return response.data;
  }
);

export const loginAccount = createAsyncThunk(
  "user/loginAccount",
  async (data, thunkAPI) => {
    const response = await loginApi(data);
    return response.data;
  }
);

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    ahihi: () => {
      console.log("hihi");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerAccount.fulfilled, (state, action) => {});
    builder.addCase(registerAccount.rejected, (state, action) => {});
    builder.addCase(registerAccount.pending, (state, action) => {});

    builder.addCase(loginAccount.fulfilled, (state, action) => {
      const { payload } = action;
      console.log(payload);
      localStorage.setItem("user", JSON.stringify(payload));
      return { ...state, isAuthenticated: true };
    });
    builder.addCase(loginAccount.rejected, (state, action) => {});
    builder.addCase(loginAccount.pending, (state, action) => {});
  },
});

export const { ahihi } = authSlice.actions;
export default authSlice.reducer;
