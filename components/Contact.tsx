
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { SOCIAL_LINKS } from '../constants';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">{children}</span>
    </h2>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        alert('Thank you for your message! (This is a demo)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <AnimatedSection id="contact" className="py-20 container mx-auto px-6">
            <SectionTitle>Contact</SectionTitle>
            <div className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5" placeholder="John Doe" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5" placeholder="name@example.com" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
                        <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2.5" placeholder="Leave a message..." required></textarea>
                    </div>
                    <button type="submit" className="w-full text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Send Message
                    </button>
                </form>
                 <div className="mt-8 text-center text-gray-400">
                    <p>Shashankpadmasale@gmail.com</p>
                    <p className="mt-1">+91 939086975</p>
                    <div className="mt-4 flex justify-center items-center space-x-6">
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-400 hover:text-white transition-colors"><GitHubIcon /></a>
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon /></a>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Contact;