import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#111827] py-12 border-t border-[rgba(59,130,246,0.2)]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Brand */}
                    <div className="text-2xl font-bold text-white">
                        HARI<span className="text-[#2563EB]">HARAN</span>
                    </div>

                    {/* Copyright */}
                    <div className="text-[#94A3B8] text-center md:text-left">
                        © {new Date().getFullYear()} Hari Haran. All rights reserved.
                    </div>

                    {/* Socials */}
                    <div className="flex gap-6">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#2563EB] transition-colors"><Linkedin size={20} /></a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#2563EB] transition-colors"><Github size={20} /></a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
