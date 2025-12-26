import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { skills } from '../data/skills';
import { ArrowRight, Code } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const Home = () => {
    const [showContent, setShowContent] = useState(false);

    // You can customize these values
    const name = "Alex";
    const role = "Frontend Developer";

    const { nameText, roleText, phase, showCursor } = useTypewriter({
        name,
        role,
        onComplete: () => setShowContent(true)
    });

    return (
        <div className="flex flex-col gap-16 md:gap-24">
            {/* Hero Section */}
            <section className="flex flex-col gap-6 pt-8 md:pt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                <div className="flex-1 space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl min-h-[160px] sm:min-h-[120px] lg:min-h-[auto]">
                        Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">
                            {nameText}
                        </span>
                        {phase === 'typingName' && showCursor && <span className="text-indigo-600 dark:text-indigo-400 animate-pulse">|</span>}
                        <br />
                        <span className="block h-[1.2em]">
                            {roleText}
                            {(phase === 'typingRole' || phase === 'pausing') && showCursor && <span className="text-gray-900 dark:text-white animate-pulse">|</span>}
                        </span>
                    </h1>

                    <div className={`transition-all duration-1000 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl mb-6">
                            A frontend developer focused on creating clean, accessible, and performant web applications.
                            I turn designs into pixel-perfect code.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button to="/projects" className="gap-2">
                                View Work <ArrowRight className="h-5 w-5" />
                            </Button>
                            <Button to="/contact" variant="secondary">
                                Contact Me
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Visual/Image Placeholder */}
                <div className="hidden flex-1 items-center justify-center lg:flex">
                    <div className="relative aspect-square w-full max-w-md rounded-2xl bg-gradient-to-tr from-indigo-100 to-purple-100 p-8 dark:from-indigo-900/20 dark:to-purple-900/20">
                        <div className="absolute inset-0 flex items-center justify-center text-indigo-200/50 dark:text-indigo-900/30">
                            <Code className="h-48 w-48" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        The technologies I use to build modern applications.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-4 font-medium text-gray-700 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
