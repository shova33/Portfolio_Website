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
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group card flex flex-col h-full border border-[var(--border-2)] hover:border-[var(--accent)] transition-all"
        >
            <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-indigo-500/10 text-[var(--accent)] border border-indigo-500/20 group-hover:scale-110 transition-transform">
                            {project.icon ? <project.icon size={24} /> : <Cpu size={24} />}
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-[var(--accent)] tracking-[0.2em] uppercase mb-1 block">
                                {project.badge}
                            </span>
                            <h3 className="text-xl font-bold leading-tight group-hover:text-white transition-colors">
                                {project.title}
                            </h3>
                        </div>
                    </div>
                </div>

                <p className="text-[var(--text2)] text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                        <span key={tag} className="skill-tag !text-[10px]">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-[var(--border-2)] mt-auto">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-bold text-[var(--text2)] hover:text-[var(--accent)] transition-colors"
                        >
                            <Github size={18} /> Source Code
                        </a>
                    )}
                    <div className="text-[var(--accent)] opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight size={20} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => (
    <section id="projects" className="section bg-[var(--bg-alt)]/20">
        <div className="container">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="section-label">Portfolio</span>
                <h2 className="section-title">Selected Projects</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>
        </div>
    </section>
);


export default Projects;
