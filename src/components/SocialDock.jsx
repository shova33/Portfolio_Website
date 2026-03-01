import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { assets, identity } from '../constants/data';

const ACCENT = '#7C3AED';
const ACCENT_L = '#EDE9FE';
const BORDER = '#E8E4F8';

const SocialDock = () => {
    const items = [
        { name: 'GitHub', icon: Github, href: '#' },
        { name: 'LinkedIn', icon: Linkedin, href: identity.linkedinUrl },
        { name: 'Email', icon: Mail, href: `mailto:${identity.email}` },
        { name: 'Resume', icon: FileText, href: assets.resumeUrl },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.55, ease: 'easeOut' }}
            className="hidden lg:flex"
            style={{ position: 'fixed', right: 20, top: '50%', transform: 'translateY(-50%)', flexDirection: 'column', gap: 8, zIndex: 50 }}
        >
            {items.map(item => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer"
                    title={item.name} aria-label={item.name}
                    style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, border: `1.5px solid ${BORDER}`, color: '#94A3B8', backgroundColor: '#fff', transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = ACCENT; e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.backgroundColor = ACCENT_L; e.currentTarget.style.transform = 'translateX(-3px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.transform = 'none'; }}>
                    <item.icon size={15} />
                </a>
            ))}
        </motion.div>
    );
};

export default SocialDock;
