import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Linkedin, Send, Github, ArrowUpRight } from 'lucide-react';
import { identity } from '../constants/data';

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
            import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
        ).then(() => {
            setIsSubmitting(false); setShowSuccess(true);
            setForm({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setShowSuccess(false), 5000);
        }, () => { setIsSubmitting(false); setError('Failed to send. Please try again.'); });
    };

    return (
        <section id="contact" className="section bg-[var(--bg)] border-t border-[var(--border-2)]">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">Communication</span>
                    <h2 className="section-title">Direct Channel</h2>
                    <div className="section-bar" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">

                    {/* Form Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 card glass p-8 md:p-10"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[var(--muted)]">Project / Full Name</label>
                                    <input
                                        type="text" name="name" value={form.name} onChange={handleChange}
                                        className="bg-white/5 border border-[var(--border-2)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-sm outline-none transition-all"
                                        placeholder="Alan Turing"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[var(--muted)]">Return Channel (Email)</label>
                                    <input
                                        type="email" name="email" value={form.email} onChange={handleChange}
                                        className="bg-white/5 border border-[var(--border-2)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-sm outline-none transition-all"
                                        placeholder="alan@enigma.com"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[var(--muted)]">Subject / Inquiry Type</label>
                                <input
                                    type="text" name="subject" value={form.subject} onChange={handleChange}
                                    className="bg-white/5 border border-[var(--border-2)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-sm outline-none transition-all"
                                    placeholder="Interpretable Audio Models"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[var(--muted)]">Detailed Message</label>
                                <textarea
                                    name="message" value={form.message} onChange={handleChange} rows={6}
                                    className="bg-white/5 border border-[var(--border-2)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                                    placeholder="How should we synthesize human emotion in audio datasets?"
                                />
                            </div>

                            {error && <p className="text-red-400 text-xs font-bold">{error}</p>}
                            {showSuccess && <p className="text-emerald-400 text-xs font-bold">✓ SIGNAL TRANSMITTED SUCCESSFULLY</p>}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative mt-4 inline-flex items-center justify-center gap-3 bg-[var(--accent)] hover:bg-[var(--accent-d)] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-xl shadow-indigo-500/20 disabled:opacity-50"
                            >
                                <Send size={18} className={isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 transition-transform'} />
                                {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                            </button>
                        </form>
                    </motion.div>

                    {/* Sidebar Area */}
                    <div className="lg:col-span-5 flex flex-col gap-6">

                        {/* Digital Business Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="card p-8 bg-gradient-to-br from-[var(--card)] to-[var(--bg)] border border-[var(--border-2)]"
                        >
                            <h3 className="text-xs font-black text-[var(--muted)] uppercase tracking-[0.3em] mb-8">Identification</h3>
                            <div className="flex flex-col gap-8">
                                <a href={`mailto:${identity.email}`} className="group flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-[var(--accent)] border border-indigo-500/20 group-hover:bg-[var(--accent)] group-hover:text-white transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-[var(--muted)] uppercase tracking-wider">Secure Email</p>
                                        <p className="text-sm font-bold group-hover:text-[var(--accent)] transition-colors">{identity.email}</p>
                                    </div>
                                    <ArrowUpRight size={14} className="ml-auto text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <a href={identity.linkedinUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-[var(--accent)] border border-indigo-500/20 group-hover:bg-[var(--accent)] group-hover:text-white transition-all">
                                        <Linkedin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-[var(--muted)] uppercase tracking-wider">Professional Network</p>
                                        <p className="text-sm font-bold group-hover:text-[var(--accent)] transition-colors">Connect on LinkedIn</p>
                                    </div>
                                    <ArrowUpRight size={14} className="ml-auto text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <div className="group flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-[var(--accent)] border border-indigo-500/20">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-[var(--muted)] uppercase tracking-wider">Current Node</p>
                                        <p className="text-sm font-bold">{identity.location}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Status Node */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="card p-8 glass-accent border border-indigo-500/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Available for Innovation</span>
                            </div>
                            <p className="text-xs text-[var(--text2)] leading-relaxed">
                                Currently exploring AI/ML/Software Engineering opportunities for 2025.
                                Open to discussing project collaborations, hackathon teams, and technical research.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="mt-32 pt-12 border-t border-[var(--border-2)] flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-3xl font-black tracking-tighter mb-2">
                            <span className="text-[var(--accent)]">S</span>
                            HOVA
                            <span className="text-[var(--accent)]">.</span>
                        </p>
                        <p className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-[0.3em]">Building Intelligence for Good</p>
                    </div>

                    <div className="flex flex-col md:items-end text-center md:text-right">
                        <p className="text-sm font-bold opacity-80 mb-2">B.Tech in AI @ Kathmandu University</p>
                        <p className="text-[10px] text-[var(--muted)] uppercase tracking-widest">© 2025 Shova Gelal • Designed for Impact</p>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ContactForm;
