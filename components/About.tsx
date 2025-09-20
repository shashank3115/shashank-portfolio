
import React from 'react';
import AnimatedSection from './AnimatedSection';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">{children}</span>
    </h2>
);

const About = () => {
  return (
    <AnimatedSection id="about" className="py-20 container mx-auto px-6">
      <SectionTitle>About Me</SectionTitle>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-2/3">
          <p className="text-lg text-gray-300 leading-relaxed">
            As a Computer Science graduate, I have hands-on experience in backend and full-stack development using the MERN stack. I'm proficient in building scalable APIs, real-time systems, and managing databases. My passion is solving real-world problems through AI and automation, a skill I've honed through success in hackathons and technical leadership roles.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-600 p-1 shadow-lg shadow-fuchsia-500/30">
            <div className="w-full h-full rounded-full bg-[#050816] flex items-center justify-center">
                 <img src="https://picsum.photos/seed/shashank/250" alt="Shashank Padmasale" className="w-[246px] h-[246px] rounded-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;