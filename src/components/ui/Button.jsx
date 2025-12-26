import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    to,
    href,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400",
        secondary: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700",
        outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-gray-900",
    };

    const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClasses} {...props}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={combinedClasses} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
