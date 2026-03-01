import { motion } from 'framer-motion';
import { skills, education, certifications } from '../constants/data';
import { Award, ExternalLink, GraduationCap, Code, Zap, Brain, Activity } from 'lucide-react';

const SkillGauge = ({ level = 85, label }) => (
    <div className="group relative">
        <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-bold text-[var(--text2)] group-hover:text-[var(--accent)] transition-colors">{label}</span>
            <span className="text-[10px] font-mono text-[var(--muted)]">{level}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[var(--accent)] to-indigo-400 group-hover:from-indigo-400 group-hover:to-[var(--accent)] transition-all"
            />
        </div>
    </div>
);

const RadarChart = () => {
    const stats = [
        { label: 'Deep Learning', value: 92 },
        { label: 'ML Logic', value: 88 },
        { label: 'Audio DSP', value: 84 },
        { label: 'Feature Eng', value: 86 },
        { label: 'Python/Dev', value: 95 }
    ];

    const size = 200;
    const center = size / 2;
    const radius = 70;
    const angleStep = (Math.PI * 2) / stats.length;

    const points = stats.map((s, i) => {
        const x = center + radius * (s.value / 100) * Math.cos(i * angleStep - Math.PI / 2);
        const y = center + radius * (s.value / 100) * Math.sin(i * angleStep - Math.PI / 2);
        return `${x},${y}`;
    }).join(' ');

    const bgPoints = [100, 75, 50, 25].map(level => {
        return stats.map((_, i) => {
            const x = center + radius * (level / 100) * Math.cos(i * angleStep - Math.PI / 2);
            const y = center + radius * (level / 100) * Math.sin(i * angleStep - Math.PI / 2);
            return `${x},${y}`;
        }).join(' ');
    });

    return (
        <div className="flex flex-col items-center justify-center h-full min-h-[220px]">
            <svg width={size} height={size} className="overflow-visible">
                {/* Background Polygons */}
                {bgPoints.map((p, i) => (
                    <polygon key={i} points={p} fill="none" stroke="var(--border-2)" strokeWidth="1" strokeDasharray="2 2" />
                ))}

                {/* Axes */}
                {stats.map((_, i) => {
                    const x = center + radius * Math.cos(i * angleStep - Math.PI / 2);
                    const y = center + radius * Math.sin(i * angleStep - Math.PI / 2);
                    return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="var(--border-2)" strokeWidth="1" />;
                })}

                {/* Data Polygon */}
                <motion.polygon
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    points={points}
                    fill="rgba(99, 102, 241, 0.2)"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    className="origin-center"
                />

                {/* Labels */}
                {stats.map((s, i) => {
                    const x = center + (radius + 20) * Math.cos(i * angleStep - Math.PI / 2);
                    const y = center + (radius + 15) * Math.sin(i * angleStep - Math.PI / 2);
                    return (
                        <text key={i} x={x} y={y} textAnchor="middle" fontSize="8" fontWeight="bold" fill="var(--muted)" className="uppercase tracking-tighter">
                            {s.label}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
};

const Skills = () => (
    <section id="skills" className="section bg-[var(--bg-alt)]/30">
        <div className="container">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="section-label">Background</span>
                <h2 className="section-title">Technical Expertise</h2>
                <div className="section-bar" />
            </motion.div>

            <div className="bento-grid">

                {/* 111 Days of Code - Heatmap Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bento-span-2 bento-row-2 card glass p-8 flex flex-col"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-indigo-500/10 text-[var(--accent)] border border-indigo-500/20">
                            <Activity size={24} />
                        </div>
                        <h3 className="text-xl font-bold">Commitment Node</h3>
                    </div>

                    <p className="text-[var(--text2)] text-sm mb-8 leading-relaxed">
                        Visualizing the <span className="text-[var(--accent)] font-bold">111 Days of Code</span> initiative.
                        A consistent record of signal generation across the technical spectrum.
                    </p>

                    <div className="flex flex-col gap-4 mt-auto">
                        <div className="grid grid-cols-16 gap-1 w-full aspect-[16/7]">
                            {Array.from({ length: 112 }).map((_, i) => {
                                // Randomize intensity for heatmap effect
                                const intensities = [0.1, 0.3, 0.6, 0.9];
                                const intensity = intensities[Math.floor(Math.random() * intensities.length)];
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: intensity }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.005 }}
                                        className="bg-[var(--accent)] rounded-[1px] w-full h-full cursor-help hover:scale-150 transition-transform relative group/day shadow-sm"
                                        title={`Day ${i + 1}: ${Math.floor(intensity * 100)}% Activity`}
                                    >
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-1.5 bg-[var(--card)] border border-[var(--border-2)] rounded text-[8px] font-bold opacity-0 group-hover/day:opacity-100 whitespace-nowrap z-10 pointer-events-none">
                                            DAY {i + 1}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-bold text-[var(--muted)] pt-2 border-t border-[var(--border-2)]">
                            <div className="flex items-center gap-2">
                                <span>LESS</span>
                                <div className="flex gap-1">
                                    {[0.1, 0.3, 0.6, 0.9].map(o => (
                                        <div key={o} className="w-2 h-2 rounded-[1px] bg-[var(--accent)]" style={{ opacity: o }} />
                                    ))}
                                </div>
                                <span>MORE</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[var(--accent)]">
                                <Zap size={10} fill="currentColor" /> 100% STREAK
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Radar Chart Intelligence Stack */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bento-span-2 card p-8 bg-[var(--card)] border border-[var(--border)] overflow-hidden flex flex-col justify-center"
                >
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <Brain size={20} className="text-[var(--accent)]" />
                            <h3 className="text-lg font-bold">Signal Profile</h3>
                        </div>
                    </div>
                    <RadarChart />
                </motion.div>

                {/* Essential Gauges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bento-span-2 card p-8 glass flex flex-col gap-6"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Award size={20} className="text-[var(--accent)]" />
                        <h3 className="text-lg font-bold">Core Competencies</h3>
                    </div>
                    <SkillGauge label="Vector Calculus / Stats" level={88} />
                    <SkillGauge label="System Architecture" level={82} />
                    <SkillGauge label="Scientific Writing" level={90} />
                </motion.div>

                {/* Education Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bento-span-2 card p-8 bg-gradient-to-br from-[var(--bg)] to-[var(--card)]"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <GraduationCap size={20} className="text-[var(--accent)]" />
                        <h3 className="text-lg font-bold">Academic Base</h3>
                    </div>
                    {education.map((edu) => (
                        <div key={edu.id} className="relative pl-6 border-l border-[var(--border)]">
                            <span className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)]" />
                            <h4 className="text-md font-bold mb-1">{edu.degree}</h4>
                            <p className="text-sm text-[var(--accent)] font-semibold mb-2">{edu.institution}</p>
                            <p className="text-xs text-[var(--text2)] leading-relaxed">{edu.description}</p>
                            <div className="mt-4 inline-block text-[10px] font-bold text-[var(--muted)] border border-[var(--border-2)] px-2 py-1 rounded-md uppercase tracking-wider">
                                {edu.period}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Certifications - Wide Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bento-span-4 card p-8 glass-accent border border-indigo-500/10"
                >
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <Award size={20} className="text-[var(--accent)]" />
                            <h3 className="text-lg font-bold text-indigo-300">Credentials & Validation</h3>
                        </div>
                        <span className="text-xs font-mono text-[var(--muted)]">{certifications.length} SYMBOLS</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certifications.map((cert) => (
                            <a
                                key={cert.id}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 rounded-xl glass border border-[var(--border-2)] hover:border-[var(--accent)] transition-all bg-white/5"
                            >
                                <div className="p-2.5 rounded-lg bg-[var(--bg)] text-[var(--accent)] group-hover:scale-110 transition-transform shadow-lg">
                                    <Award size={18} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-bold truncate transition-colors">{cert.title}</h4>
                                    <p className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-widest">{cert.issuer}</p>
                                </div>
                                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent)]" />
                            </a>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
);

export default Skills;
