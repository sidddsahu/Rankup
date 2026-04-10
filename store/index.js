import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/blogSlice';
import faqReducer from './slices/faqSlice';
import staticPagesReducer from './slices/staticPagesSlice';
import welcomeReducer from './slices/welcomeSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    faq: faqReducer,
     staticPages: staticPagesReducer,
       welcome: welcomeReducer,
  },
});

export default store;