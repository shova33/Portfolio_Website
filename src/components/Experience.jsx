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
    <section id="experience" className="section relative overflow-hidden">
        <div className="container">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="section-label">Background</span>
                <h2 className="section-title">Professional Journey</h2>
            </motion.div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[31px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent" />

                <div className="flex flex-col gap-12">
                    {experience.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="relative pl-20 group"
                            >
                                {/* Circle Point */}
                                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-[var(--bg)] border-2 border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-l)] transition-all z-10">
                                    <Icon size={24} />
                                </div>

                                <div className="card glass p-8 border border-[var(--border-2)] group-hover:border-[var(--border-strong)] transition-all">
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                                                {item.role}
                                            </h3>
                                            <div className="flex items-center gap-2 text-[var(--accent)] font-semibold">
                                                {item.company}
                                                {item.link && (
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                                                        <ExternalLink size={14} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-l)] border border-[var(--border)] text-[var(--accent)] text-xs font-bold tracking-wider">
                                            <Calendar size={12} /> {item.period}
                                        </div>
                                    </div>
                                    <p className="text-[var(--text2)] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
);


export default Experience;
