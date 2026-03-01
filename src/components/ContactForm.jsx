import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Linkedin, Send } from 'lucide-react';
import { identity } from '../constants/data';

const ACCENT = '#7C3AED';
const ACCENT_D = '#5B21B6';
const ACCENT_L = '#EDE9FE';
const TEXT = '#0F172A';
const TEXT2 = '#475569';
const BORDER = '#E8E4F8';

const ContactForm = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        if (!form.name || !form.email || !form.subject || !form.message) { setError('Please fill in all fields.'); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError('Please enter a valid email.'); return; }
        setError(null); setIsSubmitting(true);
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
        ).then(() => {
            setIsSubmitting(false); setShowSuccess(true);
            setForm({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setShowSuccess(false), 5000);
        }, () => { setIsSubmitting(false); setError('Failed to send. Please try again.'); });
    };

    const inputStyle = (focused) => ({
        width: '100%', padding: '12px 14px',
        border: `1.5px solid ${focused ? ACCENT : BORDER}`,
        borderRadius: 10, fontSize: 14, color: TEXT,
        backgroundColor: '#fff', outline: 'none',
        fontFamily: "'Inter', sans-serif", transition: 'border-color 0.2s',
    });

    return (
        <section id="contact" className="section" style={{ borderTop: '1px solid #E8E4F8' }}>
            <div className="container">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
                    <span className="section-label">Contact</span>
                    <h2 className="section-title">Get in Touch</h2>
                    <div className="section-bar" />
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: 56, alignItems: 'start' }} className="contact-grid">

                    {/* Form */}
                    <motion.form
                        ref={formRef} onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: 18, backgroundColor: '#fff', padding: '32px', border: `1px solid ${BORDER}`, borderRadius: 18 }}
                    >
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                            {['name', 'email'].map(field => (
                                <div key={field}>
                                    <label style={{ fontSize: 12, fontWeight: 600, color: TEXT2, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 7, display: 'block' }}>
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <input type={field === 'email' ? 'email' : 'text'} name={field}
                                        value={form[field]} onChange={handleChange}
                                        style={inputStyle(false)}
                                        onFocus={e => e.currentTarget.style.borderColor = ACCENT}
                                        onBlur={e => e.currentTarget.style.borderColor = BORDER} />
                                </div>
                            ))}
                        </div>
                        {['subject', 'message'].map(field => (
                            <div key={field}>
                                <label style={{ fontSize: 12, fontWeight: 600, color: TEXT2, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 7, display: 'block' }}>
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                {field === 'message' ? (
                                    <textarea name={field} value={form[field]} onChange={handleChange} rows={5}
                                        style={{ ...inputStyle(false), resize: 'vertical' }}
                                        onFocus={e => e.currentTarget.style.borderColor = ACCENT}
                                        onBlur={e => e.currentTarget.style.borderColor = BORDER} />
                                ) : (
                                    <input type="text" name={field} value={form[field]} onChange={handleChange}
                                        style={inputStyle(false)}
                                        onFocus={e => e.currentTarget.style.borderColor = ACCENT}
                                        onBlur={e => e.currentTarget.style.borderColor = BORDER} />
                                )}
                            </div>
                        ))}

                        {error && <p style={{ fontSize: 13, color: '#DC2626', fontWeight: 500 }}>{error}</p>}
                        {showSuccess && <p style={{ fontSize: 13, color: '#16A34A', fontWeight: 500 }}>✓ Message sent successfully!</p>}

                        <button type="submit" disabled={isSubmitting} style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                            padding: '13px 28px', background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_D})`,
                            color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600,
                            fontFamily: "'Inter', sans-serif", cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            opacity: isSubmitting ? 0.65 : 1, boxShadow: '0 4px 16px rgba(124,58,237,0.25)',
                            transition: 'opacity 0.2s', alignSelf: 'flex-start',
                        }}
                            onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.opacity = '0.88'; }}
                            onMouseLeave={e => e.currentTarget.style.opacity = isSubmitting ? '0.65' : '1'}>
                            <Send size={14} /> {isSubmitting ? 'Sending…' : 'Send Message'}
                        </button>
                    </motion.form>

                    {/* Info panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.2 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
                    >
                        {[
                            { icon: Mail, label: 'Email', val: identity.email, href: `mailto:${identity.email}` },
                            { icon: MapPin, label: 'Location', val: identity.location, href: null },
                            { icon: Linkedin, label: 'LinkedIn', val: identity.linkedin, href: identity.linkedinUrl },
                        ].map(({ icon: Icon, label, val, href }) => (
                            <div key={label} style={{ display: 'flex', gap: 14, padding: '18px 20px', backgroundColor: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, alignItems: 'flex-start' }}>
                                <div style={{ width: 38, height: 38, borderRadius: 9, backgroundColor: ACCENT_L, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Icon size={16} style={{ color: ACCENT }} />
                                </div>
                                <div>
                                    <p style={{ fontSize: 11, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{label}</p>
                                    {href ? (
                                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                            style={{ fontSize: 14, color: TEXT2, textDecoration: 'none', transition: 'color 0.2s' }}
                                            onMouseEnter={e => e.currentTarget.style.color = ACCENT}
                                            onMouseLeave={e => e.currentTarget.style.color = TEXT2}>
                                            {val}
                                        </a>
                                    ) : (
                                        <p style={{ fontSize: 14, color: TEXT2 }}>{val}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Availability box */}
                        <div style={{ padding: '18px 20px', backgroundColor: ACCENT_L, border: `1px solid ${BORDER}`, borderRadius: 14 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#16A34A', display: 'inline-block' }} />
                                <p style={{ fontSize: 13, fontWeight: 700, color: ACCENT_D }}>Available for Opportunities</p>
                            </div>
                            <p style={{ fontSize: 13, color: TEXT2, lineHeight: 1.7 }}>
                                Seeking AI / ML / Data Science internships. I typically respond within 24 hours.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <div style={{ maxWidth: 1100, margin: '56px auto 0', padding: '24px 24px 0', borderTop: `1px solid ${BORDER}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                <p style={{ fontSize: 13, color: '#94A3B8' }}>© 2025 Shova Gelal. All rights reserved.</p>
                <p style={{ fontSize: 13, color: '#94A3B8' }}>AI & Data Science · Kathmandu University</p>
            </div>
        </section>
    );
};

export default ContactForm;
