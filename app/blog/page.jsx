'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '/store/slices/blogSlice';
import Link from 'next/link';
import Head from 'next/head';

export default function BlogPage() {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs({ limit: 10, offset: 0 }));
  }, [dispatch]);

  // SEO Metadata
  const siteUrl = 'https://yourdomain.com';
  const pageTitle = 'RankUp Blog - Expert NEET Preparation Articles & Study Tips';
  const pageDescription = 'Get expert NEET preparation guidance with RankUp Blog. Study tips, Biology, Chemistry, Physics articles, and proven strategies to boost your medical entrance exam scores.';
  const featuredImage = `${siteUrl}/blog-seo-banner.jpg`;
  const canonicalUrl = `${siteUrl}/blog`;
  const author = 'RankUp Team';
  const publishedTime = new Date().toISOString();

  // Structured Data for Blog
  const blogStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'RankUp Blog',
    'description': pageDescription,
    'url': canonicalUrl,
    'publisher': {
      '@type': 'Organization',
      'name': 'RankUp',
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteUrl}/logo.png`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': canonicalUrl
    }
  };

  // Generate breadcrumb structured data
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
        'item': canonicalUrl
      }
    ]
  };

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

  if (loading) {
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={canonicalUrl} />
        </Head>
        <section className="min-h-screen mt-10 bg-gradient-to-br from-[#F7FAFF] to-[#EFF4FB] py-16 px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F3B57]">
              RankUp Blog
            </h1>
            <p className="text-gray-600 mt-3 text-lg">
              Expert articles to boost your NEET preparation.
            </p>
          </div>
          <div className="container mx-auto flex justify-center items-center min-h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1F3B57] mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading blogs...</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={canonicalUrl} />
        </Head>
        <section className="min-h-screen mt-10 bg-gradient-to-br from-[#F7FAFF] to-[#EFF4FB] py-16 px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F3B57]">
              RankUp Blog
            </h1>
            <p className="text-gray-600 mt-3 text-lg">
              Expert articles to boost your NEET preparation.
            </p>
          </div>
          <div className="container mx-auto flex justify-center items-center min-h-96">
            <div className="text-center text-red-600">
              <p className="text-lg">Error loading blogs: {error}</p>
              <button
                onClick={() => dispatch(fetchBlogs({ limit: 10, offset: 0 }))}
                className="mt-4 px-6 py-2 bg-[#1F3B57] text-white rounded-lg hover:bg-[#2c4d75] transition-colors"
              >
                Try Again
              </button>
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
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="NEET preparation, medical entrance exam, study tips, biology, chemistry, physics, NEET 2024, MBBS, medical coaching" />
        <meta name="author" content={author} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:site_name" content="RankUp" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={publishedTime} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={featuredImage} />
        <meta property="twitter:creator" content="@rankup" />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1F3B57" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />

        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/blog-seo-banner.jpg" />

        {/* Alternate languages if available */}
        <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />
        <link rel="alternate" href={canonicalUrl} hrefLang="en" />
        <link rel="alternate" href={`${siteUrl}/hi/blog`} hrefLang="hi" />
      </Head>

      {/* Add schema markup in HTML structure */}
      <div itemScope itemType="https://schema.org/Blog">
        <section
          className="min-h-screen mt-10 bg-gradient-to-br from-[#F7FAFF] to-[#EFF4FB] py-16 px-6"
          itemScope
          itemType="https://schema.org/WPHeader"
        >
          <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-5xl font-extrabold text-[#1F3B57]"
              itemProp="headline"
            >
              RankUp Blog
            </h1>
            <p
              className="text-gray-600 mt-3 text-lg"
              itemProp="description"
            >
              Expert articles to boost your NEET preparation.
            </p>
          </div>

          {blogs && blogs.length > 0 ? (
            <div
              className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
              itemScope
              itemType="https://schema.org/ItemList"
            >
              {blogs.map((blog, index) => (
                <div
                  key={blog.id}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  itemID={`${siteUrl}/blog/${blog.slug}`}
                >
                  <meta itemProp="position" content={String(index + 1)} />
                  <Link
                    href={`/blog/${blog.slug}`}
                    itemProp="url"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    <div
                      className="cursor-pointer rounded-3xl overflow-hidden shadow-xl bg-white/70 backdrop-blur-xl border border-white/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                      itemScope
                      itemType="https://schema.org/BlogPosting"
                      itemID={`${siteUrl}/blog/${blog.slug}`}
                    >
                      <div className="h-52 overflow-hidden">
                        <img
                          src={blog.featuredImage || '/blog-placeholder.jpg'}
                          alt={blog.title}
                          className="w-full h-full object-cover hover:scale-110 transition duration-500"
                          onError={(e) => {
                            e.target.src = '/blog-placeholder.jpg';
                          }}
                          itemProp="image"
                          loading="lazy"
                          width="400"
                          height="250"
                        />
                      </div>

                      <div className="p-6">
                        <span
                          className="inline-block mb-3 text-sm px-3 py-1 bg-[#1F3B57] text-white rounded-full"
                          itemProp="articleSection"
                        >
                          {getCategoryDisplayName(blog.category)}
                        </span>

                        <h2
                          className="text-xl font-bold text-[#1F3B57] leading-snug mb-2 line-clamp-2"
                          itemProp="headline"
                        >
                          {blog.title}
                        </h2>

                        <p
                          className="text-gray-600 text-sm mb-4 line-clamp-3"
                          itemProp="description"
                        >
                          {blog.excerpt}
                        </p>

                        <div
                          className="flex items-center justify-between text-sm text-gray-500 pt-3 border-t"
                          itemProp="author"
                          itemScope
                          itemType="https://schema.org/Person"
                        >
                          <span>
                            <time itemProp="datePublished" dateTime={formatDateISO(blog.publishedAt)}>
                              🗓 {formatDate(blog.publishedAt)}
                            </time>
                          </span>
                          <span itemProp="name">✍️ {blog.authorName || 'RankUp Team'}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                          <span>⏱ {blog.readTime || 5} min read</span>
                          <span>👁 {blog.viewCount || 0} views</span>
                        </div>

                        {/* Hidden structured data for each blog post */}
                        <div style={{ display: 'none' }}>
                          <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                            <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                              <meta itemProp="url" content={`${siteUrl}/logo.png`} />
                            </div>
                            <meta itemProp="name" content="RankUp" />
                          </div>
                          <meta itemProp="dateModified" content={formatDateISO(blog.updatedAt || blog.publishedAt)} />
                          <meta itemProp="mainEntityOfPage" content={`${siteUrl}/blog/${blog.slug}`} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="container mx-auto flex justify-center items-center min-h-96">
              <div className="text-center text-gray-600">
                <p className="text-lg">No blogs found.</p>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}