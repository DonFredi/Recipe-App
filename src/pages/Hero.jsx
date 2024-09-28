import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../assets/yoga.jpeg';

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center min-h-[36rem] rounded-3xl overflow-hidden" style={{ backgroundImage: `url(${HeroImage})` }}>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                <motion.div
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    initial={{ y: 200, opacity: 0 }}     // Start off-screen
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                    className='flex flex-col items-center gap-y-4 md:w-[80%] w-[70%] mx-auto p-2'
                >
                    <h1 className="text-5xl font-bold">Welcome to Our Yoga Studio</h1>
                    <p className="text-xl mt-4">Achieve balance in mind, body, and soul.</p>
                    <a href="#about" className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-400 transition-colors text-white font-semibold rounded">
                        Learn More
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
