import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
            {/* Image Container */}
            <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                        <Github className="h-4 w-4" /> Code
                    </a>
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                        >
                            <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
