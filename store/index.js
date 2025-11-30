import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/blogSlice';
import faqReducer from './slices/faqSlice';
import staticPagesReducer from './slices/staticPagesSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    faq: faqReducer,
     staticPages: staticPagesReducer,
  },
});

export default store;