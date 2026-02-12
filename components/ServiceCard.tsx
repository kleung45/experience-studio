import React, { memo } from 'react';

/**
 * ServiceCard Component
 * Memoized to prevent unnecessary re-renders
 * 
 * Performance optimization:
 * - memo() prevents re-render when props haven't changed
 * - Useful when parent component re-renders frequently
 * - Reduces unnecessary DOM updates
 */

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ServiceCard = memo<ServiceCardProps>(
  ({ icon, title, description }) => {
    return (
      <div className="group relative bg-white p-10 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 border border-slate-100">
        <div className="flex h-full flex-col justify-between">
          <div>
            {/* Icon Container */}
            <div className="size-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 transition-colors group-hover:bg-primary group-hover:text-white duration-500">
              <span className="material-symbols-outlined text-4xl">{icon}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-slate-900 font-display mb-4">{title}</h3>

            {/* Description */}
            <p className="text-base text-slate-500 leading-relaxed">{description}</p>
          </div>

          {/* Learn More Link */}
          <div className="mt-10">
            <a
              className="font-bold text-primary inline-flex items-center gap-2 group-hover:underline decoration-2 underline-offset-4 transition-all"
              href="#/services"
            >
              Learn More
              <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  },
  // Custom comparison function (optional)
  // Returns true if props are equal (skip re-render)
  (prevProps, nextProps) => {
    return (
      prevProps.icon === nextProps.icon &&
      prevProps.title === nextProps.title &&
      prevProps.description === nextProps.description
    );
  }
);

// Set display name for debugging
ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
