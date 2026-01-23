import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioItem = ({ title, category, image }) => (
    <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg">
        {/* Image */}
        <img
            src={image}
            alt={title}
            className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F75023]/90 to-[#F75023]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {/* Content appearing on hover */}
            <div className="text-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 p-4">
                <span className="text-white/80 font-medium uppercase tracking-wider text-sm mb-2 block">{category}</span>
                <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>

                <div className="flex justify-center gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#F75023] hover:bg-gray-100 transition-colors">
                        <ExternalLink size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#F75023] hover:bg-gray-100 transition-colors">
                        <Github size={20} />
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const Portfolio = () => {
    const projects = [
        {
            title: 'Finance Dashboard',
            category: 'Web Development',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
        },
        {
            title: 'Travel App',
            category: 'Mobile App',
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop',
        },
        {
            title: 'E-commerce Shop',
            category: 'Web Design',
            image: 'https://images.unsplash.com/photo-1472851294608-415105279434?q=80&w=1000&auto=format&fit=crop',
        },
        {
            title: 'Marketing Landing',
            category: 'SEO Marketing',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
        },
        {
            title: 'Personal Brand',
            category: 'Graphic Design',
            image: 'https://images.unsplash.com/photo-1626785774583-b756fe9785da?q=80&w=1000&auto=format&fit=crop',
        },
        {
            title: 'Crypto Wallet',
            category: 'App Design',
            image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1000&auto=format&fit=crop',
        }
    ];

    return (
        <section id="portfolio" className="py-20 lg:py-28 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h4 className="text-[#F75023] font-semibold text-xl tracking-wide uppercase mb-2">Portfolio</h4>
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#1f1f25]">My Amazing Works</h2>
                    <p className="mt-4 text-gray-500 text-lg">
                        Most common methods for designing websites that work well on desktop is responsive and adaptive design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <PortfolioItem key={index} {...project} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-16 text-center">
                    <button className="rounded-full border-2 border-[#F75023] px-10 py-3 text-[#F75023] font-semibold hover:bg-[#F75023] hover:text-white transition-all duration-300">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
