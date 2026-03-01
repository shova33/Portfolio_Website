import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadership } from '../constants/data';
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
    <section id="volunteering" className="section relative overflow-hidden bg-[var(--bg-alt)]/20">
        <div className="container">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="section-label">Leadership</span>
                <h2 className="section-title">Involvement & Impact</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {leadership.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group card glass p-6 border border-[var(--border-2)] hover:border-[var(--accent)] transition-all flex flex-col h-full"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-indigo-500/10 text-[var(--accent)] border border-indigo-500/20 group-hover:scale-110 transition-transform">
                                        <Icon size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-white group-hover:text-[var(--accent)] transition-colors line-clamp-1">{item.role}</h4>
                                        <p className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-[0.1em]">{item.organization}</p>
                                    </div>
                                    <ExternalLink size={14} className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-opacity" />
                                </div>
                                <div className="mt-auto pt-4 border-t border-[var(--border-2)] flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-widest">Leadership Role</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </a>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
);


export default Community;
