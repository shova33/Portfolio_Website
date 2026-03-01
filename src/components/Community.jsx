import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadership, impact } from '../constants/data';
import { ChevronDown, Users, ExternalLink, Image as ImageIcon } from 'lucide-react';

const ACCENT = '#7C3AED';
const ACCENT_D = '#5B21B6';
const ACCENT_L = '#EDE9FE';
const TEXT = '#0F172A';
const TEXT2 = '#475569';
const BORDER = '#E2E8F0';

// ── Single collapsible leadership card ───────────────────────
const LeadershipCard = ({ item, delay = 0 }) => {
    const [open, setOpen] = useState(false);
    const Icon = item.icon;

    return (
        <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay }}
            className="card"
            style={{ overflow: 'hidden' }}
        >
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <button
                    onClick={() => setOpen(!open)}
                    style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 16, padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                    {/* Icon / Image container */}
                    <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: ACCENT_L, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
                        {item.image ? (
                            <img src={item.image} alt={item.organization} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '6px' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }} />
                        ) : null}
                        <div style={{ display: item.image ? 'none' : 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Icon size={18} style={{ color: ACCENT }} />
                        </div>
                    </div>

                    {/* Role + org */}
                    <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 2 }}>{item.role}</p>
                        <p style={{ fontSize: 12, fontWeight: 600, color: ACCENT }}>{item.organization}</p>
                    </div>

                    {/* Indicators */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        {item.link && item.link !== '#' && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{ color: '#CBD5E1', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.color = ACCENT} onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}>
                                <ExternalLink size={14} />
                            </a>
                        )}
                        <div style={{ width: 24, height: 24, borderRadius: 6, backgroundColor: open ? ACCENT_L : '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}>
                            <ChevronDown size={14} style={{ color: open ? ACCENT : '#94A3B8' }} />
                        </div>
                    </div>
                </button>
            </div>

            {/* Expandable description */}
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="desc"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{ padding: '4px 22px 18px 78px', fontSize: 14, color: TEXT2, lineHeight: 1.7, borderTop: `1px solid ${BORDER}` }}>
                            {item.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Community = () => (
    <section id="community" className="section section-alt" style={{ borderTop: '1px solid #E2E8F0' }}>
        <div className="container">

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48 }}
            >
                <span className="section-label">
                    <Users size={11} /> Community
                </span>
                <h2 className="section-title">Leadership &amp; Involvement</h2>
                <div className="section-bar" />
            </motion.div>

            {/* Collapsible leadership cards */}
            <div style={{ marginBottom: 44 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 14 }}>
                    Leadership &amp; Volunteering <span style={{ fontSize: 10, color: '#CBD5E1', fontWeight: 500 }}>— click to read more</span>
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {leadership.map((item, i) => (
                        <LeadershipCard key={item.id} item={item} delay={i * 0.07} />
                    ))}
                </div>
            </div>

            {/* Challenges — compact cards with image indicator and links */}
            <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 14 }}>
                    Challenges &amp; Continuous Learning
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
                    {impact.map((item, i) => (
                        <motion.div key={item.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.38, delay: i * 0.09 }}
                            className="card"
                            style={{ padding: '24px', backgroundColor: '#fff', position: 'relative' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, color: TEXT }}>{item.title}</p>
                                {item.link && item.link !== '#' && (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#CBD5E1' }} onMouseEnter={e => e.currentTarget.style.color = ACCENT} onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}>
                                        <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>

                            {item.organization && <p style={{ fontSize: 12, color: ACCENT, fontWeight: 600, marginBottom: 8 }}>{item.organization}</p>}
                            <p style={{ fontSize: 13, color: TEXT2, lineHeight: 1.72, marginBottom: item.image ? 12 : 0 }}>{item.description}</p>

                            {item.image && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: '#94A3B8' }}>
                                    <ImageIcon size={13} /> Has Visuals
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Community;
