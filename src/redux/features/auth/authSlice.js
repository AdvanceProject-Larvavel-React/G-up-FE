import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  isAuth: localStorage.getItem('token') ? true : false,
  role: "",
  status: 'idle',
  error: null,
};
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', userCredentials);
      const token = response.data.token;
      const role = response.data.role;
      return { token ,role};

    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const registerUser = createAsyncThunk(
  'auth/loginUser',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/register', userCredentials);
      const token = response.data.token;
      return {token};
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem("userId");
      localStorage.removeItem("user");
    },
    setInitialState: (state,action)=> {
      Object.assign(state, action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.isAuthenticated = true;
        localStorage.setItem('token', action.payload.token);
      
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { logout , setInitialState } = authSlice.actions;

export default authSlice.reducer;