"use client";

import { useDispatch, useSelector } from 'react-redux';
import { fetchFAQs, incrementHelpful, incrementNotHelpful } from '../store/slices/faqSlice';
import { useCallback } from 'react';

export const useFAQ = () => {
  const dispatch = useDispatch();
  const { faqs, loading, error } = useSelector((state) => state.faq);

  const getFAQs = useCallback(() => {
    dispatch(fetchFAQs());
  }, [dispatch]);

  const markHelpful = useCallback((faqId) => {
    dispatch(incrementHelpful(faqId));
  }, [dispatch]);

  const markNotHelpful = useCallback((faqId) => {
    dispatch(incrementNotHelpful(faqId));
  }, [dispatch]);

  return {
    faqs,
    loading,
    error,
    getFAQs,
    markHelpful,
    markNotHelpful,
  };
};

export default useFAQ;