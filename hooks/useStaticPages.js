"use client";

import { useDispatch, useSelector } from 'react-redux';
import { fetchStaticPage, clearPage } from '../store/slices/staticPagesSlice';
import { useCallback } from 'react';

export const useStaticPages = () => {
  const dispatch = useDispatch();
  const { currentPage, loading, error } = useSelector((state) => state.staticPages);

  const getStaticPage = useCallback((slug) => {
    dispatch(fetchStaticPage(slug));
  }, [dispatch]);

  const clearCurrentPage = useCallback(() => {
    dispatch(clearPage());
  }, [dispatch]);

  return {
    currentPage,
    loading,
    error,
    getStaticPage,
    clearCurrentPage,
  };
};

export default useStaticPages;