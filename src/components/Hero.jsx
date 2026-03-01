import { motion } from 'framer-motion';
import { identity, assets } from '../constants/data';
import { Download, Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };

const Hero = () => (
    <section id="about" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Immersive Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_var(--accent-l)_0%,_transparent_70%)] opacity-40" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.05)_0%,_transparent_70%)] opacity-30" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-[0.03]" />
        </div>

        <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

                {/* Text Content */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Status Pill */}
                    <div className="section-label mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Advancing Human-Centric AI
                    </div>

                    <h1 className="section-title-lg !mb-4">
                        {identity.name}
                    </h1>

                    <p className="text-xl md:text-2xl font-semibold mb-6 tracking-tight">
                        <span className="text-white opacity-90">{identity.title}</span>
                        <span className="mx-2 text-[var(--accent)]">•</span>
                        <span className="text-[var(--accent)]">{identity.subtitle}</span>
                    </p>

                    <div className="flex items-center gap-2 text-[var(--text2)] text-sm mb-8">
                        <MapPin size={14} className="text-[var(--accent)]" />
                        {identity.location}
                    </div>

                    <p className="text-lg text-[var(--text2)] leading-relaxed max-w-2xl mb-10">
                        {identity.about}
                    </p>

                    {/* Social/Contact Links */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {[
                            { icon: Mail, label: identity.email, href: `mailto:${identity.email}` },
                            { icon: Linkedin, label: "LinkedIn", href: identity.linkedinUrl },
                        ].map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass hover:glass-accent flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium text-[var(--text2)] hover:text-[var(--accent)] border border-[var(--border-2)] hover:border-[var(--border)] transition-all duration-300"
                            >
                                <Icon size={14} /> {label}
                            </a>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-d)] text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1"
                        >
                            Explore Journey <ArrowRight size={16} />
                        </a>
                        <a
                            href={assets.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-8 py-4 rounded-xl glass border border-[var(--border-2)] hover:border-[var(--accent)] text-[var(--text)] font-bold text-sm transition-all duration-300 hover:-translate-y-1"
                        >
                            <Download size={16} /> Technical Resume
                        </a>
                    </div>
                </motion.div>

                {/* Profile Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative hidden md:block"
                >
                    {/* Decorative Rings */}
                    <div className="absolute -inset-4 border border-[var(--border)] rounded-[32px] opacity-20 animate-[spin_20s_linear_infinite] pointer-events-none" />
                    <div className="absolute -inset-8 border border-[var(--accent-l)] rounded-[40px] opacity-10 animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />

                    <div className="relative w-72 h-96 rounded-3xl overflow-hidden glass border-2 border-[var(--border)] shadow-2xl">
                        <img
                            src={assets.profilePhoto}
                            alt={identity.name}
                            className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            onError={e => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-7xl font-black text-[var(--accent)] bg-gradient-to-br from-[var(--card)] to-[var(--bg-alt)]">SG</div>`;
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 to-transparent pointer-events-none" />
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
);

export default Hero;
