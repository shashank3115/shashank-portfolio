
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../constants';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">{children}</span>
    </h2>
);

const Achievements = () => {
    return (
        <AnimatedSection id="achievements" className="py-20 container mx-auto px-6">
            <SectionTitle>Achievements & Certifications</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">Key Achievements</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {ACHIEVEMENTS.map((achievement, index) => (
                            <li key={`achievement-${index}`}>{achievement}</li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
                    <h3 className="text-2xl font-bold text-fuchsia-500 mb-4">Certifications</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                         {CERTIFICATIONS.map((cert, index) => (
                            <li key={`cert-${index}`}>{cert}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Achievements;
