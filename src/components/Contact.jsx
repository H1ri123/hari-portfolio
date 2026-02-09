import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 lg:py-28 bg-[#0F172A] relative overflow-hidden">
            {/* Decorative splash */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2563EB]/05 rounded-full blur-[80px] -z-10 translate-x-[20%]"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h4 className="text-[#2563EB] font-semibold text-xl tracking-wide uppercase mb-2">Contact Me</h4>
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#F1F5F9]">I Want To Hear From You</h2>
                    <p className="mt-4 text-[#94A3B8] text-lg">
                        Please please fill in the form below to discuss your project and expectations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4 p-6 bg-[#1E293B] rounded-2xl shadow-sm border border-[#2563EB]/10 hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-3 bg-[#2563EB]/10 text-[#2563EB] rounded-full">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#F1F5F9] mb-2">Address</h3>
                                <p className="text-[#94A3B8]">123, K.K Nagar, <br />Chennai, Tamilnadu</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-[#1E293B] rounded-2xl shadow-sm border border-[#2563EB]/10 hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-3 bg-[#2563EB]/10 text-[#2563EB] rounded-full">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#F1F5F9] mb-2">Email</h3>
                                <p className="text-[#94A3B8]">hariharan.a2599@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-[#1E293B] rounded-2xl shadow-sm border border-[#2563EB]/10 hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-3 bg-[#2563EB]/10 text-[#2563EB] rounded-full">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#F1F5F9] mb-2">Phone</h3>
                                <p className="text-[#94A3B8]">+91 8190929359</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form className="bg-[#1E293B] p-8 sm:p-10 rounded-[2rem] shadow-lg border border-[#2563EB]/10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 rounded-full bg-[#0F172A] border border-[rgba(59,130,246,0.2)] text-[#F1F5F9] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none transition-all placeholder:text-[#94A3B8]"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-6 py-4 rounded-full bg-[#0F172A] border border-[rgba(59,130,246,0.2)] text-[#F1F5F9] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none transition-all placeholder:text-[#94A3B8]"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full px-6 py-4 rounded-full bg-[#0F172A] border border-[rgba(59,130,246,0.2)] text-[#F1F5F9] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none transition-all placeholder:text-[#94A3B8]"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full px-6 py-4 rounded-full bg-[#0F172A] border border-[rgba(59,130,246,0.2)] text-[#F1F5F9] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none transition-all placeholder:text-[#94A3B8]"
                                />
                            </div>
                            <textarea
                                rows="6"
                                placeholder="Your Message"
                                className="w-full px-6 py-4 rounded-3xl bg-[#0F172A] border border-[rgba(59,130,246,0.2)] text-[#F1F5F9] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none transition-all placeholder:text-[#94A3B8] mb-8 resize-none"
                            ></textarea>

                            <button className="rounded-full bg-[#2563EB] px-10 py-4 text-white font-bold text-lg shadow-lg hover:bg-[#1D4ED8] transition-all transform hover:-translate-y-1 w-full sm:w-auto shadow-blue-500/30">
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
