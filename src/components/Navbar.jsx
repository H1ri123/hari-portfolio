import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/90 backdrop-blur-sm border-b border-[#3B82F6]/20 transition-all py-4">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        {/* Logo Icon Mockup */}
                        <div className="h-8 w-8 rounded-full border-[3px] border-[#2563EB] flex items-center justify-center relative">
                            <div className="h-2 w-2 rounded-full bg-[#2563EB] absolute top-1 right-1"></div>
                            <div className="text-[#2563EB] font-bold text-lg">H</div>
                        </div>
                        <span className="text-2xl font-bold text-[#F1F5F9]">HARI<span className="text-[#2563EB]">HARAN</span></span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[#94A3B8] hover:text-[#2563EB] font-medium transition-colors text-[16px]"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Download CV Button */}
                    <div className="hidden md:block">
                        <a href="/resume.pdf" download className="rounded-full border border-[#2563EB] px-7 py-2.5 text-[#2563EB] font-semibold hover:bg-[#2563EB] hover:text-white transition-all duration-300">
                            Download CV
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-[#94A3B8] hover:text-[#2563EB] focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#0F172A] border-t border-[#3B82F6]/20 absolute w-full left-0">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 text-base font-medium text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#2563EB]"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="/resume.pdf" download className="mt-4 w-full block text-center rounded-full border border-[#2563EB] px-6 py-2 text-[#2563EB] font-semibold hover:bg-[#2563EB] hover:text-white transition-all">
                            Download CV
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
