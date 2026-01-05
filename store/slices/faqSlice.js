import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFAQs = createAsyncThunk(
  'faq/fetchFAQs',
  async () => {
    const response = await fetch('https://api.rankupp.in/api/v1/faq');
    const data = await response.json();

    if (data.status && data.data) {
      return data.data;
    }
    throw new Error(data.message || 'Failed to fetch FAQs');
  }
);

const faqSlice = createSlice({
  name: 'faq',
  initialState: {
    faqs: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    incrementHelpful: (state, action) => {
      const faq = state.faqs.find(f => f.id === action.payload);
      if (faq) faq.isHelpful = (faq.isHelpful || 0) + 1;
    },
    incrementNotHelpful: (state, action) => {
      const faq = state.faqs.find(f => f.id === action.payload);
      if (faq) faq.notHelpful = (faq.notHelpful || 0) + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFAQs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFAQs.fulfilled, (state, action) => {
        state.loading = false;
        state.faqs = action.payload
          .filter(faq => faq.isPublished)
          .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
      })
      .addCase(fetchFAQs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearError, incrementHelpful, incrementNotHelpful } = faqSlice.actions;
export default faqSlice.reducer;