
import React from 'react';

const expertise = [
  { icon: "storefront", title: "Spatial Design", description: "Retail & Exhibition spaces that tell a story through immersive environments. We architect physical journeys that leave lasting impressions." },
  { icon: "devices_other", title: "Digital Integration", description: "Interactive technologies that bridge the physical gap for seamless engagement. From touchpoints to AR, we make spaces smart." },
  { icon: "view_in_ar", title: "Product Strategy", description: "Tangible product design rooted in deep user experience and innovation. We prototype and refine to ensure market fit." },
  { icon: "event", title: "Event Design", description: "Crafting memorable events with immersive setups and interactive elements. Experiences that resonate long after." },
  { icon: "lightbulb", title: "Innovation Lab", description: "Exploring emerging technologies to create bespoke solutions and future-proof designs for our clients." },
];

const galleryImages = [
  "/Project-A.png",
  "/Project-B.png",
  "/Project-C.png",
  "/Project-D.png",
  "/Project-E.jpg",
  "/Project-F.png",
  "/Project-G.png",
  "/Project-H.png",
  "/Project-I.png",
  "/Project-J.png",
  "/Project-K.jpg",
  "/Project-L.png",
  "/Project-M.png",
  "/Project-N.png",
  "/Project-O.png",
  "/Project-P.png",
];

const HomePage: React.FC = () => {
  return (
    <>
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center pt-20 pb-10 overflow-hidden">
        <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center text-center gap-8 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full border border-surface-border bg-white/50 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
            Accepting new projects in Hong Kong
          </div>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl font-display">
            Designing the Future of Interaction <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">with Yook Design</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 sm:text-xl leading-relaxed">
            We blend physical space with digital innovation to create integrated retail, exhibition, and product experiences that captivate and convert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
            <a href="#/work" className="h-12 min-w-[170px] rounded-full bg-primary px-8 text-base font-bold text-white transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 flex items-center justify-center">
              View Our Work
            </a>
            <a href="#/contact" className="h-12 min-w-[170px] rounded-full border border-slate-200 bg-white/60 px-8 text-base font-bold text-slate-800 backdrop-blur-sm transition-all hover:bg-white/80 hover:border-slate-300 active:scale-95 flex items-center justify-center">
              Start a Project
            </a>
          </div>
        </div>
        <div className="relative z-0 mt-16 w-full opacity-60 hover:opacity-100 transition-opacity duration-700">
          <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-1 overflow-hidden">
            {galleryImages.map((src, index) => (
              <div key={index} className={`group relative aspect-square overflow-hidden bg-gray-100 ${index >= 6 && 'hidden lg:block'} ${index >= 7 && 'lg:hidden xl:block'}`}>
                <img alt={`Project thumbnail ${index + 1}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={src} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3 text-white text-xs font-bold tracking-wider uppercase">Project {String.fromCharCode(65 + index)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display">Our Expertise</h2>
              <p className="mt-4 text-lg text-slate-500">Delivering integrated design solutions across physical and digital realms.</p>
            </div>
            <a className="group flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors" href="#/services">
              Explore all services
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {expertise.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 border border-slate-100 hover:border-primary/20 hover:-translate-y-2 flex flex-col items-start text-left">
                <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 font-display">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 group-hover:text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: "url('/Alibaba.jpg')" }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Featured Project</p>
                <h3 className="text-3xl font-bold font-display mb-2">Lumina Exhibition Hall</h3>
                <p className="text-sm text-gray-300 line-clamp-2">A masterclass in blending physical retail with digital storytelling, delivered for the Hong Kong Cultural Centre.</p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center gap-8">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl font-display leading-tight">Where Ideas <br />Meet Reality</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our studio isn't just about pixels or bricks; it's about the feeling in between. We have successfully delivered over 50 integrated projects in the Greater Bay Area, serving clients from luxury retail to public sector exhibitions.
              </p>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <span className="material-symbols-outlined text-xl">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-display">Immersive storytelling</h4>
                    <p className="text-sm text-slate-500">Narratives that guide users through physical spaces.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <span className="material-symbols-outlined text-xl">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-display">Seamless technology</h4>
                    <p className="text-sm text-slate-500">Invisible tech that enhances rather than distracts.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <a href="#/work" className="group text-primary font-bold text-lg hover:underline decoration-2 underline-offset-8 inline-flex items-center gap-2">
                  View Case Study
                  <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">arrow_outward</span>
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
