import { motion } from 'framer-motion';
import { experience } from '../constants/data';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const ACCENT = '#7C3AED';
const ACCENT_D = '#5B21B6';
const ACCENT_L = '#EDE9FE';
const TEXT = '#0F172A';
const TEXT2 = '#475569';
const BORDER = '#E2E8F0';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.48, delay, ease: 'easeOut' },
});

const Experience = () => (
    <section id="experience" className="section" style={{ borderTop: '1px solid #E2E8F0' }}>
        <div className="container">

            {/* Heading */}
            <motion.div {...fadeUp()}>
                <span className="section-label">
                    <Briefcase size={11} /> Career
                </span>
                <h2 className="section-title-lg">Experience</h2>
                <div className="section-bar" />
            </motion.div>

            {/* Experience cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {experience.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.id}
                            {...fadeUp(i * 0.1)}
                            className="card card-accent-left"
                            style={{ padding: '28px', display: 'flex', gap: 22, alignItems: 'flex-start' }}
                        >
                            {/* Logo / Icon container */}
                            <div style={{ width: 56, height: 56, borderRadius: 14, background: `linear-gradient(135deg, ${ACCENT_L}, #DDD6FE)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.company}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '8px' }}
                                        onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
                                    />
                                ) : null}
                                <div style={{ display: item.image ? 'none' : 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon size={22} style={{ color: ACCENT }} />
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                                    <div>
                                        <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: TEXT, marginBottom: 3 }}>
                                            {item.role}
                                        </h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                            <p style={{ fontSize: 14, fontWeight: 600, color: ACCENT }}>
                                                {item.company}
                                            </p>
                                            {item.link && item.link !== '#' && (
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.color = ACCENT} onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>
                                                    <ExternalLink size={14} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: ACCENT, backgroundColor: ACCENT_L, padding: '5px 14px', borderRadius: 99, whiteSpace: 'nowrap', border: `1px solid ${ACCENT}22` }}>
                                        <Calendar size={12} /> {item.period}
                                    </span>
                                </div>
                                <p style={{ fontSize: 15, color: TEXT2, lineHeight: 1.75, marginTop: 12 }}>
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
