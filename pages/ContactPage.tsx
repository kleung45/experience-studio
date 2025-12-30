
import React from 'react';

const InstagramIcon: React.FC = () => (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7.177a4.823 4.823 0 100 9.646 4.823 4.823 0 000-9.646zm0 7.852a3.03 3.03 0 110-6.058 3.03 3.03 0 010 6.058zM16.95 6.402a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fillRule="evenodd"></path></svg>
);

const DribbbleIcon: React.FC = () => (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.999 2C6.477 2 2 6.477 2 12c0 4.237 2.633 7.844 6.357 9.314-.085-.246-.164-.6-.195-1.002-.057-.751.353-1.393.353-1.393s-1.006-.01-1.006-2.235c0-1.077.587-1.853.587-1.853-.518-1.313-.23-3.17.203-3.953.64-1.293 2.19-1.053 2.805-.838.41-.318.963-.503 1.554-.503 2.112 0 3.82 2.073 3.82 4.186 0 1.257-.424 2.53-1.15 3.251.352.368.614.97.614 1.637 0 1.962-1.633 3.32-1.71 3.424C17.062 20.48 22 16.712 22 12c0-5.523-4.477-10-10.001-10z"></path></svg>
);

const XIcon: React.FC = () => (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
);


const ContactPage: React.FC = () => {
    return (
        <section className="py-24 sm:py-32 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center mb-24 animate-fade-in-up">
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-7xl font-display leading-tight">
                        Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">amazing together</span>.
                    </h1>
                    <p className="mt-8 text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                        Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form below or reach out through our channels.
                    </p>
                </div>
                <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    <div className="lg:col-span-5 space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Our Office</h3>
                            <div className="flex items-start gap-5 text-slate-500 group">
                                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/5 text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <p className="text-lg leading-relaxed pt-2">14/F, Henley Industrial Center,<br />9-15 Bute St, Hong Kong</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Contact Details</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-5 text-slate-500 group">
                                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/5 text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <a className="text-lg font-medium hover:text-primary transition-colors pt-1" href="mailto:info@yookdesign.com">info@yookdesign.com</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Follow Us</h3>
                            <div className="flex gap-5">
                                <a className="flex items-center justify-center size-14 rounded-2xl bg-slate-50 text-slate-600 hover:bg-primary/10 hover:text-primary transition-all hover:-translate-y-1" href="#"><InstagramIcon /></a>
                                <a className="flex items-center justify-center size-14 rounded-2xl bg-slate-50 text-slate-600 hover:bg-primary/10 hover:text-primary transition-all hover:-translate-y-1" href="#"><DribbbleIcon /></a>
                                <a className="flex items-center justify-center size-14 rounded-2xl bg-slate-50 text-slate-600 hover:bg-primary/10 hover:text-primary transition-all hover:-translate-y-1" href="#"><XIcon /></a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="bg-slate-50/50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 size-64 bg-primary/5 rounded-full blur-3xl"></div>
                            <form action="#" className="space-y-8 relative z-10" method="POST" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-3" htmlFor="first-name">First Name</label>
                                        <input autoComplete="given-name" className="block w-full h-14 rounded-2xl border-slate-200 bg-white shadow-sm focus:border-primary focus:ring-primary/20 sm:text-base placeholder:text-slate-400 transition-all" id="first-name" name="first-name" placeholder="John" type="text" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-3" htmlFor="last-name">Last Name</label>
                                        <input autoComplete="family-name" className="block w-full h-14 rounded-2xl border-slate-200 bg-white shadow-sm focus:border-primary focus:ring-primary/20 sm:text-base placeholder:text-slate-400 transition-all" id="last-name" name="last-name" placeholder="Doe" type="text" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-3" htmlFor="email">Email Address</label>
                                    <input autoComplete="email" className="block w-full h-14 rounded-2xl border-slate-200 bg-white shadow-sm focus:border-primary focus:ring-primary/20 sm:text-base placeholder:text-slate-400 transition-all" id="email" name="email" placeholder="you@example.com" type="email" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-3" htmlFor="subject">Subject</label>
                                    <input className="block w-full h-14 rounded-2xl border-slate-200 bg-white shadow-sm focus:border-primary focus:ring-primary/20 sm:text-base placeholder:text-slate-400 transition-all" id="subject" name="subject" placeholder="Inquiry about a new project" type="text" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-3" htmlFor="message">How can we help?</label>
                                    <textarea className="block w-full rounded-2xl border-slate-200 bg-white shadow-sm focus:border-primary focus:ring-primary/20 sm:text-base placeholder:text-slate-400 transition-all" id="message" name="message" placeholder="Tell us more about your project goals..." rows={5}></textarea>
                                </div>
                                <div className="pt-4">
                                    <button className="w-full h-14 rounded-2xl bg-primary px-8 text-lg font-bold text-white transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/25" type="submit">
                                        Send Inquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
