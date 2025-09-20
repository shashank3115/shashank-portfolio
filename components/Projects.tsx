
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { motion } from 'framer-motion';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">{children}</span>
    </h2>
);

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div 
        whileHover={{ y: -10, scale: 1.02 }}
        className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-2xl border border-gray-700 h-full flex flex-col"
    >
        <div className="relative w-full h-[200px]">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
        </div>
        <h3 className="text-2xl font-bold mt-4 text-white">{project.title}</h3>
        <p className="mt-2 text-gray-400 text-sm flex-grow">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-900/50 rounded-full">
                    #{tag}
                </span>
            ))}
        </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="py-20 container mx-auto px-6">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;