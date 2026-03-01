import { motion } from 'framer-motion';
import { identity, assets } from '../constants/data';
import { Download, Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };

const Hero = () => (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="bg-grid" />
        <div className="bg-gradient" />

        <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

                {/* Text Content */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="section-label mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        AI student & ML Enthusiast
                    </div>

                    <h1 className="section-title !mb-4 !text-left">
                        Hi, I'm {identity.name}
                    </h1>

                    <p className="text-xl md:text-2xl font-semibold mb-6 tracking-tight text-[var(--accent)]">
                        {identity.title}
                    </p>

                    <div className="flex items-center gap-2 text-[var(--text2)] text-sm mb-8">
                        <MapPin size={14} className="text-[var(--accent)]" />
                        {identity.location}
                        <span className="mx-2">•</span>
                        <GraduationCap size={14} className="text-[var(--accent)]" />
                        {identity.subtitle}
                    </div>

                    <p className="text-lg text-[var(--text-dim)] leading-relaxed max-w-2xl mb-10">
                        {identity.about}
                    </p>

                    {/* Social/Contact Links */}
                    <div className="flex flex-wrap gap-4 mb-12">
                        <a
                            href={identity.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass hover:border-[var(--accent)] flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium text-[var(--text2)] hover:text-[var(--accent)] transition-all duration-300"
                        >
                            <Linkedin size={14} /> LinkedIn
                        </a>
                        <a
                            href={identity.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass hover:border-[var(--accent)] flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium text-[var(--text2)] hover:text-[var(--accent)] transition-all duration-300"
                        >
                            <Code size={14} /> GitHub
                        </a>
                        <a
                            href={`mailto:${identity.email}`}
                            className="glass hover:border-[var(--accent)] flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium text-[var(--text2)] hover:text-[var(--accent)] transition-all duration-300"
                        >
                            <Mail size={14} /> {identity.email}
                        </a>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="btn-primary flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={16} />
                        </a>
                        <a
                            href={assets.resumeUrl}
                            download="Shova_Gelal_Resume.pdf"
                            className="btn-outline flex items-center gap-2"
                        >
                            <Download size={16} /> Download Resume
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
                    <div className="relative w-80 h-[450px] rounded-[32px] overflow-hidden border border-[var(--border-strong)] shadow-2xl animate-float">
                        <img
                            src={assets.profilePhoto}
                            alt={identity.name}
                            className="w-full h-full object-cover"
                            onError={e => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-8xl font-black text-[var(--accent)] bg-gradient-to-br from-[var(--card)] to-[var(--bg-alt)]">SG</div>`;
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/40 to-transparent pointer-events-none" />
                    </div>
                    {/* Decorative Blob */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--accent)] opacity-20 blur-[80px] -z-10" />
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500 opacity-20 blur-[80px] -z-10" />
                </motion.div>

            </div>
        </div>
    </section>
);

export default Hero;
