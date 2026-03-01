import { motion } from 'framer-motion';
import { identity } from '../constants/data';
import { User, Cpu, Heart, Sparkles } from 'lucide-react';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const About = () => {
    return (
        <section id="about" className="section relative overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div {...fadeUp()}>
                        <span className="section-label">Professional Bio</span>
                        <h2 className="section-title">Passion for AI & Social Impact</h2>
                        <div className="space-y-6 text-lg text-[var(--text-dim)] leading-relaxed">
                            <p>
                                I am an AI/ML Engineer in training with a deep fascination for how intelligent systems can reshape our future.
                                Currently in my 3rd year at <span className="text-[var(--accent)] font-semibold">Kathmandu University</span>,
                                I've immersed myself in the worlds of Deep Learning and NLP.
                            </p>
                            <p>
                                My journey is driven by a passion for <span className="text-[var(--accent)] font-semibold">AI for Good</span>.
                                Whether it's developing tools for healthcare or enhancing communication through AI, I strive to build
                                technology that is inclusive and impactful.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="card-accent p-4 glass rounded-xl border border-[var(--border)]">
                                    <Cpu className="text-[var(--accent)] mb-2" size={24} />
                                    <h4 className="font-bold text-white mb-1">Deep Learning</h4>
                                    <p className="text-sm text-[var(--text2)]">Specializing in audio & image classification.</p>
                                </div>
                                <div className="card-accent p-4 glass rounded-xl border border-[var(--border)]">
                                    <Heart className="text-[var(--accent)] mb-2" size={24} />
                                    <h4 className="font-bold text-white mb-1">Impact Driven</h4>
                                    <p className="text-sm text-[var(--text2)]">Focused on ethical AI and social accessibility.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        {...fadeUp(0.2)}
                        className="relative"
                    >
                        <div className="aspect-square relative rounded-3xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-transparent opacity-20 group-hover:opacity-10 transition-opacity" />
                            <div className="w-full h-full flex items-center justify-center bg-[var(--card)] border border-[var(--border-strong)]">
                                <div className="text-center p-8">
                                    <Sparkles size={48} className="text-[var(--accent)] mx-auto mb-4 animate-pulse" />
                                    <h3 className="text-2xl font-bold text-white mb-2">Tech Communicator</h3>
                                    <p className="text-[var(--text2)]">Modernizing technical discourse through leadership and public speaking.</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--accent-l)] rounded-full blur-3xl -z-10" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
