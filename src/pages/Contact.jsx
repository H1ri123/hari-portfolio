import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const contactLinks = [
        {
            name: 'Email',
            value: 'alex.dev@example.com',
            icon: Mail,
            href: 'mailto:alex.dev@example.com',
            color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
        },
        {
            name: 'GitHub',
            value: 'github.com/alexdev',
            icon: Github,
            href: 'https://github.com',
            color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
        },
        {
            name: 'LinkedIn',
            value: 'linkedin.com/in/alexdev',
            icon: Linkedin,
            href: 'https://linkedin.com',
            color: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300',
        },
    ];

    return (
        <div className="mx-auto max-w-2xl space-y-12 py-8">
            <div className="space-y-4 text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Get in Touch</h1>
                <p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-400">
                    I'm currently available for freelance work or full-time opportunities.
                    If you have a project that needs some creative injection, let's chat.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1">
                {contactLinks.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        target={item.name === 'Email' ? undefined : '_blank'}
                        rel={item.name === 'Email' ? undefined : 'noopener noreferrer'}
                        className="group flex items-center gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-gray-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
                    >
                        <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full ${item.color} transition-transform group-hover:scale-110`}>
                            <item.icon className="h-7 w-7" />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Contact;
