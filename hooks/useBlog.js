import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs, fetchBlogBySlug, clearCurrentBlog } from '/store/slices/blogSlice';

export const useBlog = () => {
  const dispatch = useDispatch();
  const {
    blogs,
    currentBlog,
    loading,
    loadingSingle,
    error,
    errorSingle,
    total,
    limit,
    offset
  } = useSelector((state) => state.blog);

  const getBlogs = (params = {}) => {
    dispatch(fetchBlogs(params));
  };

  const getBlogBySlug = (slug) => {
    dispatch(fetchBlogBySlug(slug));
  };

  const clearBlog = () => {
    dispatch(clearCurrentBlog());
  };

  const getRelatedBlogs = (currentSlug, limit = 2) => {
    return blogs
      .filter(blog => blog.slug !== currentSlug)
      .slice(0, limit);
  };

  return {
    blogs,
    currentBlog,
    loading,
    loadingSingle,
    error,
    errorSingle,
    total,
    limit,
    offset,
    getBlogs,
    getBlogBySlug,
    clearBlog,
    getRelatedBlogs,
  };
};