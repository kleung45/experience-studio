
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
        <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-display">
                        Our Integrated Process
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-text-secondary">
                        From initial concept to final execution, our five-step process ensures a seamless journey, blending strategy with cutting-edge design to create unforgettable experiences.
                    </p>
                </div>
                <div className="mt-20">
                    <div className="relative grid grid-cols-1 md:grid-cols-5 gap-y-16 md:gap-y-0 md:gap-x-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center">
                                 {index !== steps.length - 1 && (
                                    <div className="hidden md:block absolute left-1/2 top-7 h-0.5 w-full bg-surface-border z-0"></div>
                                )}
                                <div className="relative z-10 flex size-14 items-center justify-center rounded-full border-2 border-primary bg-background-light mb-6">
                                    <span className="text-2xl font-bold font-display text-primary">{step.number}</span>
                                </div>
                                <h3 className="text-xl font-bold font-display text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
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
