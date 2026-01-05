import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchStaticPage = createAsyncThunk(
  'staticPages/fetchStaticPage',
  async (slug) => {
    const response = await fetch(`https://api.rankupp.in/api/v1/static-pages/slug/${slug}`);
    const data = await response.json();

    if (data.status && data.data) {
      return data.data;
    }
    throw new Error(data.message || 'Failed to fetch page');
  }
);

const staticPagesSlice = createSlice({
  name: 'staticPages',
  initialState: {
    currentPage: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearPage: (state) => {
      state.currentPage = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStaticPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStaticPage.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPage = action.payload;
      })
      .addCase(fetchStaticPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearPage } = staticPagesSlice.actions;
export default staticPagesSlice.reducer;