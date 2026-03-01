import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Community', href: '#community' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-6'}`}>
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <a href="#about" className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform">
                    <span className="text-[var(--accent)]">S</span>
                    <span className="text-[var(--text)]">HOVA</span>
                    <span className="text-[var(--accent)]">.</span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-10">
                    {links.map(l => (
                        <a key={l.name} href={l.href} className="text-sm font-semibold text-[var(--text2)] hover:text-[var(--accent)] transition-colors tracking-wide uppercase">
                            {l.name}
                        </a>
                    ))}
                    <a href="#contact" className="px-6 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-d)] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-indigo-500/20">
                        Connect
                    </a>
                </div>

                {/* Mobile toggle */}
                <button className="md:hidden text-[var(--accent)] p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass border-t border-[var(--border-2)] p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
                    {links.map(l => (
                        <a key={l.name} href={l.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                            {l.name}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setIsOpen(false)} className="w-full py-4 rounded-xl bg-[var(--accent)] text-white text-center font-black uppercase tracking-widest">
                        Connect
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
