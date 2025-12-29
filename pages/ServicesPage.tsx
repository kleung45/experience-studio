
import React from 'react';

const services = [
    { icon: "storefront", title: "Spatial Design", description: "Retail & Exhibition spaces that tell a story through immersive environments. We architect physical journeys that leave lasting impressions." },
    { icon: "devices_other", title: "Digital Integration", description: "Interactive technologies that bridge the physical gap for seamless engagement. From touchpoints to AR, we make spaces smart." },
    { icon: "view_in_ar", title: "Product Strategy", description: "Tangible product design rooted in deep user experience and innovation. We prototype and refine to ensure market fit." },
    { icon: "event", title: "Event Design", description: "Crafting memorable events with immersive setups and interactive elements. Experiences that resonate long after." },
    { icon: "lightbulb", title: "Innovation Lab", description: "Exploring emerging technologies to create bespoke solutions and future-proof designs for our clients." },
];

const ServicesPage: React.FC = () => {
    return (
        <section className="py-24 sm:py-32 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl font-display leading-tight">
                        Our Expertise
                    </h1>
                    <p className="mt-8 text-xl leading-relaxed text-slate-500">
                        Delivering integrated design solutions across physical and digital realms. We blend strategy and creativity to craft experiences that captivate and convert.
                    </p>
                </div>
                <div className="mt-24 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div key={index} className="group relative bg-white p-10 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 border border-slate-100">
                            <div className="flex h-full flex-col justify-between">
                                <div>
                                    <div className="size-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 transition-colors group-hover:bg-primary group-hover:text-white duration-500">
                                        <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 font-display mb-4">{service.title}</h3>
                                    <p className="text-base text-slate-500 leading-relaxed">{service.description}</p>
                                </div>
                                <div className="mt-10">
                                    <a className="font-bold text-primary inline-flex items-center gap-2 group-hover:underline decoration-2 underline-offset-4" href="#">
                                        Learn More
                                        <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="group relative bg-primary p-10 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 flex flex-col items-start justify-center text-white">
                        <div className="size-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-8">
                            <span className="material-symbols-outlined text-4xl">add</span>
                        </div>
                        <h3 className="text-3xl font-bold font-display mb-4">Your Next Project</h3>
                        <p className="text-base text-primary-50/80 leading-relaxed mb-10">
                            Have a unique challenge? Let's discuss how we can bring your vision to life with our integrated approach.
                        </p>
                        <a className="h-12 px-8 rounded-full bg-white text-primary font-bold flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-lg" href="#/contact">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
