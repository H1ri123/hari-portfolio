import React from 'react';
import { Palette, Code, Smartphone, Rocket, Layers, Layout } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
    <div className="group relative bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 border border-gray-50">
        {/* Icon Container */}
        <div className="mb-6 inline-flex p-4 rounded-2xl bg-orange-50 text-[#F75023] group-hover:bg-[#F75023] group-hover:text-white transition-colors duration-300">
            <Icon size={32} strokeWidth={2} />
        </div>

        <h3 className="text-2xl font-bold text-[#1f1f25] mb-4 group-hover:text-[#F75023] transition-colors">
            {title}
        </h3>

        <p className="text-gray-500 leading-relaxed mb-6">
            {description}
        </p>

        {/* Arrow/Link decoration */}
        <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#F75023] group-hover:border-[#F75023] group-hover:text-white transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </div>
    </div>
);

const Service = () => {
    const services = [
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Designing intuitive and engaging interfaces that delight users and solve complex problems.',
        },
        {
            icon: Code,
            title: 'Web Development',
            description: 'Building fast, responsive, and scalable websites using modern technologies like React.',
        },
        {
            icon: Smartphone,
            title: 'Mobile App',
            description: 'Creating seamless mobile experiences for both iOS and Android platforms.',
        },
        {
            icon: Rocket,
            title: 'SEO Marketing',
            description: 'Optimizing your online presence to reach more customers and grow your business.',
        },
        {
            icon: Layers,
            title: 'Graphic Design',
            description: 'Crafting stunning visuals and branding assets that communicate your message.',
        },
        {
            icon: Layout,
            title: 'Web Design',
            description: 'Creating structured, aesthetically pleasing layouts for all screen sizes.',
        }
    ];

    return (
        <section id="service" className="py-20 lg:py-28 bg-[#F9F9F9] relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h4 className="text-[#F75023] font-semibold text-xl tracking-wide uppercase mb-2">Services</h4>
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#1f1f25]">What I Do for Clients</h2>
                    <p className="mt-4 text-gray-500 text-lg">
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
