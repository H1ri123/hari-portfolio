import React from 'react';
import { Globe, Server, Database } from 'lucide-react';

const SkillCard = ({ name, icon: Icon, image, delay }) => (
    <div
        className="group relative bg-[#1E293B] p-6 rounded-2xl border border-slate-800 hover:border-[#2563EB] transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)] hover:-translate-y-2 flex flex-col items-center justify-center gap-4 cursor-default"
        style={{ animationDelay: delay }}
    >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-[#2563EB]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

        {/* Icon */}
        <div className="relative z-10 p-4 rounded-xl bg-[#0F172A] border border-slate-700 group-hover:border-[#2563EB]/50 transition-colors duration-300">
            {image ? (
                <img src={image} alt={name} className="w-10 h-10 object-contain" />
            ) : (
                <Icon className="w-10 h-10 text-[#F1F5F9] group-hover:text-[#2563EB] transition-colors" />
            )}
        </div>

        {/* Name */}
        <h3 className="relative z-10 text-lg font-semibold text-[#F1F5F9] group-hover:text-[#2563EB] transition-colors">
            {name}
        </h3>
    </div>
);

const Skills = () => {
    const skills = [
        { name: "Flutter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Spring Boot", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "REST API", icon: Globe },
        { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ];

    return (
        <section id="skills" className="py-20 lg:py-28 bg-[#0F172A] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/05 rounded-full blur-[120px] -z-10 translate-x-[30%] translate-y-[-30%]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2563EB]/05 rounded-full blur-[100px] -z-10 translate-x-[-30%] translate-y-[30%]"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h4 className="text-[#2563EB] font-semibold text-xl tracking-wide uppercase mb-3">My Expertise</h4>
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9] mb-6">
                        Technical Skills & Knowledge
                    </h2>
                    <p className="text-[#94A3B8] text-lg leading-relaxed">
                        I specialize in building scalable, high-performance applications.
                        My stack focuses on robust backends and cross-platform mobile solutions.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            name={skill.name}
                            icon={skill.icon}
                            image={skill.image}
                            delay={`${index * 100}ms`}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <p className="text-[#94A3B8] mb-6">Want to see these skills in action?</p>
                    <a
                        href="#portfolio"
                        className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-8 py-3 text-white font-bold shadow-lg shadow-blue-500/20 hover:bg-[#1D4ED8] hover:-translate-y-1 transition-all duration-300"
                    >
                        View Projects
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Skills;
