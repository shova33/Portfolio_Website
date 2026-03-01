import { motion } from 'framer-motion';
import { projects } from '../constants/data';
import { ExternalLink, Github, ArrowRight, Image as ImageIcon } from 'lucide-react';

const ACCENT = '#7C3AED';
const ACCENT_D = '#5B21B6';
const ACCENT_L = '#EDE9FE';
const TEXT = '#0F172A';
const TEXT2 = '#475569';
const BORDER = '#E2E8F0';

const Projects = () => (
    <section id="projects" className="section section-alt" style={{ borderTop: '1px solid #E2E8F0' }}>
        <div className="container">

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48 }}
            >
                <span className="section-label">
                    <ArrowRight size={11} /> Featured Work
                </span>
                <h2 className="section-title-lg">Projects</h2>
                <div className="section-bar" />
            </motion.div>

            {/* Projects grid — 2 col on desktop, 1 on mobile */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.48, delay: i * 0.09 }}
                        className="card"
                        style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    >
                        {/* Project Image Preview */}
                        <div style={{ height: 180, backgroundColor: ACCENT_L, position: 'relative', overflow: 'hidden', borderBottom: `1px solid ${BORDER}` }}>
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    className="project-img"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
                                />
                            ) : null}
                            <div style={{ display: project.image ? 'none' : 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: ACCENT_L }}>
                                <ImageIcon size={32} style={{ color: ACCENT, opacity: 0.3 }} />
                            </div>

                            {/* Overlay Badge */}
                            <div style={{ position: 'absolute', top: 12, left: 12 }}>
                                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, backgroundColor: 'rgba(255,255,255,0.9)', padding: '4px 10px', borderRadius: 6, backdropFilter: 'blur(4px)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    {project.badge}
                                </span>
                            </div>
                        </div>

                        <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            {/* Title + Links */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, fontWeight: 700, color: TEXT, lineHeight: 1.3 }}>
                                    {project.title}
                                </h3>
                                <div style={{ display: 'flex', gap: 12 }}>
                                    {[{ icon: Github, label: 'GitHub' }, { icon: ExternalLink, label: 'Live' }].map(({ icon: Icon, label }) => (
                                        <a key={label} href={project.link} aria-label={label} target="_blank" rel="noopener noreferrer"
                                            style={{ color: '#CBD5E1', transition: 'color 0.2s' }}
                                            onMouseEnter={e => e.currentTarget.style.color = ACCENT}
                                            onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}>
                                            <Icon size={16} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <p style={{ fontSize: 14, color: TEXT2, lineHeight: 1.7, marginBottom: 20, flexGrow: 1 }}>
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingTop: 16, borderTop: `1px solid ${BORDER}` }}>
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag" style={{ fontSize: 10 }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
