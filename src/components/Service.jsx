import React from 'react';
import { Palette, Code, Smartphone, Coffee } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
    <div className="group relative bg-[#1E293B] p-10 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_-5px_rgba(37,99,235,0.1)] transition-all duration-300 hover:-translate-y-2 border border-[#2563EB]/10">
        {/* Icon Container */}
        <div className="mb-6 inline-flex p-4 rounded-2xl bg-[#2563EB]/10 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
            <Icon size={32} strokeWidth={2} />
        </div>

        <h3 className="text-2xl font-bold text-[#F1F5F9] mb-4 group-hover:text-[#2563EB] transition-colors">
            {title}
        </h3>

        <p className="text-[#94A3B8] leading-relaxed mb-6">
            {description}
        </p>

        {/* Arrow/Link decoration */}
        <div className="w-8 h-8 rounded-full border border-[rgba(59,130,246,0.2)] flex items-center justify-center text-[#94A3B8] group-hover:bg-[#2563EB] group-hover:border-[#2563EB] group-hover:text-white transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </div>
    </div>
);

const Service = () => {
    const services = [
        {
            icon: Smartphone,
            title: 'Mobile App',
            description: 'Building scalable Flutter applications for both iOS and Android platforms.Integrating REST APIs, payment systems, and optimized UI components.',
        },
        {
            icon: Code,
            title: 'Web Development',
            description: 'Building fast, responsive, and scalable websites using modern technologies like React.',
        },
        {
            icon: Coffee,
            title: 'Backend Development',
            description: "Building scalable backend systems using Java and Spring Boot with MVC architecture.Developing secure REST APIs and managing MySQL databases for reliable applications",
        },
    ];

    return (
        <section id="service" className="py-20 lg:py-28 bg-[#0F172A] relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h4 className="text-[#2563EB] font-semibold text-xl tracking-wide uppercase mb-2">Services</h4>
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9]">What I Do for Clients</h2>
                    <p className="mt-4 text-[#94A3B8] text-lg">
                        Most common methods for designing websites that work well on desktop is responsive and adaptive design.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
