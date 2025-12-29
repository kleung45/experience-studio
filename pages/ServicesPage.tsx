
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
        <section className="py-24 sm:py-32 bg-background-light">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-display">
                        Our Expertise
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-text-secondary">
                        Delivering integrated design solutions across physical and digital realms. We blend strategy and creativity to craft experiences that captivate and convert.
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-3 bg-slate-200 border border-slate-200">
                    {services.map((service, index) => (
                        <div key={index} className="group relative bg-white p-8 transition-all hover:bg-primary/5">
                            <div className="flex h-full flex-col justify-between">
                                <div>
                                    <span className="material-symbols-outlined text-5xl text-primary mb-6 block">{service.icon}</span>
                                    <h3 className="text-2xl font-bold text-slate-900 font-display">{service.title}</h3>
                                    <p className="mt-3 text-base text-text-secondary leading-relaxed">{service.description}</p>
                                </div>
                                <div className="mt-8">
                                    <a className="font-semibold text-primary inline-flex items-center gap-2 group-hover:underline" href="#">
                                        Learn More
                                        <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="group relative bg-white p-8 transition-all hover:bg-primary/5 flex flex-col items-center justify-center text-center">
                        <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                            <span className="material-symbols-outlined text-4xl">add</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 font-display">Your Next Project</h3>
                        <p className="mt-2 text-base text-text-secondary leading-relaxed">
                            Have an idea? Let's discuss how we can bring it to life together.
                        </p>
                        <div className="mt-6">
                            <a className="font-semibold text-primary inline-flex items-center gap-2 group-hover:underline" href="#/contact">
                                Get in Touch
                                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
