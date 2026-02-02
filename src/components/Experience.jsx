import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 lg:py-28 bg-[#111827]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h4 className="text-[#2563EB] font-semibold text-xl tracking-wide uppercase mb-3">My Journey</h4>
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9]">Work Experience</h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#1E293B]"></div>

                    {/* Experience 1 */}
                    <div className="relative mb-12 md:mb-0">
                        <div className="md:flex items-center justify-between w-full p-4 md:p-0">
                            <div className="order-1 md:w-5/12 mb-4 md:mb-0 md:text-right">
                                <h3 className="text-2xl font-bold text-[#F1F5F9]">Flutter Developer</h3>
                                <h4 className="text-lg font-medium text-[#2563EB] mt-1">FT Digital Solutions</h4>
                                <div className="text-[#94A3B8] mt-2 font-medium">Aug 2025 - Present</div>
                            </div>

                            <div className="absolute left-[-8px] md:static z-20 flex items-center order-1 bg-[#2563EB] shadow-xl w-6 h-6 rounded-full border-4 border-[#1E293B] md:border-[#1E293B]">
                            </div>

                            <div className="order-1 md:w-5/12 md:pl-8">
                                <p className="text-[#94A3B8] leading-relaxed bg-[#1E293B] p-6 rounded-2xl shadow-sm border border-[rgba(59,130,246,0.2)] hover:shadow-md transition-shadow">
                                    Currently developing scalable Flutter applications with strong REST API integration, authentication systems, and secure payment flows. Focused on clean code structure, performance optimization, and production-ready deployments.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Experience 2 */}
                    <div className="relative mt-12">
                        <div className="md:flex items-center justify-between w-full p-4 md:p-0">
                            <div className="order-1 md:w-5/12 mb-4 md:mb-0 md:text-right md:order-last md:pl-8 md:text-left">
                                <h3 className="text-2xl font-bold text-[#F1F5F9]">Flutter Developer</h3>
                                <h4 className="text-lg font-medium text-[#2563EB] mt-1">Skorpion Infotech Private Limited</h4>
                                <div className="text-[#94A3B8] mt-2 font-medium">Aug 2024 - Aug 2025</div>
                            </div>

                            <div className="absolute left-[-8px] md:static z-20 flex items-center order-1 bg-[#1E293B] border-4 border-[#2563EB] shadow-xl w-6 h-6 rounded-full">
                            </div>

                            <div className="order-1 md:w-5/12 md:pr-8 md:text-right">
                                <p className="text-[#94A3B8] leading-relaxed bg-[#1E293B] p-6 rounded-2xl shadow-sm border border-[rgba(59,130,246,0.2)] hover:shadow-md transition-shadow">
                                    Developed and maintained production-level Flutter mobile applications. Integrated RESTful APIs, implemented Razorpay payment gateway for secure transactions, built real-time order tracking features, and delivered responsive UI optimized for performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
