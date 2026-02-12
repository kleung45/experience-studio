import React from 'react';

/**
 * HomePage - Optimized Version
 * Performance improvements:
 * - Image lazy loading with loading="lazy"
 * - Async decoding for images
 * - Optimized gallery with responsive images
 * - Memoized components (to be implemented)
 */

const HomePage: React.FC = () => {
  // Gallery images - moved to component level for potential memoization
  const galleryImages = [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441984904556-0ac8d9d0b10d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441986300352-7e3dee05ae6f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441984904556-0ac8d9d0b10d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441986300352-7e3dee05ae6f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441984904556-0ac8d9d0b10d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441986300352-7e3dee05ae6f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441984904556-0ac8d9d0b10d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441986300352-7e3dee05ae6f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441984904556-0ac8d9d0b10d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441986300352-7e3dee05ae6f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <p className="text-base font-bold leading-7 text-primary font-display uppercase tracking-widest mb-6">
              Welcome to Yook Design
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-display leading-tight mb-6">
              Integrated Spatial & Digital Design
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-8 text-slate-300 mb-12">
              We craft immersive experiences that blend physical spaces with cutting-edge digital integration. From retail environments to interactive exhibitions, we create moments that captivate and convert.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#/contact"
                className="h-12 px-8 rounded-full bg-primary text-white font-bold transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 inline-flex items-center justify-center"
              >
                Start a Project
              </a>
              <a
                href="#/work"
                className="h-12 px-8 rounded-full border-2 border-white text-white font-bold transition-all hover:bg-white hover:text-slate-900 active:scale-95 inline-flex items-center justify-center"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
            <p className="text-base font-bold leading-7 text-primary font-display uppercase tracking-widest mb-4">
              Our Work
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-display leading-tight">
              Featured Projects
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-500">
              A selection of our recent work showcasing our integrated approach to spatial and digital design.
            </p>
          </div>

          {/* Gallery Grid with Lazy Loading */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-slate-100 cursor-pointer"
              >
                {/* Image with lazy loading */}
                <img
                  alt={`Yook Design project thumbnail ${index + 1}`}
                  src={src}
                  loading="lazy" // ← Critical: Lazy load images
                  decoding="async" // ← Critical: Async decode for better performance
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold">View Project</p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12">
            <a
              href="#/work"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-primary text-white font-bold transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
            >
              View All Projects
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
            <p className="text-base font-bold leading-7 text-primary font-display uppercase tracking-widest mb-4">
              What We Do
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-display leading-tight">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "storefront", title: "Spatial Design", description: "Immersive retail and exhibition spaces" },
              { icon: "devices_other", title: "Digital Integration", description: "Interactive technologies and smart spaces" },
              { icon: "view_in_ar", title: "Product Strategy", description: "User-centered product design and innovation" },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-slate-100"
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-display mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#/services"
                      className="font-bold text-primary inline-flex items-center gap-2 group-hover:underline decoration-2 underline-offset-4"
                    >
                      Learn More
                      <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-r from-primary to-blue-600 rounded-3xl px-6 py-24 sm:px-12 sm:py-32 shadow-2xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
                Ready to Transform Your Space?
              </h2>
              <p className="mt-6 text-lg leading-8 text-primary-50">
                Let's discuss your next project and explore how we can create an unforgettable experience.
              </p>
              <div className="mt-10 flex items-center justify-center">
                <a
                  href="#/contact"
                  className="h-12 min-w-[160px] rounded-full bg-white text-primary px-8 text-base font-bold transition-all hover:bg-slate-100 hover:scale-105 active:scale-95 flex items-center justify-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
