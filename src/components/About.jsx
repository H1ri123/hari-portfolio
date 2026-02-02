import React from 'react';

const About = () => {
    // Calculate experience from Aug 2024
    const startDate = new Date('2024-08-01');
    const currentDate = new Date();
    // Simple year diff calculation with decimal for half years if wanted, or just rounded years.
    // User asked to "Automatically calculate total experience properly... Ensure no wrong year difference".
    // Aug 2024 to Feb 2026 is ~1.5 years.
    const diffTime = Math.abs(currentDate - startDate);
    const diffYears = (diffTime / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);

    return (
        <section id="about" className="py-20 lg:py-28 bg-[#111827] overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Image with organic shape */}
                    <div className="relative flex justify-center lg:justify-start">
                        {/* Background Blob */}
                        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/05 rounded-full blur-[80px] -z-10 translate-x-[-10%] translate-y-[-10%]"></div>

                        <div className="relative w-full max-w-md">
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[10px] border-[#1E293B]">
                                <img
                                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
                                    alt="About Me"
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Experience Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-[#1E293B] p-6 rounded-2xl shadow-xl border-l-[6px] border-[#2563EB] z-20 animate-bounce-slow">
                                <div className="text-4xl font-bold text-[#2563EB] mb-1">{diffYears}+</div>
                                <div className="text-[#94A3B8] font-medium text-sm">Years of<br />Experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h4 className="text-[#3B82F6] font-semibold text-xl tracking-wide uppercase">About Me</h4>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                                Architecting <br /> Robust Solutions
                            </h2>
                        </div>

                        <p className="text-slate-400 text-lg leading-relaxed">
                            I am a Full Stack Developer with a Master’s in Computer Applications and a strong foundation in core computer science principles. My expertise lies in architecting end-to-end solutions—from designing RESTful APIs with Spring Boot and MySQL to building responsive clients using Angular and Flutter.
                            <br /><br />
                            With a background in technical training, I approach code with clarity and maintainability in mind. I thrive in collaborative environments where I can solve complex problems.
                        </p>

                        {/* Action Button */}
                        {/* Action Button */}
                        <button className="rounded-full border-2 border-[#3B82F6] px-9 py-3 text-[#3B82F6] font-bold text-lg hover:bg-[#3B82F6] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/20">
                            Download Resume
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
