
import React from 'react';

const projects = [
    { title: "Lumina Exhibition Hall", description: "Retail & Exhibition spaces that tell a story through immersive environments. We architect physical journeys that leave lasting impressions.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLI2YLm32FxgFdVdd87AJ8AolGqchrtwiAVF2GY3Z8JrcfoOV5df4CSjDSjr7bGZi3h6QJZabjUPWmSPepusmGzTVun9lFD2tSk6KJJwsCW8Z-U3jIbPMg00LOi9WQKNnjwGtn5xquVujijd1bH4JJfcXxOoP7TtkcErKQAXUOlzS6vMLnOqVtVhwPmujDVErFG5y-A99jDKxVmhWEKiPv3-s0xXTap1VACWjYZ2YA524XPHlqroFuT0Tfol3ntWuN5cAZfBQJeO4" },
    { title: "Nexus Interactive Kiosk", description: "Interactive technologies that bridge the physical gap for seamless engagement. From touchpoints to AR, we make spaces smart.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw40FXLTHLp2DTco4KWIvzhnU4xQC2x54Y4_JqI3RDHfgbMvaBVp2aw_Tywr16F4_ReeLZ4P8bw5pyaKbJ0HCPo8oX5PU2xNX8OK4UI8bSDH6UylwN9wNs5cznwVfGs82TCP80yPaJ1_gnZyqjgCkg2kH9r9qAGcZ6JyX7dgJFQkLQP_AaoUoMYa1mPYPYk7f8jN6Wb9Xh2XaT5RnWu99POlj5AxGr8zUhCo9BzjkFETs4GJWSxqZ6P8-M4g9E2sQpluI2_y4eI_0" },
    { title: "Aether Smart Bottle", description: "Tangible product design rooted in deep user experience and innovation. We prototype and refine to ensure market fit.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVjK_TGErN_4Ub8F9P8wkGOIlM3ty68ugwlocUViRHPqIE3WAo4XDibRp914yoZWnNq2D1Re_WiA-jlk0qwHrbhEgV9xAfxJVO5IjqnWPBeTKIS42BkwdVQ670Y8FvfFqmekuxKFSyj04y9sD_BYSKcQUBG8pH-fDVVe_9QKh4iBpVAKU6NXrccDhjODrCXe7m9rKoeAFlqadbI4rqH10AeaUAZ21APuFyucyI84HrRCnaEpQYP6AXqf8t_9l2vG5KJKM7LIiwWy4" },
    { title: "Quantum Pop-Up Event", description: "Crafting memorable events with immersive setups and interactive elements. Experiences that resonate long after.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCdBThNm69-REzfjp1eRwcBjy-PBnp5vV006FMsQfDAS_MluWDZIE3j5TViHPBaDePxsT0ogdNfccNOnI9OjZVZx4LF1Cb7VmGZFkAFEtTV1k6qXT7mcgcDzPBaPqAnsS_SiShh_w-C-OYKERaoRZkH67YEPMU6EK-6dbFr0mltuipiEBtCy8hCMT8HWV8QNJBZEpGxlNKbR9rYX5JIEwnHzK-O8SjlEQLPLKPMaj2RKzNVuMzSbgz3TdS3nYQKGqNBf0xfVxFG6w" },
    { title: "Momentum Installation", description: "Exploring emerging technologies to create bespoke solutions and future-proof designs for our clients.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwUBUBC7r3rKSDWq4tMQHOYo3C-9ChnWN3r4UXwpjaqyArDj_HpDVRT6IwnulQSHzLNElmI2YTuvQPgbrtWizFY3fx7oT_JakLaU6px2SLwyU5f-yDVA_9DykMke5HvAAj7lTA1sTnZoU0XCnKW4sPwfCfBFuiPwSFfgeVH8VDKXmlYzA39jOnvIc4VyCl1NYtTqLGmL9ozm4RZl7VQZvJfWpG6ibCXYslXVzv0oQlVCuXOjk8VTx5oz4hKwnyn0d-cqBgkOY6g5w" },
    { title: "Urban Canvas Pavilion", description: "A public art installation that reacts to environmental data, creating a living, breathing digital mural in the heart of the city.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYnlSIASV01XmFJ3YO1DjerrwsE4gxM9d_rpJhitodTbtDHDX9keF6l4luQpBmu7tVxXKHh63p9l4ftjrzuEpJ-Ukt7H0OE_81euQhDlaEB3yzrSq6bZ4THT1KqgtQ2gdbzemAtz5-2SJVcjMgNMO7RX4XukAwbgmg2060gXzqkJUkqKkZQRo_U0KbVrb2xF2BSSgBAFxU24sfP6kZ4gknisB1r-ew-IM4O_bOFzq07nRgXUGuDyfFQKT1xxTdASW2EeQRY6VwOR8" },
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
