// welcomeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API endpoint
const API_URL = 'https://api.rankupp.in/api/v1/early-access/request';

// Async thunk for submitting early access request
export const submitEarlyAccessRequest = createAsyncThunk(
  'welcome/submitEarlyAccessRequest',
  async ({ email, classValue }, { rejectWithValue }) => {
    try {
      // Validate class value
      const validClasses = ['CLASS_11', 'CLASS_12', 'DROPPER'];
      if (!validClasses.includes(classValue)) {
        throw new Error('Invalid class value. Must be CLASS_11, CLASS_12, or DROPPER');
      }

      // Make API request
      const response = await axios.post(API_URL, {
        email: email,
        class: classValue
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      return response.data;
    } catch (error) {
      // Handle different error types
      if (error.response) {
        // Server responded with error status
        return rejectWithValue({
          message: error.response.data?.message || 'Server error occurred',
          status: error.response.status
        });
      } else if (error.request) {
        // No response received
        return rejectWithValue({
          message: 'Network error. Please check your connection.',
          status: null
        });
      } else {
        // Other errors
        return rejectWithValue({
          message: error.message,
          status: null
        });
      }
    }
  }
);

// Initial state
const initialState = {
  loading: false,
  success: false,
  error: null,
  submittedData: null,
  responseData: null,
  statusCode: null
};

// Create slice
const welcomeSlice = createSlice({
  name: 'welcome',
  initialState,
  reducers: {
    // Reset state to initial
    resetWelcomeState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.submittedData = null;
      state.responseData = null;
      state.statusCode = null;
    },

    // Clear error only
    clearError: (state) => {
      state.error = null;
    },

    // Reset success state
    resetSuccess: (state) => {
      state.success = false;
      state.responseData = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state
      .addCase(submitEarlyAccessRequest.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.responseData = null;
        state.statusCode = null;
      })

      // Handle fulfilled state
      .addCase(submitEarlyAccessRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.responseData = action.payload;
        state.statusCode = 200;

        // Store the submitted data (optional, based on your needs)
        if (action.meta?.arg) {
          state.submittedData = action.meta.arg;
        }
      })

      // Handle rejected state
      .addCase(submitEarlyAccessRequest.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload?.message || action.error?.message || 'Request failed';
        state.statusCode = action.payload?.status || null;
        state.responseData = null;
      });
  }
});

// Export actions
export const { resetWelcomeState, clearError, resetSuccess } = welcomeSlice.actions;

// Export selectors
export const selectWelcomeLoading = (state) => state.welcome.loading;
export const selectWelcomeSuccess = (state) => state.welcome.success;
export const selectWelcomeError = (state) => state.welcome.error;
export const selectSubmittedData = (state) => state.welcome.submittedData;
export const selectResponseData = (state) => state.welcome.responseData;
export const selectStatusCode = (state) => state.welcome.statusCode;

// Export reducer
export default welcomeSlice.reducer;