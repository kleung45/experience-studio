
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
        <section className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-body">
                        Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">amazing together</span>.
                    </h1>
                    <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                        Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form below or reach out to us through one of our channels.
                    </p>
                </div>
                <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Office</h3>
                            <div className="flex items-start gap-4 text-text-secondary">
                                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                                <p className="text-sm leading-relaxed">14/F, Henley Industrial Center,<br />9-15 Bute St, Hong Kong</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Details</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4 text-text-secondary">
                                    <span className="material-symbols-outlined text-primary">mail</span>
                                    <a className="text-sm hover:text-primary transition-colors" href="mailto:info@yookdesign.com">info@yookdesign.com</a>
                                </div>
                                <div className="flex items-center gap-4 text-text-secondary">
                                    <span className="material-symbols-outlined text-primary">call</span>
                                    <a className="text-sm hover:text-primary transition-colors" href="tel:+85212345678">+852 1234 5678</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a className="flex items-center justify-center size-10 rounded-full bg-slate-100 text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors" href="#"><InstagramIcon /></a>
                                <a className="flex items-center justify-center size-10 rounded-full bg-slate-100 text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors" href="#"><DribbbleIcon /></a>
                                <a className="flex items-center justify-center size-10 rounded-full bg-slate-100 text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors" href="#"><XIcon /></a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="bg-surface-light p-8 sm:p-12 rounded-xl border border-surface-border">
                            <form action="#" className="space-y-6" method="POST" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="first-name">First Name</label>
                                        <input autoComplete="given-name" className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm placeholder:text-slate-400" id="first-name" name="first-name" placeholder="John" type="text" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="last-name">Last Name</label>
                                        <input autoComplete="family-name" className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm placeholder:text-slate-400" id="last-name" name="last-name" placeholder="Doe" type="text" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Email</label>
                                    <input autoComplete="email" className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm placeholder:text-slate-400" id="email" name="email" placeholder="you@example.com" type="email" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="subject">Subject</label>
                                    <input className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm placeholder:text-slate-400" id="subject" name="subject" placeholder="Inquiry about a new project" type="text" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">Message</label>
                                    <textarea className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm placeholder:text-slate-400" id="message" name="message" placeholder="Tell us more about your project..." rows={5}></textarea>
                                </div>
                                <div className="pt-2">
                                    <button className="w-full h-12 rounded-full bg-primary px-8 text-base font-bold text-white transition hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25" type="submit">
                                        Send Message
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
