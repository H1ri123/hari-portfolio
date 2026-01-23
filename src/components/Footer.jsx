import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1f1f25] py-8 border-t border-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} DizMe Portfolio. All Rights Reserved.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-[#F75023] transition-colors text-sm">Terms & Condition</a>
                    <a href="#" className="text-gray-400 hover:text-[#F75023] transition-colors text-sm">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
