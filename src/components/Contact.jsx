import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 lg:py-28 bg-[#F9F9F9] relative overflow-hidden">

            {/* Decorative splash */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-[80px] -z-10 translate-x-[20%]"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h4 className="text-[#F75023] font-semibold text-xl tracking-wide uppercase mb-2">Contact Me</h4>
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#1f1f25]">I Want To Hear From You</h2>
                    <p className="mt-4 text-gray-500 text-lg">
                        Please please fill in the form below to discuss your project and expectations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-3 bg-orange-100 text-[#F75023] rounded-full">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                                <p className="text-gray-500">20, Something Street, <br />New York, USA</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-3 bg-green-100 text-[#1cbe59] rounded-full">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                                <p className="text-gray-500">hello@dizme.com<br />support@dizme.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-3 bg-purple-100 text-[#8067f0] rounded-full">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                                <p className="text-gray-500">+1 234 567 890<br />+1 987 654 321</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-lg">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-[#F75023] focus:ring-1 focus:ring-[#F75023] outline-none transition-all placeholder:text-gray-400"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-[#F75023] focus:ring-1 focus:ring-[#F75023] outline-none transition-all placeholder:text-gray-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-[#F75023] focus:ring-1 focus:ring-[#F75023] outline-none transition-all placeholder:text-gray-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-[#F75023] focus:ring-1 focus:ring-[#F75023] outline-none transition-all placeholder:text-gray-400"
                                />
                            </div>
                            <textarea
                                rows="6"
                                placeholder="Your Message"
                                className="w-full px-6 py-4 rounded-3xl border border-gray-200 focus:border-[#F75023] focus:ring-1 focus:ring-[#F75023] outline-none transition-all placeholder:text-gray-400 mb-8 resize-none"
                            ></textarea>

                            <button className="rounded-full bg-[#F75023] px-10 py-4 text-white font-bold text-lg shadow-lg hover:bg-[#d63f16] transition-all transform hover:-translate-y-1 w-full sm:w-auto">
                                Submit Now
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
