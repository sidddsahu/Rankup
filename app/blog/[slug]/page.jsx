'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogBySlug, clearCurrentBlog } from '/store/slices/blogSlice';
import Link from 'next/link';
import Head from 'next/head';
import { useParams } from 'next/navigation';

export default function BlogDetail() {
  const params = useParams();
  const slug = params?.slug;
  const dispatch = useDispatch();

  // Get state from Redux
  const {
    currentBlog,
    loadingSingle,
    errorSingle,
    blogs
  } = useSelector((state) => state.blog);

  // Local state
  const [blogData, setBlogData] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Format date to readable format
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch (e) {
      return 'Unknown date';
    }
  };

  // Format date for SEO (ISO)
  const formatDateISO = (dateString) => {
    if (!dateString) return new Date().toISOString();
    try {
      return new Date(dateString).toISOString();
    } catch (e) {
      return new Date().toISOString();
    }
  };

  // Get category display name
  const getCategoryDisplayName = (category) => {
    const categoryMap = {
      STUDY_TIPS: 'Study Tips',
      BIOLOGY: 'Biology',
      CHEMISTRY: 'Chemistry',
      PHYSICS: 'Physics',
      NEET_TIPS: 'NEET Tips',
    };
    return categoryMap[category] || category;
  };

  // Format content safely
  const formatContent = (content) => {
    if (!content) return { __html: '<p>No content available.</p>' };
    return { __html: content };
  };

  // Get related blogs
  const getRelatedBlogs = useCallback((currentBlogData) => {
    if (!currentBlogData || !blogs || blogs.length === 0) return [];

    return blogs
      .filter(blog => blog.id !== currentBlogData.id)
      .slice(0, 2);
  }, [blogs]);

  // Effect 1: Reset and fetch when slug changes
  useEffect(() => {
    if (!slug) return;

    console.log('[BlogDetail] Slug changed to:', slug);

    // Reset local state
    setBlogData(null);
    setRelatedBlogs([]);

    // Clear Redux current blog
    dispatch(clearCurrentBlog());

    // Fetch new blog
    dispatch(fetchBlogBySlug(slug));

    setIsInitialLoad(false);
  }, [slug, dispatch]);

  // Effect 2: Update local state when Redux state changes
  useEffect(() => {
    if (currentBlog && currentBlog.slug === slug) {
      console.log('[BlogDetail] Setting blog data:', currentBlog.title);
      setBlogData(currentBlog);
      const related = getRelatedBlogs(currentBlog);
      setRelatedBlogs(related);
    }
  }, [currentBlog, slug, getRelatedBlogs]);

  // Effect 3: Fallback - check blogs array if API fails
  useEffect(() => {
    if (!blogData && !loadingSingle && !errorSingle && blogs.length > 0) {
      const foundBlog = blogs.find(blog => blog.slug === slug);
      if (foundBlog) {
        console.log('[BlogDetail] Found blog in array:', foundBlog.title);
        setBlogData(foundBlog);
        const related = getRelatedBlogs(foundBlog);
        setRelatedBlogs(related);
      }
    }
  }, [blogData, loadingSingle, errorSingle, blogs, slug, getRelatedBlogs]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      dispatch(clearCurrentBlog());
    };
  }, [dispatch]);

  // Show loading state
  if (loadingSingle && !blogData) {
    return (
      <>
        <Head>
          <title>Loading... - RankUp Blog</title>
          <meta name="description" content="Loading blog article..." />
        </Head>
        <section className="min-h-screen mt-20 bg-gradient-to-br from-[#F7FAFF] to-[#EDF3FB] py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-10 bg-white/70 backdrop-blur-xl border border-white/40">
              <div className="h-[260px] md:h-[380px] bg-gray-200 animate-pulse"></div>
              <div className="p-8">
                <div className="h-4 bg-gray-200 rounded w-24 mb-4 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/40">
              <div className="h-4 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Show error state
  if (errorSingle && !blogData) {
    return (
      <>
        <Head>
          <title>Blog Not Found - RankUp</title>
          <meta name="description" content="The requested blog article was not found." />
        </Head>
        <section className="min-h-screen mt-20 bg-gradient-to-br from-[#F7FAFF] to-[#EDF3FB] py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/40">
              <h1 className="text-2xl font-bold text-[#1F3B57] mb-4">Blog Not Found</h1>
              <p className="text-gray-600 mb-6">
                The blog you are looking for does not exist or may have been removed.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-[#1F3B57] text-white rounded-lg hover:bg-[#2c4d75] transition-colors"
              >
                ← Back to Blogs
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Show blog content
  if (!blogData) {
    return null;
  }

  // SEO Metadata
  const siteUrl = 'https://www.rankupp.in';
  const currentUrl = `${siteUrl}/blog/${slug}`;
  const pageTitle = `${blogData.title} - RankUp Blog`;
  const pageDescription = blogData.excerpt || 'Expert NEET preparation guidance and study tips from RankUp.';
  const featuredImage = blogData.featuredImage || `${siteUrl}/blog-seo-banner.jpg`;
  const authorName = blogData.authorName || 'RankUp Team';
  const publishedTime = formatDateISO(blogData.publishedAt);
  const modifiedTime = blogData.updatedAt ? formatDateISO(blogData.updatedAt) : publishedTime;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={blogData.title} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:published_time" content={publishedTime} />
        <meta property="og:modified_time" content={modifiedTime} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogData.title} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={featuredImage} />
      </Head>

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto mt-20 px-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><Link href="/" className="hover:text-[#1F3B57]">Home</Link></li>
          <li>→</li>
          <li><Link href="/blog" className="hover:text-[#1F3B57]">Blog</Link></li>
          <li>→</li>
          <li className="text-[#1F3B57] font-medium truncate">{blogData.title}</li>
        </ol>
      </nav>

      <section className="min-h-screen bg-gradient-to-br from-[#F7FAFF] to-[#EDF3FB] py-12 px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-10 bg-white/70 backdrop-blur-xl border border-white/40">
          <div className="h-[360px] md:h-[480px] overflow-hidden">
            <img
              src={blogData.featuredImage || '/blog-placeholder.jpg'}
              alt={blogData.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
              onError={(e) => e.target.src = '/blog-placeholder.jpg'}
              loading="eager"
            />
          </div>

          <div className="p-8">
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <span className="text-[#1F3B57] font-semibold text-sm">
                🗓 {formatDate(blogData.publishedAt)}
              </span>
              <span className="inline-block px-3 py-1 bg-[#1F3B57] text-white text-xs rounded-full">
                {getCategoryDisplayName(blogData.category)}
              </span>
              {blogData.isFeatured && (
                <span className="inline-block px-3 py-1 bg-yellow-500 text-white text-xs rounded-full">
                  ⭐ Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#1F3B57] mt-2 leading-tight">
              {blogData.title}
            </h1>

            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              {blogData.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-gray-500 text-sm">
              <span>✍️ {authorName}</span>
              <span>⏱ {blogData.readTime || 5} min read</span>
             
            </div>

            {/* Tags */}
            {blogData.tags && blogData.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {blogData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/40">
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={formatContent(blogData.content)}
          />
        </div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-[#1F3B57] mb-6">📚 Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`}>
                  <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <span className="inline-block mb-3 text-xs px-3 py-1 bg-[#1F3B57] text-white rounded-full">
                      {getCategoryDisplayName(blog.category)}
                    </span>
                    <h3 className="font-bold text-lg text-[#1F3B57] leading-snug mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t">
                      <span>🗓 {formatDate(blog.publishedAt)}</span>
                      <span>⏱ {blog.readTime || 5} min</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1F3B57] text-white rounded-lg hover:bg-[#2c4d75] transition-all duration-300 hover:shadow-lg"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </section>
    </>
  );
}