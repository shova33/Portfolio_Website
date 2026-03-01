import { motion } from 'framer-motion';
import { achievements } from '../constants/data';
import { Award, Zap, Trophy, ExternalLink, Activity, Code } from 'lucide-react';

const Achievements = () => {
    return (
        <section id="achievements" className="section relative overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="section-label mx-auto">Recognition</span>
                    <h2 className="section-title">Hackathons & Achievements</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className="card glass p-8 h-full flex flex-col items-center text-center border border-[var(--border-2)] hover:border-[var(--accent)] transition-all">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-[var(--accent-l)] border border-indigo-500/20 flex items-center justify-center text-[var(--accent)] group-hover:scale-110 group-hover:rotate-12 transition-all mb-6">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{item.title}</h3>
                                    <p className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-[0.2em] mb-4">{item.organization}</p>

                                    <div className="mt-auto pt-6 w-full">
                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text2)] hover:text-[var(--accent)] transition-colors"
                                            >
                                                <ExternalLink size={14} /> View Certificate
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-indigo-600 opacity-[0.03] blur-[120px] -z-10 pointer-events-none" />
        </section>
    );
};

export default Achievements;
