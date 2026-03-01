import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { assets, identity } from '../constants/data';

const SocialDock = () => {
    const items = [
        { name: 'GitHub', icon: Github, href: identity.githubUrl },
        { name: 'LinkedIn', icon: Linkedin, href: identity.linkedinUrl },
        { name: 'Email', icon: Mail, href: `mailto:${identity.email}` },
        { name: 'Resume', icon: FileText, href: assets.resumeUrl },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hidden lg:flex fixed left-8 bottom-8 flex-col gap-4 z-[90]"
        >
            {items.map((item, i) => (
                <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, x: 4 }}
                    className="w-12 h-12 glass border border-[var(--border-2)] flex items-center justify-center rounded-xl text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all shadow-lg"
                    title={item.name}
                >
                    <item.icon size={20} />
                </motion.a>
            ))}
            <div className="w-px h-12 bg-gradient-to-t from-[var(--border-2)] to-transparent mx-auto mt-2" />
        </motion.div>
    );
};

export default SocialDock;
