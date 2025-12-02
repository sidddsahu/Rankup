import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch all blogs
export const fetchBlogs = createAsyncThunk(
  'blog/fetchBlogs',
  async ({ limit = 10, offset = 0 } = {}) => {
    const response = await fetch(
      `https://rankup-api-temp.onrender.com/api/v1/blog?limit=${limit}&offset=${offset}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
);

// Async thunk to fetch single blog by slug
export const fetchBlogBySlug = createAsyncThunk(
  'blog/fetchBlogBySlug',
  async (slug, { rejectWithValue }) => {
    try {
      console.log(`[API] Fetching blog with slug: ${slug}`);

      const response = await fetch(
        `https://rankup-api-temp.onrender.com/api/v1/blog?slug=${slug}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('[API] Response received:', data);

      // Handle different response formats
      if (data.data && Array.isArray(data.data) && data.data.length > 0) {
        return data.data[0];
      } else if (data.data && !Array.isArray(data.data)) {
        return data.data;
      } else if (Array.isArray(data) && data.length > 0) {
        return data[0];
      } else if (data && data.id) {
        return data;
      } else {
        return rejectWithValue('Blog not found');
      }
    } catch (error) {
      console.error('[API] Error fetching blog:', error);
      return rejectWithValue(error.message);
    }
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogs: [],
    currentBlog: null,
    loading: false,
    loadingSingle: false,
    error: null,
    errorSingle: null,
    total: 0,
    limit: 10,
    offset: 0,
    currentSlug: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
      state.errorSingle = null;
    },
    clearCurrentBlog: (state) => {
      state.currentBlog = null;
      state.currentSlug = null;
      state.loadingSingle = false;
      state.errorSingle = null;
    },
    // This is the action you need to use
    resetCurrentBlog: (state) => {
      state.currentBlog = null;
      state.currentSlug = null;
      state.loadingSingle = false;
      state.errorSingle = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch all blogs
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload.data || [];
        state.total = action.payload.total || 0;
        state.limit = action.payload.limit || 10;
        state.offset = action.payload.offset || 0;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch single blog by slug
      .addCase(fetchBlogBySlug.pending, (state) => {
        state.loadingSingle = true;
        state.errorSingle = null;
      })
      .addCase(fetchBlogBySlug.fulfilled, (state, action) => {
        state.loadingSingle = false;
        state.currentBlog = action.payload;
        state.currentSlug = action.meta.arg;
        console.log('[Redux] Blog set:', action.payload?.title);
      })
      .addCase(fetchBlogBySlug.rejected, (state, action) => {
        state.loadingSingle = false;
        state.errorSingle = action.payload;
        state.currentBlog = null;
        state.currentSlug = null;
      });
  },
});

// Make sure all actions are exported
export const { clearError, clearCurrentBlog, resetCurrentBlog } = blogSlice.actions;
export default blogSlice.reducer;