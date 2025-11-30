import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch all blogs
export const fetchBlogs = createAsyncThunk(
  'blog/fetchBlogs',
  async ({ limit = 10, offset = 0 } = {}) => {
    const response = await fetch(
      `https://rankup-api-temp.onrender.com/api/v1/blog?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    return data;
  }
);

// Async thunk to fetch single blog by slug
export const fetchBlogBySlug = createAsyncThunk(
  'blog/fetchBlogBySlug',
  async (slug) => {
    const response = await fetch(
      `https://rankup-api-temp.onrender.com/api/v1/blog?slug=${slug}`
    );
    const data = await response.json();

    if (data.status && data.data && data.data.length > 0) {
      return data.data[0]; // Return the first matching blog
    } else {
      throw new Error('Blog not found');
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
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
      state.errorSingle = null;
    },
    clearCurrentBlog: (state) => {
      state.currentBlog = null;
    },
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
        state.blogs = action.payload.data;
        state.total = action.payload.total;
        state.limit = action.payload.limit;
        state.offset = action.payload.offset;
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
      })
      .addCase(fetchBlogBySlug.rejected, (state, action) => {
        state.loadingSingle = false;
        state.errorSingle = action.error.message;
      });
  },
});

export const { clearError, clearCurrentBlog } = blogSlice.actions;
export default blogSlice.reducer;