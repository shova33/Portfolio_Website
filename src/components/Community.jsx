import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadership, impact } from '../constants/data';
import { ChevronDown, Users, ExternalLink, Globe } from 'lucide-react';

const LeadershipCard = ({ item, delay = 0 }) => {
    const [open, setOpen] = useState(false);
    const Icon = item.icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="card glass overflow-hidden border border-[var(--border-2)]"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center gap-6 p-6 text-left transition-colors hover:bg-white/5"
            >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0 border border-indigo-500/20 text-[var(--accent)]">
                    {item.image ? (
                        <img src={item.image} alt={item.organization} className="w-8 h-8 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }} />
                    ) : null}
                    <div className="hidden w-full h-full items-center justify-center">
                        <Icon size={20} />
                    </div>
                </div>

                <div className="flex-1">
                    <h4 className="text-base font-bold text-[var(--text)] mb-1">{item.role}</h4>
                    <p className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">{item.organization}</p>
                </div>

                <div className={`p-2 rounded-lg bg-[var(--bg)] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
                    <ChevronDown size={14} className="text-[var(--accent)]" />
                </div>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-[var(--border-2)]"
                    >
                        <div className="p-6 pt-4 text-sm text-[var(--text2)] leading-relaxed bg-[var(--bg-alt)]/50">
                            {item.description}
                            {item.link && item.link !== '#' && (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 text-[var(--accent)] font-bold hover:underline">
                                    <ExternalLink size={14} /> View Initiative
                                </a>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Community = () => (
    <section id="community" className="section bg-[var(--bg-alt)]/30">
        <div className="container">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="section-label">Impact</span>
                <h2 className="section-title">Leadership & Community</h2>
                <div className="section-bar" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Leadership Column */}
                <div>
                    <h3 className="text-xs font-black text-[var(--muted)] uppercase tracking-[0.3em] mb-8">Volunteering & Direction</h3>
                    <div className="flex flex-col gap-4">
                        {leadership.map((item, i) => (
                            <LeadershipCard key={item.id} item={item} delay={i * 0.1} />
                        ))}
                    </div>
                </div>

                {/* Impact/Challenges Column */}
                <div>
                    <h3 className="text-xs font-black text-[var(--muted)] uppercase tracking-[0.3em] mb-8">Continuous Growth</h3>
                    <div className="bento-grid gap-4">
                        {impact.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`card p-6 bg-[var(--card)] border border-[var(--border-2)] ${i === 0 ? 'bento-span-4' : 'bento-span-2'}`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-base font-bold">{item.title}</h4>
                                    {item.link && item.link !== '#' && (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)]">
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                                <p className="text-xs text-[var(--text2)] leading-relaxed mb-4">{item.description}</p>
                                {item.organization && (
                                    <div className="mt-auto flex items-center gap-2 text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider">
                                        <Globe size={10} /> {item.organization}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Community;
