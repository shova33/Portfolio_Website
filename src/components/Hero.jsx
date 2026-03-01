import { motion } from 'framer-motion';
import { identity, assets } from '../constants/data';
import { Download, Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react';

const ACCENT = '#7C3AED';
const ACCENT_D = '#5B21B6';
const ACCENT_L = '#EDE9FE';
const TEXT = '#0F172A';
const TEXT2 = '#475569';
const BORDER = '#E8E4F8';

const fadeUp = { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 } };

const Hero = () => (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80, paddingBottom: 64, backgroundColor: '#FAFAFA' }}>
        <div className="container" style={{ width: '100%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 56, alignItems: 'center' }}>

                {/* Text */}
                <motion.div {...fadeUp} transition={{ duration: 0.55, ease: 'easeOut' }}>

                    {/* Label pill */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, backgroundColor: ACCENT_L, color: ACCENT, borderRadius: 99, padding: '5px 14px', fontSize: 12, fontWeight: 600, marginBottom: 20, fontFamily: "'Inter', sans-serif", letterSpacing: '0.04em' }}>
                        <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: ACCENT, display: 'inline-block', animation: 'pulse 2s infinite' }} />
                        Open to internship opportunities
                    </div>

                    <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', fontWeight: 800, color: TEXT, lineHeight: 1.08, marginBottom: 10 }}>
                        {identity.name}
                    </h1>

                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', fontWeight: 600, marginBottom: 6, background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_D})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        {identity.title} · {identity.subtitle}
                    </p>

                    <p style={{ fontSize: 14, color: TEXT2, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 5 }}>
                        <MapPin size={13} /> {identity.location}
                    </p>

                    <p style={{ fontSize: 15.5, color: TEXT2, lineHeight: 1.8, maxWidth: 580, marginBottom: 36 }}>
                        {identity.about}
                    </p>

                    {/* Contact pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36 }}>
                        {[
                            { icon: Mail, label: identity.email, href: `mailto:${identity.email}` },
                            { icon: Linkedin, label: identity.linkedin, href: identity.linkedinUrl },
                        ].map(({ icon: Icon, label, href }) => (
                            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 16px', border: `1px solid ${BORDER}`, borderRadius: 8, fontSize: 13, fontWeight: 500, color: TEXT2, textDecoration: 'none', backgroundColor: '#fff', transition: 'all 0.2s' }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; e.currentTarget.style.backgroundColor = ACCENT_L; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = TEXT2; e.currentTarget.style.backgroundColor = '#fff'; }}>
                                <Icon size={13} /> {label}
                            </a>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                        <a href="#projects" style={{
                            display: 'flex', alignItems: 'center', gap: 8,
                            padding: '13px 28px', borderRadius: 10,
                            background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_D})`,
                            color: '#fff', fontWeight: 600, fontSize: 14, fontFamily: "'Inter', sans-serif",
                            textDecoration: 'none', boxShadow: '0 4px 16px rgba(124,58,237,0.28)',
                            transition: 'opacity 0.2s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                            View Projects <ArrowRight size={15} />
                        </a>
                        <a href={assets.resumeUrl} target="_blank" rel="noopener noreferrer" style={{
                            display: 'flex', alignItems: 'center', gap: 8,
                            padding: '13px 28px', borderRadius: 10,
                            border: `1.5px solid ${BORDER}`, backgroundColor: '#fff',
                            color: TEXT, fontWeight: 600, fontSize: 14, fontFamily: "'Inter', sans-serif",
                            textDecoration: 'none', transition: 'all 0.2s',
                        }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = TEXT; }}>
                            <Download size={15} /> Download CV
                        </a>
                    </div>
                </motion.div>

                {/* Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden md:block"
                    style={{ width: 260, height: 320, flexShrink: 0 }}
                >
                    <div style={{ width: '100%', height: '100%', borderRadius: 20, overflow: 'hidden', border: `1.5px solid ${BORDER}`, backgroundColor: ACCENT_L, position: 'relative', boxShadow: '0 16px 48px rgba(124,58,237,0.12)' }}>
                        {/* Decorative corner dot */}
                        <div style={{ position: 'absolute', top: 16, right: 16, width: 10, height: 10, borderRadius: '50%', backgroundColor: ACCENT, opacity: 0.7 }} />
                        <img
                            src={assets.profilePhoto}
                            alt={identity.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                            onError={e => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:800;font-family:'Poppins',sans-serif;color:#7C3AED;background:linear-gradient(135deg,#F5F3FF,#EDE9FE)">SG</div>`;
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Decorative gradient blob */}
        <div style={{ position: 'absolute', top: 60, right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
    </section>
);

export default Hero;
