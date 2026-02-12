import React, { memo } from 'react';

/**
 * TestimonialCard Component
 * Memoized to prevent unnecessary re-renders
 * 
 * Performance optimization:
 * - memo() prevents re-render when props haven't changed
 * - Useful for testimonial lists that don't change frequently
 * - Reduces unnecessary DOM updates
 */

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  image: string;
  offset?: boolean;
}

export const TestimonialCard = memo<TestimonialCardProps>(
  ({ quote, author, title, image, offset = false }) => {
    return (
      <div
        className={`flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg shadow-primary/5 border border-slate-200 transition-transform hover:-translate-y-2 ${
          offset ? 'sm:mt-12' : ''
        }`}
      >
        {/* Quote */}
        <div className="flex-grow">
          <p className="text-lg leading-relaxed text-slate-800">{quote}</p>
        </div>

        {/* Author Info */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
          {/* Author Image with Lazy Loading */}
          <img
            alt={author}
            src={image}
            loading="lazy" // ← Critical: Lazy load testimonial images
            decoding="async" // ← Critical: Async decode for better performance
            className="h-14 w-14 rounded-full object-cover flex-shrink-0"
          />

          {/* Author Details */}
          <div>
            <p className="font-bold text-slate-900">{author}</p>
            <p className="text-sm text-slate-600">{title}</p>
          </div>
        </div>
      </div>
    );
  },
  // Custom comparison function (optional)
  (prevProps, nextProps) => {
    return (
      prevProps.quote === nextProps.quote &&
      prevProps.author === nextProps.author &&
      prevProps.title === nextProps.title &&
      prevProps.image === nextProps.image &&
      prevProps.offset === nextProps.offset
    );
  }
);

// Set display name for debugging
TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;
