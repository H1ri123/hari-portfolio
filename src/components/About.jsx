import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Image with organic shape */}
                    <div className="relative flex justify-center lg:justify-start">
                        {/* Background Blob */}
                        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[80px] -z-10 translate-x-[-10%] translate-y-[-10%]"></div>

                        <div className="relative w-full max-w-md">
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white/50">
                                <img
                                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
                                    alt="About Me"
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Experience Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border-l-[6px] border-[#F75023] z-20 animate-bounce-slow">
                                <div className="text-4xl font-bold text-[#F75023] mb-1">12+</div>
                                <div className="text-gray-600 font-medium text-sm">Years of<br />Experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h4 className="text-[#F75023] font-semibold text-xl tracking-wide uppercase">About Me</h4>
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1f1f25] leading-tight">
                                I Can Design <br /> Anything You Want
                            </h2>
                        </div>

                        <p className="text-gray-500 text-lg leading-relaxed">
                            Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
                        </p>

                        {/* Action Button */}
                        <button className="rounded-full border-2 border-[#F75023] px-9 py-3 text-[#F75023] font-bold text-lg hover:bg-[#F75023] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                            Hire Me
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
