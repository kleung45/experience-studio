import React, { memo } from 'react';

/**
 * ProcessStep Component
 * Memoized to prevent unnecessary re-renders
 * 
 * Performance optimization:
 * - memo() prevents re-render when props haven't changed
 * - Useful in lists where only some items might change
 * - Reduces unnecessary DOM updates in process timeline
 */

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export const ProcessStep = memo<ProcessStepProps>(
  ({ number, title, description }) => {
    return (
      <div className="group relative flex flex-col items-center text-center">
        {/* Step Number Circle */}
        <div className="relative z-10 flex size-20 items-center justify-center rounded-[2rem] border-4 border-white bg-white shadow-xl text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
          <span className="text-3xl font-black font-display">{number}</span>
        </div>

        {/* Step Title */}
        <h3 className="text-2xl font-bold font-display text-slate-900 mb-4">{title}</h3>

        {/* Step Description */}
        <p className="text-base text-slate-500 leading-relaxed">{description}</p>
      </div>
    );
  },
  // Custom comparison function (optional)
  (prevProps, nextProps) => {
    return (
      prevProps.number === nextProps.number &&
      prevProps.title === nextProps.title &&
      prevProps.description === nextProps.description
    );
  }
);

// Set display name for debugging
ProcessStep.displayName = 'ProcessStep';

export default ProcessStep;
