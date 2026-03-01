import { motion } from 'framer-motion';
import { skills, education } from '../constants/data';
import { Award, ExternalLink, GraduationCap, Code, Zap, Brain, Activity } from 'lucide-react';

const SkillGauge = ({ level = 85, label }) => (
    <div className="group relative">
        <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-bold text-[var(--text2)] group-hover:text-[var(--accent)] transition-colors tracking-wider">{label}</span>
            <span className="text-[10px] font-mono text-[var(--muted)]">{level}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[var(--accent)] to-indigo-400"
            />
        </div>
    </div>
);

const RadarChart = () => {
    const stats = [
        { label: 'Deep Learning', value: 95 },
        { label: 'NLP', value: 90 },
        { label: 'Audio DSP', value: 92 },
        { label: 'Research', value: 85 },
        { label: 'Python', value: 98 }
    ];

    const size = 220;
    const center = size / 2;
    const radius = 80;
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
        <div className="flex flex-col items-center justify-center py-4">
            <svg width={size} height={size} className="overflow-visible">
                {bgPoints.map((p, i) => (
                    <polygon key={i} points={p} fill="none" stroke="var(--border-2)" strokeWidth="1" strokeDasharray="2 2" />
                ))}
                {stats.map((_, i) => {
                    const x = center + radius * Math.cos(i * angleStep - Math.PI / 2);
                    const y = center + radius * Math.sin(i * angleStep - Math.PI / 2);
                    return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="var(--border-2)" strokeWidth="1" />;
                })}
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
                {stats.map((s, i) => {
                    const x = center + (radius + 25) * Math.cos(i * angleStep - Math.PI / 2);
                    const y = center + (radius + 15) * Math.sin(i * angleStep - Math.PI / 2);
                    return (
                        <text key={i} x={x} y={y} textAnchor="middle" fontSize="10" fontWeight="bold" fill="var(--muted)" className="uppercase tracking-tighter">
                            {s.label}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
};

const Skills = () => (
    <section id="skills" className="section relative overflow-hidden">
        <div className="container">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="section-label">Toolkit</span>
                <h2 className="section-title">Technical Skills</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Radar Intelligence */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="card glass flex flex-col items-center justify-center p-8 border border-[var(--border-strong)]"
                >
                    <div className="flex items-center gap-3 mb-6 w-full">
                        <Brain size={24} className="text-[var(--accent)]" />
                        <h3 className="text-xl font-bold italic tracking-tight">Intelligence Stack</h3>
                    </div>
                    <RadarChart />
                </motion.div>

                {/* Technical Categorization */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {skills.map((group, idx) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="card p-6 border border-[var(--border-2)] hover:border-[var(--accent)] group transition-all"
                        >
                            <h3 className="text-md font-bold text-white mb-4 flex items-center gap-2 group-hover:text-[var(--accent)] transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map(skill => (
                                    <span key={skill} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="card p-6 bg-[var(--accent-l)] border border-[var(--accent-m)]"
                    >
                        <h3 className="text-md font-bold text-white mb-4">Core Focus</h3>
                        <div className="space-y-4">
                            <SkillGauge label="Mathematics for AI" level={92} />
                            <SkillGauge label="System Reliability" level={85} />
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    </section>
);


export default Skills;
