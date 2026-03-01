import { motion } from 'framer-motion';
import { projects } from '../constants/data';
import { ExternalLink, Github, ArrowRight, Music, Activity, Cpu, Lightbulb } from 'lucide-react';

const Waveform = () => (
    <div className="flex items-center gap-1 h-8">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <motion.div
                key={i}
                animate={{ height: [4, 24, 8, 20, 4] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                className="w-1 bg-[var(--accent)] rounded-full"
            />
        ))}
    </div>
);

const Spectogram = () => (
    <div className="grid grid-cols-8 gap-0.5 h-12 w-full opacity-30 group-hover:opacity-60 transition-opacity">
        {Array.from({ length: 32 }).map((_, i) => (
            <div
                key={i}
                className="bg-indigo-500/40 rounded-sm"
                style={{ height: `${Math.random() * 100}%` }}
            />
        ))}
    </div>
);

const ProjectCard = ({ project, index }) => {
    const isSpecial = project.title.includes("Speech Emotion") || project.title.includes("Bird Sound");
    const isLarge = project.title.includes("Speech Emotion");
    const isWide = project.title.includes("Nepalese Music");

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group card ${isLarge ? 'bento-span-2 bento-row-2' : isWide ? 'bento-span-4' : 'bento-span-2'}`}
        >
            <div className="relative h-full flex flex-col p-8">
                {/* Project Header */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-indigo-500/10 text-[var(--accent)] border border-indigo-500/20 group-hover:scale-110 transition-transform">
                            {project.title.includes("Speech") ? <Activity size={24} /> :
                                project.title.includes("Bird") ? <Music size={24} /> :
                                    project.title.includes("Chatbot") ? <Lightbulb size={24} /> : <Cpu size={24} />}
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-[var(--accent)] tracking-[0.2em] uppercase mb-1 block">
                                {project.badge}
                            </span>
                            <h3 className="text-xl font-bold leading-tight group-hover:text-[var(--accent)] transition-colors">
                                {project.title}
                            </h3>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <a href={project.link} className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                            <Github size={18} />
                        </a>
                        <a href={project.link} className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>

                {/* Micro-interaction Overlay for Audio Projects */}
                {project.title.includes("Speech Emotion") && (
                    <div className="my-6 p-6 rounded-2xl glass-accent flex items-center justify-center border border-indigo-500/10 overflow-hidden relative">
                        <Waveform />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                )}

                {project.title.includes("Bird Sound") && (
                    <div className="my-4 flex items-end justify-center h-16 w-full overflow-hidden">
                        <Spectogram />
                    </div>
                )}

                <p className="text-[var(--text2)] text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                </p>

                {/* Footer Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-[var(--border-2)]">
                    {project.tags.map(tag => (
                        <span key={tag} className="tag text-[9px] uppercase tracking-wider">{tag}</span>
                    ))}
                </div>

                {/* Subtle Arrow CTA */}
                <div className="absolute bottom-6 right-8 text-[var(--accent)] opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight size={20} />
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => (
    <section id="projects" className="section bg-[var(--bg)]">
        <div className="container">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="section-label">Featured Work</span>
                <h2 className="section-title">Case Studies & Research</h2>
                <div className="section-bar" />
            </motion.div>

            <div className="bento-grid">
                {projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
