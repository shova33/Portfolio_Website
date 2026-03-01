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

    const navStyle = {
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(250,250,250,0.95)' : 'rgba(250,250,250,0)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid #E8E4F8' : 'none',
        transition: 'all 0.3s ease',
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
                {/* Logo */}
                <a href="#about" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 18, color: '#5B21B6', textDecoration: 'none', letterSpacing: '-0.3px' }}>
                    Shova<span style={{ color: '#0F172A' }}>.</span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex" style={{ alignItems: 'center', gap: 36 }}>
                    {links.map(l => (
                        <a key={l.name} href={l.href} style={{
                            fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500,
                            color: '#475569', textDecoration: 'none', transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = '#7C3AED'}
                            onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
                            {l.name}
                        </a>
                    ))}
                    <a href="#contact" style={{
                        fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600,
                        padding: '9px 22px', borderRadius: 8,
                        background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
                        color: '#fff', textDecoration: 'none',
                        boxShadow: '0 2px 10px rgba(124,58,237,0.25)',
                        transition: 'opacity 0.2s',
                    }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                        Contact Me
                    </a>
                </div>

                {/* Mobile toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#5B21B6', padding: 4 }}>
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div style={{ backgroundColor: '#FAFAFA', borderBottom: '1px solid #E8E4F8', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                    {links.map(l => (
                        <a key={l.name} href={l.href} onClick={() => setIsOpen(false)}
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 500, color: '#0F172A', textDecoration: 'none' }}>
                            {l.name}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setIsOpen(false)}
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, padding: '11px', borderRadius: 8, background: 'linear-gradient(135deg, #7C3AED, #5B21B6)', color: '#fff', textDecoration: 'none', textAlign: 'center' }}>
                        Contact Me
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
