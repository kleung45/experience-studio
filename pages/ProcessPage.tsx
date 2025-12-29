
import React from 'react';

const steps = [
    { number: "01", title: "Discovery & Strategy", description: "We dive deep to understand your brand, audience, and objectives. This phase is about collaborative workshops, market research, and defining a clear roadmap for success." },
    { number: "02", title: "Concept & Design", description: "Our creative team translates strategy into tangible concepts. We explore, sketch, and visualize the experience, focusing on innovative interactions and aesthetic excellence." },
    { number: "03", title: "Prototyping & Testing", description: "Ideas are brought to life through interactive prototypes. We rigorously test with users to refine usability, validate design choices, and ensure a seamless final product." },
    { number: "04", title: "Development & Build", description: "Our engineers and fabricators take over, building the digital and physical components. Precision, quality craftsmanship, and attention to detail are paramount." },
    { number: "05", title: "Launch & Iterate", description: "We manage the deployment and launch. Post-launch, we analyze performance data, gather feedback, and identify opportunities for ongoing improvement and evolution." },
];

const ProcessPage: React.FC = () => {
    return (
        <section className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center animate-fade-in-up mb-24">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl font-display leading-tight">
                        Our Integrated Process
                    </h1>
                    <p className="mt-8 text-xl leading-relaxed text-slate-500">
                        From initial concept to final execution, our five-step process ensures a seamless journey, blending strategy with cutting-edge design.
                    </p>
                </div>
                <div className="relative">
                    <div className="hidden lg:block absolute left-0 right-0 top-10 h-1 bg-slate-100 -z-10"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="group relative flex flex-col items-center text-center">
                                <div className="relative z-10 flex size-20 items-center justify-center rounded-[2rem] border-4 border-white bg-white shadow-xl text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <span className="text-3xl font-black font-display">{step.number}</span>
                                </div>
                                <h3 className="text-2xl font-bold font-display text-slate-900 mb-4">{step.title}</h3>
                                <p className="text-base text-slate-500 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessPage;
