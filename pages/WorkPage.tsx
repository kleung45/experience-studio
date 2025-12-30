
import React from 'react';

const projects = [
    { title: "A. Lange & Söhne", description: "This exclusive exhibition in Hong Kong showcases A. Lange & Söhne's watchmaking artistry, welcoming dealers and distributors to experience the collection.", image: "/AA.png" },
    { title: "Timevallee", description: "Experience a curated showcase of renowned watchmaking at the Hainan exhibition by TimeVallee, presenting exceptional timepieces from Cartier, Montblanc, Panerai, and more.", image: "/Timevalle.png" },
    { title: "Ocean Ground Flagship Store", description: "We partnered with US coffee brand Ocean Ground to conceptualize and design their Beijing flagship store—a space that embodies their commitment to exceptional quality. Our holistic design, from concept to layout, frames their high-standard coffee service and in-house bean roasting, creating an immersive brand experience for the Chinese market.", image: "/OG.png" },
    { title: "Manulife Conference", description: "For Manulife Hong Kong's conference, we created a Formula 1-inspired stage. The design visualized market competition and embodied the agents' drive to win, fueling a high-performance mindset.", image: "/ML.png" },
    { title: "DJI Exhibition", description: "Showcasing the latest in drone technology through immersive spatial design and interactive demonstrations. We created a futuristic environment that reflects DJI's innovative spirit.", image: "/16.png" },
    { title: "Burberry Interactive Windows", description: "We transformed Burberry's storefront in China with an interactive floral installation. The eye-catching display engaged directly with pedestrians, turning window shopping into an immersive, motion-responsive experience.", image: "/burberry.jpg" },
];

const expertise = [
    { icon: "storefront", title: "Spatial Design" },
    { icon: "devices_other", title: "Digital Integration" },
    { icon: "view_in_ar", title: "Product Strategy" },
    { icon: "event", title: "Event Design" },
    { icon: "lightbulb", title: "Innovation Lab" },
];

const WorkPage: React.FC = () => {
    return (
        <>
            <section className="py-24 sm:py-32 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
                        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl font-display leading-tight">
                            Our Projects Portfolio
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-slate-500 max-w-2xl mx-auto">
                            We blend physical space with digital innovation to create integrated retail, exhibition, and product experiences that captivate and convert.
                        </p>
                    </div>
                    <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2">
                                    <img alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={project.image} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 font-display group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-base text-slate-500 leading-relaxed line-clamp-2">{project.description}</p>
                                    <a className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link" href="#">
                                        View Case Study
                                        <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-24 bg-surface-light border-y border-surface-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display">Our Expertise</h2>
                        <p className="mt-4 text-lg text-text-secondary">Delivering integrated design solutions across physical and digital realms.</p>
                    </div>
                    <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 bg-surface-border border border-surface-border rounded-xl overflow-hidden">
                        {expertise.map((item, index) => (
                            <div key={index} className="group relative bg-white p-8 transition-all hover:bg-primary/5 flex flex-col items-center text-center">
                                <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <span className="material-symbols-outlined text-5xl">{item.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 font-display">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-24 sm:py-32 bg-background-light">
                <div className="mx-auto max-w-5xl text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display">
                        Ready to Create What's Next?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Our studio isn't just about pixels or bricks; it's about the feeling in between. We have successfully delivered over 50 integrated projects in the Greater Bay Area, serving clients from luxury retail to public sector exhibitions. Let's design the future of interaction together.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a className="rounded-full bg-primary px-8 py-3 text-base font-bold text-white shadow-lg shadow-primary/25 transition hover:bg-primary/90 hover:scale-105 active:scale-95" href="#/contact">
                            Start a Project
                        </a>
                        <a className="font-bold text-slate-900 hover:underline" href="#/contact">
                            Get in Touch <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkPage;
