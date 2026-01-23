import React from 'react';
import { Facebook, Twitter, Linkedin, Github, Mouse, Palette, Code, Figma } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F9F9F9]">
            {/* Background Splashes (CSS + SVG Simulated) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Top Right Splash */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-[100px]"></div>
                {/* Bottom Left Splash */}
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[100px]"></div>
                {/* Texture Noise Overlay could go here */}
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-6 lg:pr-8">
                    <h3 className="text-2xl font-semibold text-[#F75023]">Hello, I'm</h3>
                    <h1 className="text-6xl sm:text-7xl lg:text-7xl font-bold text-[#1f1f25] tracking-tight">
                        HARI HARAN
                    </h1>
                    <div className="text-xl sm:text-2xl font-medium text-gray-600">
                        A <span className="text-[#1cbe59]">Devloper</span>
                    </div>
                    <p className="max-w-lg text-gray-500 text-lg leading-relaxed">
                        I'm creative designer based in New York, and I'm very passionate and dedicated to my work.
                    </p>

                    <div className="flex items-center gap-8 pt-4">
                        <button className="rounded-full bg-[#F75023] px-9 py-3.5 text-white font-semibold shadow-lg shadow-orange-500/30 hover:bg-[#d63f16] transition-all transform hover:-translate-y-1">
                            About Me
                        </button>

                        {/* Social Icons */}
                        <div className="flex gap-5">
                            <a href="#" className="text-gray-800 hover:text-[#F75023] transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-800 hover:text-[#F75023] transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-800 hover:text-[#F75023] transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-800 hover:text-[#F75023] transition-colors"><Github size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Right Image/Visuals */}
                <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
                    {/* Splash Background behind Image */}
                    <div className="absolute inset-0 bg-[#F75023]/10 transform rotate-6 rounded-[3rem] z-0 scale-90 translate-x-4 translate-y-4"></div>

                    {/* Profile Image Container */}
                    <div className="relative z-10 w-full max-w-[450px]">
                        {/* Placeholder for the person image - using a high-quality Unsplash portrait */}
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-gray-100 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                                alt="James Smith"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Icons */}
                        {/* Ps - Photoshop */}
                        <div className="absolute top-12 -right-8 bg-[#001e36] p-3 rounded-2xl shadow-xl animate-bounce-slow">
                            <span className="text-[#31a8ff] font-bold text-2xl font-sans">Ps</span>
                        </div>

                        {/* Ai - Illustrator */}
                        <div className="absolute top-20 -left-6 bg-[#330000] p-3 rounded-2xl shadow-xl animate-bounce-slower">
                            <span className="text-[#ff9a00] font-bold text-2xl font-sans">Ai</span>
                        </div>

                        {/* Figma */}
                        <div className="absolute bottom-12 -left-4 bg-white p-3 rounded-2xl shadow-xl animate-pulse-slow">
                            <Figma className="w-8 h-8 text-black" />
                            {/* Figma logo usually colorful, using plain icon for now or we can use colored SVG */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <Mouse className="text-gray-400 w-8 h-8" />
            </div>

            {/* Bottom Right Dot/Decoration */}
            <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full border border-orange-200 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#F75023] rounded-full"></div>
            </div>
        </section>
    );
};

export default Hero;
