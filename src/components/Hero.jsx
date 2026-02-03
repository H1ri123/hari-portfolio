import React from 'react';
import { Linkedin, Github, Mouse, Smartphone, Database, Server, Coffee } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0F172A]">
            {/* Background Splashes (CSS + SVG Simulated) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Top Right Splash */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[120px]"></div>
                {/* Bottom Left Splash */}
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#2563EB]/05 rounded-full blur-[120px]"></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-6 lg:pr-8">
                    <h3 className="text-2xl font-semibold text-[#2563EB]">Hello, I'm</h3>
                    <h1 className="text-6xl sm:text-7xl lg:text-7xl font-bold text-[#F1F5F9] tracking-tight">
                        HARI HARAN
                    </h1>
                    <div className="text-xl sm:text-2xl font-medium text-[#94A3B8]">
                        <span className="text-[#2563EB]">Software Engineer</span>
                    </div>
                    <p className="max-w-lg text-[#94A3B8] text-lg leading-relaxed">
                        Building Scalable Web & Mobile Solutions. I engineer robust backend systems and intuitive user interfaces.
                    </p>

                    <div className="flex items-center gap-8 pt-4">
                        <a href="#about" className="rounded-full bg-[#2563EB] px-9 py-3.5 text-white font-semibold shadow-lg shadow-blue-500/20 hover:bg-[#1D4ED8] transition-all transform hover:-translate-y-1 block">
                            About Me
                        </a>

                        {/* Social Icons */}
                        <div className="flex gap-5">
                            <a href="https://www.linkedin.com/in/hariharan12345/" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#2563EB] transition-colors"><Linkedin size={20} /></a>
                            <a href="https://github.com/H1ri123" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#2563EB] transition-colors"><Github size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Right Image/Visuals */}
                <div className="relative flex justify-center lg:justify-end mt- lg:mt-0">
                    {/* Splash Background behind Image */}
                    <div className="absolute inset-0 bg-[#2563EB]/10 transform rotate-6 rounded-[3rem] z-0 scale-90 translate-x-4 translate-y-4"></div>

                    {/* Profile Image Container */}
                    <div className="relative z-10 w-full max-w-[400px]">
                        {/* Placeholder for the person image - using a high-quality Unsplash portrait */}
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-slate-700/50 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                                alt="James Smith"
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Floating Icons */}

                        {/* Java */}
                        <div className="absolute bottom-32 -right-4 bg-[#1E293B] p-4 rounded-xl shadow-xl animate-pulse-slow border border-[#2563EB]/30 flex items-center gap-3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-6 h-6" />
                            <span className="text-[#F1F5F9] font-medium text-sm">Java</span>
                        </div>

                        {/* MySQL */}
                        <div className="absolute bottom-12 -left-4 bg-[#1E293B] p-4 rounded-xl shadow-xl animate-pulse-slow border border-[#2563EB]/30 flex items-center gap-3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-6 h-6" />
                            <span className="text-[#F1F5F9] font-medium text-sm">MySQL</span>
                        </div>

                        {/* Flutter */}
                        <div className="absolute top-12 -right-8 bg-[#1E293B] p-4 rounded-xl shadow-xl animate-bounce-slow border border-[#2563EB]/30 flex items-center gap-3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-6 h-6" />
                            <span className="text-[#F1F5F9] font-medium text-sm">Flutter</span>
                        </div>

                        {/* Spring Boot */}
                        <div className="absolute top-20 -left-6 bg-[#1E293B] p-4 rounded-xl shadow-xl animate-bounce-slower border border-[#2563EB]/30 flex items-center gap-3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" className="w-6 h-6" />
                            <span className="text-[#F1F5F9] font-medium text-sm">Spring</span>
                        </div>
                    </div>
                </div>
            </div>




        </section>
    );
};

export default Hero;
