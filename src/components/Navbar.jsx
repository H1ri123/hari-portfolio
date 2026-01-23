import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Service', href: '#service' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9]/90 backdrop-blur-sm transition-all py-4">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        {/* Logo Icon Mockup */}
                        <div className="h-8 w-8 rounded-full border-[3px] border-[#F75023] flex items-center justify-center relative">
                            <div className="h-2 w-2 rounded-full bg-[#F75023] absolute top-1 right-1"></div>
                            <div className="text-[#F75023] font-bold text-lg">D</div>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">Diz<span className="text-[#F75023]">Me</span></span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-[#F75023] font-medium transition-colors text-[16px]"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Download CV Button */}
                    <div className="hidden md:block">
                        <button className="rounded-full border border-[#F75023] px-7 py-2.5 text-[#F75023] font-semibold hover:bg-[#F75023] hover:text-white transition-all duration-300">
                            Download CV
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-[#F75023] focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-[#F75023]"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="mt-4 w-full rounded-full border border-[#F75023] px-6 py-2 text-[#F75023] font-semibold">
                            Download CV
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
