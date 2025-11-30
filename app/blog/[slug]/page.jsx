'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs, fetchBlogBySlug, clearCurrentBlog } from '/store/slices/blogSlice';
import Link from 'next/link';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

export default function BlogDetail({ params }) {
  const { slug } = params;
  const dispatch = useDispatch();
  const pathname = usePathname();
  const { blogs, currentBlog, loadingSingle, errorSingle } = useSelector((state) => state.blog);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  // Format date to readable format
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Format date for SEO (ISO)
  const formatDateISO = (dateString) => {
    if (!dateString) return new Date().toISOString();
    return new Date(dateString).toISOString();
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

  // Format content safely and add SEO enhancements
  const formatContent = (content) => {
    if (!content) return { __html: '<p>No content available.</p>' };

    // Add semantic HTML enhancements for SEO
    let enhancedContent = content
      .replace(/<h1/g, '<h2')
      .replace(/<\/h1>/g, '</h2>')
      .replace(/<h2/g, '<h3')
      .replace(/<\/h2>/g, '</h3>');

    return { __html: enhancedContent };
  };

  useEffect(() => {
    if (slug) {
      dispatch(fetchBlogBySlug(slug));
    }

    // Also fetch all blogs for related posts
    if (blogs.length === 0) {
      dispatch(fetchBlogs({ limit: 10, offset: 0 }));
    }

    return () => {
      dispatch(clearCurrentBlog());
    };
  }, [slug, dispatch, blogs.length]);

  useEffect(() => {
    if (blogs.length > 0 && slug) {
      const related = blogs
        .filter(blog => blog.slug !== slug)
        .slice(0, 2);
      setRelatedBlogs(related);
    }
  }, [blogs, slug]);

  // SEO Metadata based on current blog
  const siteUrl = 'https://yourdomain.com';
  const currentUrl = `${siteUrl}${pathname}`;
  const pageTitle = currentBlog ? `${currentBlog.title} - RankUp Blog` : 'Blog Article - RankUp';
  const pageDescription = currentBlog?.excerpt || 'Expert NEET preparation guidance and study tips from RankUp.';
  const featuredImage = currentBlog?.featuredImage || `${siteUrl}/blog-seo-banner.jpg`;
  const authorName = currentBlog?.authorName || 'RankUp Team';
  const publishedTime = currentBlog ? new Date(currentBlog.publishedAt).toISOString() : new Date().toISOString();
  const modifiedTime = currentBlog?.updatedAt ? new Date(currentBlog.updatedAt).toISOString() : publishedTime;

  // Blog Post Structured Data
  const blogPostStructuredData = currentBlog ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': currentBlog.title,
    'description': currentBlog.excerpt,
    'image': featuredImage,
    'author': {
      '@type': 'Person',
      'name': authorName
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'RankUp',
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteUrl}/logo.png`
      }
    },
    'datePublished': publishedTime,
    'dateModified': modifiedTime,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    'articleSection': getCategoryDisplayName(currentBlog.category),
    'keywords': currentBlog.tags?.join(', ') || 'NEET preparation, medical entrance',
    'wordCount': currentBlog.content ? currentBlog.content.length : 0,
    'timeRequired': `PT${currentBlog.readTime || 5}M`,
    'url': currentUrl
  } : null;

  // Breadcrumb Structured Data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': siteUrl
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Blog',
        'item': `${siteUrl}/blog`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': currentBlog?.title || 'Article',
        'item': currentUrl
      }
    ]
  };

  // FAQ Structured Data for common NEET questions
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the best way to prepare for NEET?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Consistent study, proper time management, regular practice tests, and focusing on NCERT books are key to NEET preparation success.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How many hours should I study for NEET?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Most successful NEET candidates study 6-8 hours daily, with increased hours during the final months before the exam.'
        }
      }
    ]
  };

  if (loadingSingle) {
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={currentUrl} />
        </Head>
        <section className="min-h-screen mt-20 bg-gradient-to-br from-[#F7FAFF] to-[#EDF3FB] py-12 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Loading skeleton for hero section */}
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-10 bg-white/70 backdrop-blur-xl border border-white/40">
              <div className="h-[260px] md:h-[380px] bg-gray-200 animate-pulse"></div>
              <div className="p-8">
                <div className="h-4 bg-gray-200 rounded w-24 mb-4 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                <div className="flex gap-4">
                  <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Loading skeleton for content */}
            <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/40">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="mb-4">
                  <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  if (errorSingle || !currentBlog) {
    return (
      <>
        <Head>
          <title>Blog Not Found - RankUp</title>
          <meta name="description" content="The requested blog article was not found." />
          <link rel="canonical" href={currentUrl} />
          <meta name="robots" content="noindex, follow" />
        </Head>
        <section className="min-h-screen mt-20 bg-gradient-to-br from-[#F7FAFF] to-[#EDF3FB] py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/40">
              <h1 className="text-2xl font-bold text-[#1F3B57] mb-4">Blog Not Found</h1>
              <p className="text-gray-600 mb-6">
                {errorSingle || 'The blog you are looking for does not exist.'}
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

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={currentBlog.tags?.join(', ') || 'NEET preparation, medical entrance, study tips'} />
        <meta name="author" content={authorName} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={currentBlog.title} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:site_name" content="RankUp" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:published_time" content={publishedTime} />
        <meta property="og:modified_time" content={modifiedTime} />
        <meta property="og:author" content={authorName} />
        <meta property="og:section" content={getCategoryDisplayName(currentBlog.category)} />
        {currentBlog.tags?.map(tag => (
          <meta key={tag} property="og:tag" content={tag} />
        ))}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta property="twitter:title" content={currentBlog.title} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={featuredImage} />
        <meta property="twitter:creator" content="@rankup" />
        <meta property="twitter:label1" content="Written by" />
        <meta property="twitter:data1" content={authorName} />
        <meta property="twitter:label2" content="Time to read" />
        <meta property="twitter:data2" content={`${currentBlog.readTime || 5} minutes`} />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1F3B57" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="article:published_time" content={publishedTime} />
        <meta name="article:modified_time" content={modifiedTime} />
        <meta name="article:author" content={authorName} />
        <meta name="article:section" content={getCategoryDisplayName(currentBlog.category)} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />

        {/* Preload critical resources */}
        <link rel="preload" as="image" href={featuredImage} />

        {/* Alternate languages */}
        <link rel="alternate" href={currentUrl} hrefLang="x-default" />
        <link rel="alternate" href={currentUrl} hrefLang="en" />
        <link rel="alternate" href={`${siteUrl}/hi/blog/${slug}`} hrefLang="hi" />

        {/* Article meta */}
        <meta property="article:tag" content={getCategoryDisplayName(currentBlog.category)} />
        {currentBlog.tags?.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Head>

      {/* Breadcrumb Navigation */}
      <nav className="max-w-4xl mx-auto mt-20 px-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-[#1F3B57] transition-colors">Home</Link>
          </li>
          <li>→</li>
          <li>
            <Link href="/blog" className="hover:text-[#1F3B57] transition-colors">Blog</Link>
          </li>
          <li>→</li>
          <li className="text-[#1F3B57] font-medium truncate" aria-current="page">
            {currentBlog.title}
          </li>
        </ol>
      </nav>

      <section
        className="min-h-screen bg-gradient-to-br from-[#F7FAFF] to-[#EDF3FB] py-12 px-6"
        itemScope
        itemType="https://chema.org/BlogPosting"
        itemID={currentUrl}
      >

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-10 bg-white/70 backdrop-blur-xl border border-white/40 hover:shadow-3xl transition-all duration-300">
          <div className="h-[260px] md:h-[380px] overflow-hidden">
            <img
              src={currentBlog.featuredImage || '/blog-placeholder.jpg'}
              alt={currentBlog.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
              onError={(e) => {
                e.target.src = '/blog-placeholder.jpg';
              }}
              itemProp="image"
              loading="eager"
              width="800"
              height="400"
            />
          </div>

          <div className="p-8">
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <span className="text-[#1F3B57] font-semibold text-sm">
                <time itemProp="datePublished" dateTime={formatDateISO(currentBlog.publishedAt)}>
                  🗓 {formatDate(currentBlog.publishedAt)}
                </time>
              </span>
              <span
                className="inline-block px-3 py-1 bg-[#1F3B57] text-white text-xs rounded-full"
                itemProp="articleSection"
              >
                {getCategoryDisplayName(currentBlog.category)}
              </span>
              {currentBlog.isFeatured && (
                <span className="inline-block px-3 py-1 bg-yellow-500 text-white text-xs rounded-full">
                  ⭐ Featured
                </span>
              )}
            </div>

            <h1
              className="text-3xl md:text-4xl font-bold text-[#1F3B57] mt-2 leading-tight"
              itemProp="headline"
            >
              {currentBlog.title}
            </h1>

            <p
              className="text-gray-600 mt-4 text-lg leading-relaxed"
              itemProp="description"
            >
              {currentBlog.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-gray-500 text-sm">
              <span className="flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content={authorName} />
                ✍️ {authorName}
              </span>
              <span className="flex items-center gap-2">
                ⏱ {currentBlog.readTime || 5} min read
              </span>
              <span className="flex items-center gap-2">
                👁 {currentBlog.viewCount || 0} views
              </span>
              <span className="flex items-center gap-2">
                <time itemProp="dateModified" dateTime={formatDateISO(currentBlog.updatedAt)}>
                  📅 Updated: {formatDate(currentBlog.updatedAt)}
                </time>
              </span>
            </div>

            {/* Tags */}
            {currentBlog.tags && currentBlog.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {currentBlog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border"
                    itemProp="keywords"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Blog Content Box */}
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300">
          <article
            className="prose prose-lg max-w-none
                      prose-headings:text-[#1F3B57] prose-headings:font-bold
                      prose-p:text-gray-700 prose-p:leading-relaxed
                      prose-strong:text-[#1F3B57] prose-strong:font-bold
                      prose-ul:text-gray-700 prose-ol:text-gray-700
                      prose-li:text-gray-700
                      prose-blockquote:border-l-[#1F3B57] prose-blockquote:bg-gray-50
                      prose-a:text-[#1F3B57] prose-a:underline hover:prose-a:text-[#2c4d75]
                      prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={formatContent(currentBlog.content)}
            itemProp="articleBody"
          />
        </div>

        {/* FAQ Section for SEO */}
        <div className="max-w-4xl mx-auto mt-12 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/40">
          <h2 className="text-2xl font-bold text-[#1F3B57] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#1F3B57]">What is the best way to prepare for NEET?</h3>
              <p className="text-gray-600 mt-2">Consistent study, proper time management, regular practice tests, and focusing on NCERT books are key to NEET preparation success.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1F3B57]">How many hours should I study for NEET?</h3>
              <p className="text-gray-600 mt-2">Most successful NEET candidates study 6-8 hours daily, with increased hours during the final months before the exam.</p>
            </div>
          </div>
        </div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-[#1F3B57] mb-6 flex items-center gap-2">
              📚 Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  itemProp="relatedLink"
                >
                  <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <span className="inline-block mb-3 text-xs px-3 py-1 bg-[#1F3B57] text-white rounded-full">
                      {getCategoryDisplayName(blog.category)}
                    </span>

                    <h3 className="font-bold text-lg text-[#1F3B57] group-hover:text-[#2c4d75] leading-snug mb-2 line-clamp-2">
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

        {/* Back to Blogs Button */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1F3B57] text-white rounded-lg hover:bg-[#2c4d75] transition-all duration-300 hover:shadow-lg"
            aria-label="Back to all blog articles"
          >
            ← Back to All Blogs
          </Link>
        </div>

      </section>
    </>
  );
}