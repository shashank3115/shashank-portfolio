
import React from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <section id="landing" className="h-screen flex flex-col justify-center items-center relative text-center">
       <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
       >
        <h1 className="text-6xl md:text-8xl font-extrabold text-white">
            Shashank <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">Padmasali</span>
        </h1>
       </motion.div>
       
       <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-8"
        >
        <p className="text-xl md:text-2xl text-gray-300 font-light">
          BACKEND DEVELOPER <span className="text-cyan-400">|</span> FULL-STACK DEVELOPER (MERN) <span className="text-fuchsia-500">|</span> JAVA & PYTHON
        </p>
      </motion.div>
      <div className="absolute bottom-10">
        <a href="#about" aria-label="Scroll down">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-gray-400 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-gray-400"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Landing;