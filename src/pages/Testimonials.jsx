import React, { useState } from 'react';
import Man from '../assets/man.jpg'
import Man2 from '../assets/man2.jpg'
import Man3 from '../assets/man3.jpg'
import Woman from '../assets/woman.jpg'
import Woman2 from '../assets/woman2.jpg'
import Woman3 from '../assets/woman3.jpg'
import Woman4 from '../assets/woman4.jpg'
import Woman5 from '../assets/woman5.jpg'
import { motion } from 'framer-motion';


const testimonials = [
    {
        name: 'John Doe',
        feedback: 'This yoga studio changed my life. Highly recommended!',
        image: Man,
    },
    {
        name: 'Jane Smith',
        feedback: 'Amazing experience, helped me achieve balance in life.',
        image: Woman,
    },
    {
        name: 'Alice Brown',
        feedback: 'The instructors are highly skilled and supportive.',
        image: Woman2,
    },
    {
        name: 'Mark Johnson',
        feedback: 'Yoga here helped me relieve chronic back pain.',
        image: Man2,
    },
    {
        name: 'Emily Davis',
        feedback: 'Such a peaceful environment, I always feel rejuvenated after each class.',
        image: Woman3,
    },
    {
        name: 'Michael Lee',
        feedback: 'I’ve gained more strength and flexibility than I ever thought possible.',
        image: Man3,
    },
    {
        name: 'Laura Martinez',
        feedback: 'The classes are perfect for beginners and experienced yogis alike.',
        image: Woman4,
    },


];

const Testimonials = () => {
    const [hoveredClient, setHoveredClient] = useState(null);

    return (
        <div className="relative hidden md:flex justify-center w-[80%] mx-auto space-x-20 py-12 z-50">
            {testimonials.map((client, index) => (
                <motion.div
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    initial={{ y: 200, opacity: 0 }}     // Start off-screen
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                >
                    <div
                        key={index}
                        className="relative group"
                        onMouseEnter={() => setHoveredClient(index)}
                        onMouseLeave={() => setHoveredClient(null)}
                    >
                        <div
                            className={`rounded-full w-24 h-24 bg-cover bg-center transition-transform duration-300 ${index % 2 === 0 ? 'transform translate-y-4' : 'transform -translate-y-4'
                                }`}
                            style={{ backgroundImage: `url(${client.image})` }}
                        ></div>

                        {hoveredClient === index && (
                            <div className="absolute top-28 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 p-4 rounded-2xl shadow-lg w-60">
                                <p className="text-bold">{client.feedback}</p>
                                <h3 className="mt-2">{client.name}</h3>

                            </div>
                        )}
                    </div>
                </motion.div>
            ))}

        </div>
    );
};

export default Testimonials;
