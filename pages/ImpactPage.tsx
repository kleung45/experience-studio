import React from 'react';

/**
 * ImpactPage - Optimized Version
 * Performance improvements:
 * - Image lazy loading with loading="lazy"
 * - Async decoding for images
 * - Optimized testimonial images
 */

const ImpactPage: React.FC = () => {
  const testimonials = [
    {
      quote: "The team at Yook transformed our retail space into a dynamic, interactive journey. Customer dwell time has doubled, and sales are up 40% year-over-year. Truly phenomenal.",
      author: "Alex Chen",
      title: "Marketing Director, Avant Garde",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      offset: false
    },
    {
      quote: "Their digital integration strategy for our exhibition was flawless. The seamless blend of physical and augmented reality elements created a buzz and significantly increased visitor engagement.",
      author: "Samantha Lee",
      title: "Curator, HK Modern Arts Pavilion",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      offset: true
    }
  ];

  return (
    <>
      {/* Results Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up mb-24">
            <p className="text-base font-bold leading-7 text-primary font-display uppercase tracking-widest">Our Results</p>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl font-display leading-tight">
              Driving <br />Measurable Impact
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-slate-500 max-w-2xl mx-auto">
              We believe great design isn't just about aesthetics; it's about delivering tangible results that propel our clients forward.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center justify-center rounded-[2.5rem] bg-slate-50 p-12 transition-transform hover:-translate-y-2 group">
              <p className="text-7xl font-black tracking-tight text-primary font-display group-hover:scale-110 transition-transform duration-500">
                35%
              </p>
              <p className="mt-4 text-lg font-bold text-slate-900 font-display">Engagement</p>
              <p className="mt-1 text-sm text-slate-500">Average increase in user dwell time</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-[2.5rem] bg-slate-50 p-12 transition-transform hover:-translate-y-2 group">
              <p className="text-7xl font-black tracking-tight text-primary font-display group-hover:scale-110 transition-transform duration-500">
                2.5x
              </p>
              <p className="mt-4 text-lg font-bold text-slate-900 font-display">Conversion</p>
              <p className="mt-1 text-sm text-slate-500">Higher rates post-redesign</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-[2.5rem] bg-slate-50 p-12 transition-transform hover:-translate-y-2 group">
              <p className="text-7xl font-black tracking-tight text-primary font-display group-hover:scale-110 transition-transform duration-500">
                98%
              </p>
              <p className="mt-4 text-lg font-bold text-slate-900 font-display">Satisfaction</p>
              <p className="mt-1 text-sm text-slate-500">Client retention & success rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            {/* Testimonials Header */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Our partnerships are built on trust, collaboration, and a shared passion for excellence. Here's what some of our clients have to say about their experience working with us.
              </p>
              <div className="mt-8 flex items-center gap-2">
                <button
                  aria-label="Previous testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
                </button>
                <button
                  aria-label="Next testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Testimonial Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg shadow-primary/5 border border-slate-200 transition-transform hover:-translate-y-2 ${
                    testimonial.offset ? 'sm:mt-12' : ''
                  }`}
                >
                  <div className="flex-grow">
                    <p className="text-lg leading-relaxed text-slate-800">{testimonial.quote}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
                    {/* Testimonial Image with Lazy Loading */}
                    <img
                      alt={testimonial.author}
                      src={testimonial.image}
                      loading="lazy" // ← Critical: Lazy load testimonial images
                      decoding="async" // ← Critical: Async decode for better performance
                      className="h-14 w-14 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-600">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl py-16 sm:py-24 lg:py-32 px-6 sm:px-16 shadow-2xl">
            {/* Background decoration */}
            <div
              aria-hidden="true"
              className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#39E079] to-[#00A9FF] opacity-20"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>

            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
                Ready to Create Impact?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Let's collaborate to build experiences that not only inspire but also deliver exceptional results. Tell us about your next big idea.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#/contact"
                  className="h-12 min-w-[160px] rounded-full bg-primary px-8 text-base font-bold text-white transition hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 flex items-center justify-center"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactPage;
