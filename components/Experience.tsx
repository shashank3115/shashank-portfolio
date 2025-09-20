
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { EXPERIENCES } from '../constants';
import type { Experience } from '../constants';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">{children}</span>
    </h2>
);

const ExperienceCard = ({ experience }: { experience: Experience }) => {
    return (
        <div className="relative pl-10 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-fuchsia-500 before:rounded-full before:border-4 before:border-gray-800">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                <p className="text-cyan-400 font-semibold mt-1">{experience.company_name}</p>
                <p className="text-sm text-gray-500 mt-1 mb-4">{experience.date}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {experience.points.map((point, index) => (
                        <li key={`experience-point-${index}`}>{point}</li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
}

const Experience = () => {
    return (
        <AnimatedSection id="experience" className="py-20 container mx-auto px-6">
            <SectionTitle>Experience</SectionTitle>
            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-700"></div>
                <div className="space-y-12">
                    {EXPERIENCES.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Experience;