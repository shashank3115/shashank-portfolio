
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { EDUCATION } from '../constants';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">{children}</span>
    </h2>
);

const Education = () => {
  return (
    <AnimatedSection id="education" className="py-20 container mx-auto px-6">
      <SectionTitle>Education</SectionTitle>
      <div className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-center">
        <h3 className="text-2xl font-bold text-white">{EDUCATION.degree}</h3>
        <p className="text-cyan-400 font-semibold mt-2 text-lg">{EDUCATION.college}</p>
        <p className="text-sm text-gray-500 mt-2">{EDUCATION.period}</p>
      </div>
    </AnimatedSection>
  );
};

export default Education;
