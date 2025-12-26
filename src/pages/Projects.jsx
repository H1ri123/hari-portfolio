import React from 'react';
import ProjectCard from '../components/specific/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h1>
                <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                    A collection of projects covering frontend development, data visualization, and interactive interfaces.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
