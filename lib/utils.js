// ... existing code ...

// Convert plain text to HTML with proper formatting
export const formatContentToHTML = (content) => {
  if (!content) return '';

  // If content is already HTML, return as is
  if (content.includes('<') && content.includes('>')) {
    return content;
  }

  // Convert plain text to HTML
  return content
    .split('\n')
    .map(paragraph => {
      if (paragraph.trim() === '') return '<br>';

      // Handle headers (lines starting with ###)
      if (paragraph.trim().startsWith('### ')) {
        return `<h3 class="text-xl font-bold text-[#1F3B57] mt-6 mb-3">${paragraph.replace('### ', '')}</h3>`;
      }

      // Handle bold text (wrapped in **)
      let formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#1F3B57]">$1</strong>');

      return `<p class="text-gray-700 mb-4 leading-relaxed">${formattedParagraph}</p>`;
    })
    .join('');
};

// Sanitize HTML content (basic sanitization)
export const sanitizeHTML = (html) => {
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};