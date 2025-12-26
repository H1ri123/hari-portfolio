import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between sm:flex-row">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Portfolio. All rights reserved.
                    </p>
                    <div className="mt-4 flex space-x-6 sm:mt-0">
                        <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                            <span className="sr-only">Email</span>
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
