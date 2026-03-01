import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, education, certifications } from '../constants/data';
import { CheckCircle, ChevronDown, Award, ExternalLink, GraduationCap, Image as ImageIcon } from 'lucide-react';

const ACCENT = '#7C3AED';
const ACCENT_D = '#5B21B6';
const ACCENT_L = '#EDE9FE';
const TEXT = '#0F172A';
const TEXT2 = '#475569';
const BORDER = '#E2E8F0';

// ── Collapsible skill group card ──────────────────────────────
const SkillGroup = ({ group, defaultOpen = false, delay = 0 }) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay }}
            className="card"
            style={{ overflow: 'hidden' }}
        >
            <button
                onClick={() => setOpen(!open)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', gap: 12 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: open ? ACCENT : '#CBD5E1', transition: 'background-color 0.3s' }} />
                    <h4 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: open ? ACCENT_D : TEXT, textAlign: 'left', letterSpacing: '0.01em', transition: 'color 0.3s' }}>
                        {group.category}
                    </h4>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 11, color: '#94A3B8', fontWeight: 500 }}>{group.items.length} skills</span>
                    <div style={{
                        width: 24, height: 24, borderRadius: 6, backgroundColor: open ? ACCENT_L : '#F8FAFC',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.3s',
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}>
                        <ChevronDown size={14} style={{ color: open ? ACCENT : '#94A3B8' }} />
                    </div>
                </div>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ padding: '4px 22px 20px', display: 'flex', flexWrap: 'wrap', gap: 7, borderTop: `1px solid ${BORDER}` }}>
                            {group.items.map((item, i) => (
                                <span key={i} className="tag">{item}</span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Skills = () => (
    <section id="skills" className="section" style={{ borderTop: '1px solid #E2E8F0' }}>
        <div className="container">

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48 }}
            >
                <span className="section-label">Background</span>
                <h2 className="section-title">Skills &amp; Education</h2>
                <div className="section-bar" />
            </motion.div>

            {/* Education card */}
            <div style={{ marginBottom: 40 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 14 }}>Education</p>
                {education.map((edu, i) => (
                    <motion.div key={edu.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.42, delay: i * 0.07 }}
                        className="card card-accent-left"
                        style={{ padding: '22px 24px', display: 'flex', gap: 16, alignItems: 'center', marginBottom: 10 }}
                    >
                        {/* Logo / Icon */}
                        <div style={{ width: 44, height: 44, borderRadius: 10, background: ACCENT_L, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${BORDER}`, overflow: 'hidden' }}>
                            {edu.image ? (
                                <img src={edu.image} alt={edu.institution} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }} />
                            ) : null}
                            <div style={{ display: edu.image ? 'none' : 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <GraduationCap size={18} style={{ color: ACCENT }} />
                            </div>
                        </div>

                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10 }}>
                                <div>
                                    <h4 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: TEXT, marginBottom: 5 }}>{edu.degree}</h4>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <p style={{ fontSize: 14, color: ACCENT, fontWeight: 600 }}>{edu.institution}</p>
                                        {edu.link && edu.link !== '#' && (
                                            <a href={edu.link} target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8' }} onMouseEnter={e => e.currentTarget.style.color = ACCENT} onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>
                                                <ExternalLink size={12} />
                                            </a>
                                        )}
                                    </div>
                                    <p style={{ fontSize: 13, color: TEXT2, marginTop: 4 }}>{edu.location} · {edu.description}</p>
                                </div>
                                <span style={{ fontSize: 12, fontWeight: 600, color: ACCENT, backgroundColor: ACCENT_L, padding: '5px 14px', borderRadius: 99, whiteSpace: 'nowrap', border: `1px solid ${ACCENT}22` }}>
                                    {edu.period}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Skills — collapsible groups */}
            <div style={{ marginBottom: 40 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 14 }}>
                    Technical Skills <span style={{ fontSize: 10, color: '#CBD5E1', fontWeight: 500 }}> — click to expand</span>
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 10 }}>
                    {skills.map((group, i) => (
                        <SkillGroup key={i} group={group} defaultOpen={i === 0} delay={i * 0.07} />
                    ))}
                </div>
            </div>

            {/* Certifications — compact horizontal chips with links */}
            <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 14 }}>
                    Certifications
                </p>
                <div className="cert-row">
                    {certifications.map((cert, i) => (
                        <motion.a key={cert.id}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.07 }}
                            className="cert-chip"
                            style={{ textDecoration: 'none' }}
                        >
                            <Award size={14} style={{ color: ACCENT, flexShrink: 0 }} />
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                <span>
                                    <strong style={{ color: TEXT, fontWeight: 600, fontSize: 13 }}>{cert.title}</strong>
                                    <span style={{ color: '#94A3B8', fontSize: 12 }}> · {cert.issuer}</span>
                                </span>
                                {cert.image && <ImageIcon size={12} style={{ color: '#CBD5E1' }} />}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Skills;
