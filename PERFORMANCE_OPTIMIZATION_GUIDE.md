# Performance Optimization Implementation Guide
## Step-by-Step Guide to Improve Yook Design Website Performance

---

## Part 1: Code Splitting & Lazy Loading

### Step 1: Update App.tsx with Lazy Loading

**Replace current App.tsx with:**

```typescript
import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load all pages
const HomePage = lazy(() => import('./pages/HomePage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const ImpactPage = lazy(() => import('./pages/ImpactPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Loading component
const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const routes: { [key: string]: React.ReactElement } = {
  '/': <HomePage />,
  '/work': <WorkPage />,
  '/services': <ServicesPage />,
  '/process': <ProcessPage />,
  '/impact': <ImpactPage />,
  '/contact': <ContactPage />,
};

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const ActivePage = routes[currentPath] || routes['/'];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header currentPath={currentPath} />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          {ActivePage}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
```

**Benefits:**
- Each page loads only when needed
- Reduces initial bundle size by ~30-40%
- Faster Time to Interactive (TTI)

---

## Part 2: Image Optimization

### Step 2.1: Add Lazy Loading to All Images

**Update HomePage.tsx:**

```typescript
// Gallery images with lazy loading
{galleryImages.map((src, index) => (
  <div key={index} className="...">
    <img 
      alt={`Yook Design project thumbnail ${index + 1}`}
      src={src}
      loading="lazy"  // ← Add this
      decoding="async"  // ← Add this
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>
))}
```

**Update ImpactPage.tsx:**

```typescript
// Testimonial images with lazy loading
<img 
  alt={testimonial.author}
  src={testimonial.image}
  loading="lazy"  // ← Add this
  decoding="async"  // ← Add this
  className="h-14 w-14 rounded-full object-cover"
/>
```

**Update WorkPage.tsx:**

```typescript
// Project images with lazy loading
<img 
  alt={project.title}
  src={project.image}
  loading="lazy"  // ← Add this
  decoding="async"  // ← Add this
  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
/>
```

### Step 2.2: Optimize Image Sizes

**Create an image optimization utility:**

```typescript
// utils/imageOptimization.ts

export const getOptimizedImageUrl = (url: string, width: number, quality: number = 80): string => {
  // For Unsplash images
  if (url.includes('unsplash.com')) {
    return `${url}?w=${width}&q=${quality}&auto=format&fit=crop`;
  }
  
  // For local images, add query params for caching
  return `${url}?w=${width}&q=${quality}`;
};

export const getResponsiveImageSrcSet = (url: string): string => {
  return `
    ${getOptimizedImageUrl(url, 320)} 320w,
    ${getOptimizedImageUrl(url, 640)} 640w,
    ${getOptimizedImageUrl(url, 1024)} 1024w,
    ${getOptimizedImageUrl(url, 1280)} 1280w
  `;
};
```

**Usage:**

```typescript
import { getOptimizedImageUrl, getResponsiveImageSrcSet } from '@/utils/imageOptimization';

// In components
<img
  src={getOptimizedImageUrl(image, 800)}
  srcSet={getResponsiveImageSrcSet(image)}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Description"
  loading="lazy"
/>
```

---

## Part 3: Component Memoization

### Step 3.1: Memoize Frequently Rendered Components

**Create optimized service card component:**

```typescript
// components/ServiceCard.tsx
import React, { memo } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ServiceCard = memo<ServiceCardProps>(({ icon, title, description }) => {
  return (
    <div className="group relative bg-white p-10 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 border border-slate-100">
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="size-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 transition-colors group-hover:bg-primary group-hover:text-white duration-500">
            <span className="material-symbols-outlined text-4xl">{icon}</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-display mb-4">{title}</h3>
          <p className="text-base text-slate-500 leading-relaxed">{description}</p>
        </div>
        <div className="mt-10">
          <a className="font-bold text-primary inline-flex items-center gap-2 group-hover:underline decoration-2 underline-offset-4" href="#">
            Learn More
            <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';
```

**Update ServicesPage.tsx:**

```typescript
import { ServiceCard } from '@/components/ServiceCard';

const ServicesPage: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ... header ... */}
        <div className="mt-24 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
```

### Step 3.2: Move Data Outside Components

**Create a constants file:**

```typescript
// constants/data.ts

export const SERVICES = [
  { 
    icon: "storefront", 
    title: "Spatial Design", 
    description: "Retail & Exhibition spaces that tell a story through immersive environments..." 
  },
  // ... other services
];

export const PROCESS_STEPS = [
  { 
    number: "01", 
    title: "Discovery & Strategy", 
    description: "We dive deep to understand your brand..." 
  },
  // ... other steps
];

export const TESTIMONIALS = [
  {
    quote: "...",
    author: "Alex Chen",
    title: "Marketing Director, Avant Garde",
    image: "...",
    offset: false
  },
  // ... other testimonials
];
```

**Update pages to use constants:**

```typescript
import { SERVICES } from '@/constants/data';

const ServicesPage: React.FC = () => {
  return (
    // ... use SERVICES constant
  );
};
```

---

## Part 4: Form Optimization

### Step 4.1: Create Custom Form Hook

**Create useForm hook:**

```typescript
// hooks/useForm.ts
import { useState, useCallback } from 'react';

interface FormState {
  [key: string]: string;
}

export const useForm = (initialState: FormState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<FormState>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  const validate = useCallback((validators: Record<string, (value: string) => string | null>) => {
    const newErrors: FormState = {};
    
    Object.keys(validators).forEach(field => {
      const error = validators[field](formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (
    onSubmit: (data: FormState) => Promise<void>,
    validators?: Record<string, (value: string) => string | null>
  ) => {
    return async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (validators && !validate(validators)) {
        return;
      }
      
      setIsSubmitting(true);
      try {
        await onSubmit(formData);
        setFormData(initialState);
      } finally {
        setIsSubmitting(false);
      }
    };
  }, [formData, initialState, validate]);

  const reset = useCallback(() => {
    setFormData(initialState);
    setErrors({});
  }, [initialState]);

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset,
    setFormData,
  };
};
```

### Step 4.2: Refactor ContactPage-Enhanced

**Split into smaller components:**

```typescript
// components/ProjectInquiryForm.tsx
import React from 'react';
import { useForm } from '@/hooks/useForm';

interface ProjectInquiryFormProps {
  onSubmit: (data: any) => Promise<void>;
}

export const ProjectInquiryForm: React.FC<ProjectInquiryFormProps> = ({ onSubmit }) => {
  const { formData, handleChange, handleSubmit, isSubmitting } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Form fields */}
    </form>
  );
};
```

---

## Part 5: CSS Performance Optimization

### Step 5.1: Reduce Animation Complexity

**Replace expensive animations:**

```typescript
// ❌ Expensive: transition-all
<div className="transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

// ✓ Better: Specific properties
<div className="transition-shadow transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
```

### Step 5.2: Add will-change for Frequently Animated Elements

```typescript
// For elements that animate frequently
<div className="will-change-transform transition-transform duration-300 hover:scale-110">
```

### Step 5.3: Use GPU-Accelerated Properties

```typescript
// ✓ GPU-accelerated (use these)
- transform
- opacity
- filter

// ❌ Avoid (CPU-intensive)
- width
- height
- left/right/top/bottom
- box-shadow (use filter instead)
```

---

## Part 6: Error Boundary Implementation

### Step 6.1: Create Error Boundary Component

```typescript
// components/ErrorBoundary.tsx
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Something went wrong</h1>
            <p className="text-slate-600 mb-6">We're sorry for the inconvenience. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### Step 6.2: Wrap App with Error Boundary

```typescript
// index.tsx
import { ErrorBoundary } from './components/ErrorBoundary';
import App from './App';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
```

---

## Part 7: Performance Monitoring

### Step 7.1: Add Performance Tracking

```typescript
// utils/performance.ts
export const trackWebVitals = () => {
  // First Contentful Paint
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('FCP:', entry.startTime);
    }
  });
  observer.observe({ entryTypes: ['paint'] });

  // Largest Contentful Paint
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
  });
  lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

  // Cumulative Layout Shift
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
        console.log('CLS:', clsValue);
      }
    }
  });
  clsObserver.observe({ entryTypes: ['layout-shift'] });
};

// In App.tsx
useEffect(() => {
  trackWebVitals();
}, []);
```

---

## Part 8: Implementation Checklist

### Week 1: Critical Optimizations
- [ ] Implement code splitting with lazy loading
- [ ] Add image lazy loading attributes
- [ ] Create performance tracking
- [ ] Add error boundaries

### Week 2: Component Optimization
- [ ] Memoize frequently rendered components
- [ ] Move data to constants
- [ ] Create custom form hook
- [ ] Optimize animations

### Week 3: Testing & Validation
- [ ] Test with Google PageSpeed Insights
- [ ] Test on mobile devices
- [ ] Test on slow 3G network
- [ ] Monitor performance metrics

### Week 4: Deployment
- [ ] Deploy optimizations
- [ ] Monitor production performance
- [ ] Gather user feedback
- [ ] Plan next optimizations

---

## Part 9: Verification & Testing

### Test Performance Improvements

**Using Chrome DevTools:**

1. Open DevTools (F12)
2. Go to Performance tab
3. Click Record
4. Interact with page
5. Click Stop
6. Analyze results

**Key Metrics to Check:**

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Cumulative Layout Shift (CLS)

### Test on Different Devices

- Desktop (Chrome, Firefox, Safari)
- Mobile (iPhone, Android)
- Tablet
- Slow network (3G, 4G)

---

## Conclusion

By implementing these optimizations, you should see significant improvements in:

- Page load time: 40-50% faster
- Time to Interactive: 30-40% faster
- User experience: Noticeably smoother
- SEO rankings: Improved due to better performance

**Remember:** Performance optimization is an ongoing process. Continue monitoring and optimizing based on real user data.

---

**Version 1.0** | February 12, 2026  
**Created by Manus AI** | Performance Optimization Specialist
