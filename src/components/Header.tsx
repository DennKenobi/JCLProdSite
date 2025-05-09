import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/JCLHorizonTrans.svg';
import CyberLogo from '../assets/CyberDivisionTransp-01.svg'; // adjust path if needed

interface HeaderProps {
    variant?: 'default' | 'cyber';
}

const Header: React.FC<HeaderProps> = ({ variant = 'default' }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
        isScrolled
            ? variant === 'cyber'
                ? 'bg-cyber-dark shadow-lg py-2'
                : 'bg-labs-dark bg-opacity-95 shadow-lg py-2'
            : variant === 'cyber'
              ? 'bg-transparent text-cyber-blue py-4'
              : 'bg-transparent text-green-500 py-4'
    }`;

    //  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    //   isScrolled ? 'bg-labs-dark bg-opacity-95 shadow-lg py-2' : 'bg-transparent py-4'
    //  }`;

    const isActivePath = (path: string) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <header className={headerClasses}>
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="flex items-center">
                    <Link to="/">
                        {/* <img src={Logo} alt="Just Create Labs" className="h-24 w-auto max-h-28" /> */}
                        <div className="flex h-24 w-[240px] items-center justify-center">
                            <img
                                src={
                                    location.pathname.startsWith('/cyber')
                                        ? CyberLogo
                                        : Logo
                                }
                                alt={
                                    location.pathname.startsWith('/cyber')
                                        ? 'Just Create Cybersecurity'
                                        : 'Just Create Labs'
                                }
                                className={`h-auto w-auto object-contain transition-opacity duration-300 ${
                                    location.pathname.startsWith('/cyber')
                                        ? 'max h-24'
                                        : 'max h-24'
                                }`}
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden items-center space-x-1 md:flex">
                    <Link
                        to="/"
                        className={`nav-link ${isActivePath('/') ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`nav-link ${isActivePath('/about') ? 'active' : ''}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/cyber"
                        className={`nav-link ${
                            isActivePath('/cyber') ? 'active-cyber' : ''
                        } hover:text-cyber-blue`}
                    >
                        Cyber Division
                    </Link>
                    <Link
                        to="/next"
                        className={`nav-link ${isActivePath('/next') ? 'active' : ''}`}
                    >
                        What's Next
                    </Link>
                    <Link
                        to="/contact"
                        className={`nav-link ${isActivePath('/contact') ? 'active' : ''}`}
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Navigation Icon */}
                <div className="md:hidden">
                    {isMenuOpen ? (
                        <X
                            className="h-8 w-8 cursor-pointer text-labs-green"
                            onClick={() => setIsMenuOpen(false)}
                        />
                    ) : (
                        <Menu
                            className="h-8 w-8 cursor-pointer text-labs-green"
                            onClick={() => setIsMenuOpen(true)}
                        />
                    )}
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="absolute left-0 top-full w-full animate-fade-in bg-labs-dark bg-opacity-95 py-4 shadow-lg md:hidden">
                    <div className="container mx-auto flex flex-col space-y-3 px-4">
                        <Link
                            to="/"
                            className={`nav-link ${isActivePath('/') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`nav-link ${isActivePath('/about') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/cyber"
                            className={`nav-link ${isActivePath('/cyber') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Cyber Division
                        </Link>
                        <Link
                            to="/next"
                            className={`nav-link ${isActivePath('/next') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            What's Next
                        </Link>
                        <Link
                            to="/contact"
                            className={`nav-link ${isActivePath('/contact') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
