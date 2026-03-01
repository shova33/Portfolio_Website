import { motion } from 'framer-motion';
import { experience } from '../constants/data';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const Experience = () => (
    <section id="experience" className="section bg-[var(--bg)]">
        <div className="container">

            <motion.div {...fadeUp()}>
                <span className="section-label">Career Journey</span>
                <h2 className="section-title">Professional Experience</h2>
                <div className="section-bar" />
            </motion.div>

            <div className="flex flex-col gap-6">
                {experience.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.id}
                            {...fadeUp(i * 0.1)}
                            className="group card p-8 flex flex-col md:flex-row gap-8 items-start hover:border-[var(--accent)] transition-all"
                        >
                            {/* Visual Asset / Icon */}
                            <div className="relative group-hover:scale-105 transition-transform duration-500">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
                                <div className="relative w-16 h-16 rounded-xl bg-[var(--bg-alt)] border border-[var(--border-2)] flex items-center justify-center overflow-hidden">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.company}
                                            className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all"
                                            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
                                        />
                                    ) : null}
                                    <div className="hidden w-full h-full items-center justify-center text-[var(--accent)]">
                                        <Icon size={24} />
                                    </div>
                                </div>
                            </div>

                            {/* Content Block */}
                            <div className="flex-1 w-full">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold mb-1 group-hover:text-[var(--accent)] transition-colors">
                                            {item.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-[var(--accent)] font-bold text-sm">
                                            {item.company}
                                            {item.link && item.link !== '#' && (
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                                                    <ExternalLink size={14} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-l)] border border-[var(--border)] text-[var(--accent)] text-xs font-bold tracking-wider">
                                        <Calendar size={12} /> {item.period.toUpperCase()}
                                    </div>
                                </div>
                                <p className="text-[var(--text2)] text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default Experience;
