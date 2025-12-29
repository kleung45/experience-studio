
import React from 'react';

const expertise = [
  { icon: "storefront", title: "Spatial Design", description: "Retail & Exhibition spaces that tell a story through immersive environments. We architect physical journeys that leave lasting impressions." },
  { icon: "devices_other", title: "Digital Integration", description: "Interactive technologies that bridge the physical gap for seamless engagement. From touchpoints to AR, we make spaces smart." },
  { icon: "view_in_ar", title: "Product Strategy", description: "Tangible product design rooted in deep user experience and innovation. We prototype and refine to ensure market fit." },
  { icon: "event", title: "Event Design", description: "Crafting memorable events with immersive setups and interactive elements. Experiences that resonate long after." },
  { icon: "lightbulb", title: "Innovation Lab", description: "Exploring emerging technologies to create bespoke solutions and future-proof designs for our clients." },
];

const galleryImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDLI2YLm32FxgFdVdd87AJ8AolGqchrtwiAVF2GY3Z8JrcfoOV5df4CSjDSjr7bGZi3h6QJZabjUPWmSPepusmGzTVun9lFD2tSk6KJJwsCW8Z-U3jIbPMg00LOi9WQKNnjwGtn5xquVujijd1bH4JJfcXxOoP7TtkcErKQAXUOlzS6vMLnOqVtVhwPmujDVErFG5y-A99jDKxVmhWEKiPv3-s0xXTap1VACWjYZ2YA524XPHlqroFuT0Tfol3ntWuN5cAZfBQJeO4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAw40FXLTHLp2DTco4KWIvzhnU4xQC2x54Y4_JqI3RDHfgbMvaBVp2aw_Tywr16F4_ReeLZ4P8bw5pyaKbJ0HCPo8oX5PU2xNX8OK4UI8bSDH6UylwN9wNs5cznwVfGs82TCP80yPaJ1_gnZyqjgCkg2kH9r9qAGcZ6JyX7dgJFQkLQP_AaoUoMYa1mPYPYk7f8jN6Wb9Xh2XaT5RnWu99POlj5AxGr8zUhCo9BzjkFETs4GJWSxqZ6P8-M4g9E2sQpluI2_y4eI_0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAVjK_TGErN_4Ub8F9P8wkGOIlM3ty68ugwlocUViRHPqIE3WAo4XDibRp914yoZWnNq2D1Re_WiA-jlk0qwHrbhEgV9xAfxJVO5IjqnWPBeTKIS42BkwdVQ670Y8FvfFqmekuxKFSyj04y9sD_BYSKcQUBG8pH-fDVVe_9QKh4iBpVAKU6NXrccDhjODrCXe7m9rKoeAFlqadbI4rqH10AeaUAZ21APuFyucyI84HrRCnaEpQYP6AXqf8t_9l2vG5KJKM7LIiwWy4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDCdBThNm69-REzfjp1eRwcBjy-PBnp5vV006FMsQfDAS_MluWDZIE3j5TViHPBaDePxsT0ogdNfccNOnI9OjZVZx4LF1Cb7VmGZFkAFEtTV1k6qXT7mcgcDzPBaPqAnsS_SiShh_w-C-OYKERaoRZkH67YEPMU6EK-6dbFr0mltuipiEBtCy8hCMT8HWV8QNJBZEpGxlNKbR9rYX5JIEwnHzK-O8SjlEQLPLKPMaj2RKzNVuMzSbgz3TdS3nYQKGqNBf0xfVxFG6w",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDwUBUBC7r3rKSDWq4tMQHOYo3C-9ChnWN3r4UXwpjaqyArDj_HpDVRT6IwnulQSHzLNElmI2YTuvQPgbrtWizFY3fx7oT_JakLaU6px2SLwyU5f-yDVA_9DykMke5HvAAj7lTA1sTnZoU0XCnKW4sPwfCfBFuiPwSFfgeVH8VDKXmlYzA39jOnvIc4VyCl1NYtTqLGmL9ozm4RZl7VQZvJfWpG6ibCXYslXVzv0oQlVCuXOjk8VTx5oz4hKwnyn0d-cqBgkOY6g5w",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBYnlSIASV01XmFJ3YO1DjerrwsE4gxM9d_rpJhitodTbtDHDX9keF6l4luQpBmu7tVxXKHh63p9l4ftjrzuEpJ-Ukt7H0OE_81euQhDlaEB3yzrSq6bZ4THT1KqgtQ2gdbzemAtz5-2SJVcjMgNMO7RX4XukAwbgmg2060gXzqkJUkqKkZQRo_U0KbVrb2xF2BSSgBAFxU24sfP6kZ4gknisB1r-ew-IM4O_bOFzq07nRgXUGuDyfFQKT1xxTdASW2EeQRY6VwOR8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD5l6OmOMinlzUBAqhj9_wZxxRJU4esQuGwgdFVYxqbxQ_45z2uybUJvR9m2NMtUJwJGDpPeED7IrRjwf9bolaEJPxQ8reVZajRRzAgjWvT8kU0fCPFhoZLH25rFbXcWoK_cKeHlUppxJ8ZCaJWa6f0dPXhW6Q_7PivNiYMtrtotWkzjHd97Ms1aTu8EyFB3LcYsiFlyubNzgqUn6RpQr_XLWB4QDN9SIqx12544CviHoVIxVyAx0jPap1eQ4X1hm4r5GlP24XQLaU",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAN0LynbffpvnvZr45tc06zvT6LiTtDExuBLvxlqDfJtD20fvfn9l57AZcDPcjbnRpTy-L5RoBot0a9_Pl54O91uSc5vWefW0-aK_u2XK0SSpGr72MNIcliyl-lFeQdl2vACEI73coEMRHylXARl3msW8zASBWKcAc1Fd2RvN6J4Mcb15oDjEMUtNR3wqyrO8FfWugL5eAvVAIrDlvydkhl4lBqVrixbjj3RQy5eYnDCiwEzelFxWoOAUQW93_EWgLr-zA7Z22_9Rk",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB_sU3ikD8NfIJkCQzu7RkFYHtjdpfcjyTZYtPU6yTig7DrTF0rIpelaK-yRCJtuc1JSdKAADpd5Lw1Y-jC-FEf_qeQBLzwEbpn8IjbDRK9q6I5zUlTHhppt25mmMoSck-5_sK8kj0dGL_XGXunZQSXL-EWran435cd3MZich9iUPo3M4A1QkSKR6tBcCJpl-ZDzFC9e7RJq3HZ6eqAgVlOkhuhKxQzjJz7-QQe4gw9slkPTv_Seenz0IgPFRQwOLZ9NartNccFPMA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCSwdsVS5K_zXJe6F4OrM7VAUlnoK1K5qAo2OZINxIgw0ZWpQenupAXlZV6vrU7ZYRxLCnQp78VXqs3jh7kNGTzgQaFwD7wmPznTA67GR0q6JcRy6rfuh9UubWFyb0-QVtik0MOQk2c4K9kl-5FSwZP4AXwlX1-_3T87gRgI6MRdo2imd7Xy6F6Rc8v9kXqF-jY-bY4s91v9A0npAAoXVAcBIwfNy2iZsrD2ICw-2Ioq7Y_9c9pqXsklZLKw8FW8QjYSf9vQeP1FCc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDmqMbpqHjXLBhf3mkWoGGva5rNT6YPaJzR2_0AuwSA84_CdfrR-ltCZSc7DvUBTG5IcvgXiBQjRsVm3ZLHYdkplFZbnPWqScznyqDz3en0n8WHsULG6odSFN00FQ0Ar211LJ7sQoCHpw28H30KvRINYsggJ_fYPuoZBzvGszZNN8_NFhsSLOOJ6Bfqiua82HYzu75fgPqb5Fm2NNuKTiJccL81y6WRdB0d1rtC1OERwDGqRq0y8d4oSlLuzvVrpjb5raFwTiD3lbk",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuChhaR0PWklHuRjvbMP7PK6ttSkAldK6epqev0XCNKyQdrhEowXqj0q1V317XtYNuXofny3YUXxoxDqiMFOv2Hf-tZdJtQ8Z4PXFKwyMoKzajynZOXedPFYQH7tEtMnl8N-rmbGvpZUHNaMiuuPKzYkh8h49059_Xm8rlbpOGGou7vqijFaZi_LcVjXyUIvymLB1GhZ0NWz5L3HWbdG609Xe-XPQuwK5LKF5eQl36vdMKgLeGKuE2wkMXxnkExKuA7IvrRGN2dwJRI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ5Zg_ni94_YmRbrwSc86vkjEuetQxTm7KWkX7YB8-Wb7P4R1cHgylQ0ovwaG_7bPLb54qyz-qyvEUvYyqSEkqpQlVTUSYeVWl4UBcx-goNu0jbvbmStsDwRUVsHORo3vMIEcp6gQFnfOgcyrM3GT9xsoSx2rgaVGuDQcIC4U-Nt1OChAiIQ92hMqLYrHC00fkWyeivr2f3OCgSkPNtXndBldkh_JKnpDhICxJfK0QU1W9_LmXJoaFo5Xw0MJs9WDI5p7e7b2j79U",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDsPxmqNGA47mIUK17TLRHeBDcg-qAYDRA_sAxbQeUnn8gYVlaaw_9Gd-ag6RvW97zuHaOewv9WKydceoHmiztLezfYoosq3ffmUwwO7xoePEJVXR0dZS_15b-_lW1S8MKdL2ABIrt3eJndPPTvVqCpgqeAHbCn7CvffLEez3Vs30Z1L_u8gE6W9KGvOD7T-aUA3dmoStC_ZOQIPuwibMsybIF7cTA33AdIE5grNcfgl30VKBezZlUYnf6tWTDsWokmJyJuGVmU9V4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRjozx3M0xRnuHDPvIdntMzdo2X0cxSPlgGZbNTYk9BEaIX-15JuQ_5fZ-WtaTRYUa_Zl0pNVgpsCbnME9XR2rjObczu7xrPtYRt5Clxsl0D2f4VAaY7Nm_-MoYHMOc-i2iuE2JkxEnr8CXAemJjpXgSoZoEGXqf1Iwl-YNf1H_NWDki3Le7s_X_YqDy-qvN-5OwnJgzkn3zCNjV9AnQB8qV2fvaqFiJqE0vzpU-EFTNciZnklC8kUSWkMCnLsExJ1gthTflvQF0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAB6GCOOhjKZ5PzqRVz3hpuMtLotDXBbd1qV_D5sI4wwlUm_FtSbfxKk4fZpt5CWSQ-QgDcA7o1VWm0wkO_a7wVmgRJBExMCaszYIl41hvYQKfaZF3PT64xNQAop7mNFMCkP8ZWQOwrKvMXzsVQbppt3iS96BbVAfWkuyZsIMwY1YWWDbCUr4e8_gL7MAAiSBKXCFulYiy-0pEiXe7Q2alAKiy4vqzLM5uXBcRjBbz5J4d-dqCaCyFckcRLcmNI5zF-8cGVV_f8eFg",
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
            Designing the Future of Interaction <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">in Hong Kong</span>
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
