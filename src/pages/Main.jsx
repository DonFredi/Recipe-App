import React from 'react';
import { Link } from 'react-router-dom';
import YogaInfoCard from './YogaInfoCard';
import FlexibilityImage from '../assets/flexibility.jpg';
import StrengthImage from '../assets/strength.jpg';
import RelaxationImage from '../assets/relaxation.jpg'; // Import image for relaxation
import Testimonials from './Testimonials';
import { motion } from 'framer-motion';
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from 'react-icons/fa';;
import { FaXTwitter } from 'react-icons/fa6';
import ContactCard from './ContactCard';
import Faqs from './Faqs';



const yogaBenefits = [
    {
        title: 'Improves Flexibility',
        description: 'Regular yoga practice increases flexibility and range of motion.',
        background: FlexibilityImage,
    },
    {
        title: 'Enhances Strength',
        description: 'Yoga builds strength in muscles and joints, improving overall physical fitness.',
        background: StrengthImage,
    },
    {
        title: 'Promotes Relaxation',
        description: 'Yoga encourages relaxation, reducing stress and promoting mental clarity.',
        background: RelaxationImage,
    },
];
const yogaInstructors = [
    {
        name: 'Sophia Bennett',
        position: 'Lead Instructor & Wellness Coach',
        description: 'Sophia specializes in Hatha and Vinyasa yoga, her classes focus on improving flexibility, strength, and mental clarity.',
        background: FlexibilityImage,
    },
    {
        name: 'Liam Carter',
        position: 'Strength and Mobility Specialist',
        description: 'Liam has a calm demeanor and supportive approach that makes every student feel confident and capable, whether they are just starting or are seasoned practitioners.',
        background: StrengthImage,
    },
    {
        name: 'Amara Patel',
        position: 'Meditation and Relaxation Expert',
        description: 'Amara is known for her expertise in meditation, relaxation, and restorative yoga. ',
        background: RelaxationImage,
    },
];
const contacts = [
    {
        title: 'Relax and Rejuvenate',
        description: 'Regular yoga practice increases flexibility and range of motion.',
        background: FlexibilityImage,
    },
    {
        title: 'Women Wellness Yoga Retreat',
        description: 'Yoga builds strength in muscles and joints, improving overall physical fitness.',
        background: StrengthImage,
    },
]
const Main = () => {
    return (
        <div>
            <section id="about" >
                <div className='flex flex-col md:w-[50%]  w-[80%] mx-auto items-center'>
                    <motion.div
                        viewport={{
                            once: true,
                            amount: 0.1
                        }}
                        initial={{ y: 200, opacity: 0 }}     // Start off-screen
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                    >
                        <h2 className="text-4xl font-bold text-center my-16">Benefits of Yoga</h2>
                    </motion.div>
                    <motion.div
                        viewport={{
                            once: true,
                            amount: 0.1
                        }}
                        initial={{ y: 200, opacity: 0 }}     // Start off-screen
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                    >
                        <p className='my-6'>Yoga offers a holistic approach to wellness, blending physical, mental, and spiritual practices. By incorporating yoga into your daily routine, you can experience improved flexibility, enhanced strength, and better posture. Beyond physical health, yoga helps reduce stress, increase mental clarity, and promote inner peace. Whether you are looking to boost your energy, balance your body, or find calm, yoga provides a path to greater well-being.</p></motion.div>
                </div>
                <motion.div
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    initial={{ y: 200, opacity: 0 }}     // Start off-screen
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {yogaBenefits.map((benefit, index) => (
                            <YogaInfoCard
                                key={index}
                                title={benefit.title}
                                description={benefit.description}
                                backgroundImage={benefit.background}
                            />
                        ))}
                    </div>

                </motion.div>
            </section>
            <article className='min-h-60 bg-slate-100 rounded-3xl p-6 my-6'>

                <Testimonials />
                <div className='md:w-[40%] w-[60%] mx-auto gap-y-6 flex flex-col items-center text-center justify-center mt-28 p-2'>

                    <motion.div
                        viewport={{
                            once: true,
                            amount: 0.1
                        }}
                        initial={{ y: 200, opacity: 0 }}     // Start off-screen
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                    ><h2 className='text-4xl font-bold'>Student Testimonials</h2></motion.div>
                    <motion.div
                        viewport={{
                            once: true,
                            amount: 0.1
                        }}
                        initial={{ y: 200, opacity: 0 }}     // Start off-screen
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                    >  <p>See how our members have reduced stress and enhanced well being with our support and guidance</p></motion.div>
                </div>
            </article>
            <section id="experts" className='md:w-[80%] w-[100%] mx-auto'>
                <motion.div
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    initial={{ y: 200, opacity: 0 }}     // Start off-screen
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                >
                    <h2 className='text-4xl font-bold text-center my-20'>Meet our expert instructors</h2></motion.div>
                <motion.div
                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                    initial={{ y: 200, opacity: 0 }}     // Start off-screen
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className='w-[80%] md:w-[50%] mx-auto'// Smooth transition
                >  <p className='my-6'>At Yoga Flow, we believe that the heart of a great yoga practice lies in the guidance of skilled and compassionate instructors. Our team of certified yoga experts is dedicated to helping you deepen your practice, whether you're a beginner or an experienced yogi. Each instructor brings a unique blend of knowledge, passion, and personal experience, creating a welcoming and supportive environment for all our students.
                    From Vinyasa Flow to restorative yoga, our experts are here to guide you on your journey toward physical wellness and inner peace.</p></motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {yogaInstructors.map((instructor, index) => (
                        <motion.div
                            key={index}
                            viewport={{
                                once: true,
                                amount: 0.1
                            }}
                            initial={{ y: 200, opacity: 0 }}     // Start off-screen
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                        >
                            <YogaInfoCard

                                name={instructor.name}
                                position={instructor.position}
                                description={instructor.description}
                                backgroundImage={instructor.background}
                            />
                        </motion.div>

                    ))}
                </div>
            </section>
            <main id="events" className='bg-black min-h-screen flex md:flex-row flex-col justify-center text-white p-4 items-center rounded-tr-3xl rounded-tl-3xl mt-12'>
                {/* Left Section for Workshop and Events */}
                <div className='md:w-[40%] w-[100%] mx-auto mb-12 md:mb-0 p-4'>

                    <motion.div

                        viewport={{
                            once: true,
                            amount: 0.1
                        }}
                        initial={{ y: 200, opacity: 0 }}     // Start off-screen
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                    >  <h3 className="text-3xl font-semibold mb-4 md:w-[80%] mx-auto">Workshop and Events</h3></motion.div>
                    <motion.div

                        viewport={{
                            once: true,
                            amount: 0.1
                        }}
                        initial={{ y: 200, opacity: 0 }}     // Start off-screen
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                    >  <h3 className="text-2xl font-semibold mb-4 md:w-[80%] mx-auto">Explore Deeper into Your Yoga Practice</h3></motion.div>
                    <motion.div

                        viewport={{
                            once: true,
                            amount: 0.1
                        }}
                        initial={{ y: 200, opacity: 0 }}     // Start off-screen
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                    >
                        <p className="text-lg leading-relaxed md:w-[80%] mx-auto">
                            At Yoga Flow, we offer a variety of workshops and events designed to help you expand your knowledge, deepen your practice, and connect with the yoga community.
                        </p>
                    </motion.div>
                </div>

                {/* Right Section for Contact Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 md:gap-8 lg:gap-10 md:w-[60%] w-full">
                    {contacts.map((contact, index) => (
                        <motion.div
                            key={index}
                            viewport={{
                                once: true,
                                amount: 0.1
                            }}
                            initial={{ y: 200, opacity: 0 }}     // Start off-screen
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                        >
                            <ContactCard
                                title={contact.title}
                                description={contact.description}
                                backgroundImage={contact.background}
                            />
                        </motion.div>
                    ))}
                </div>
            </main>
            <footer className='bg-slate-100 p-6 min-h-60 flex flex-col'>
                <div className='flex md:flex-row flex-col items-center justify-between'>
                    <div className='flex flex-col items-center justify-start gap-y-6 p-8 md:w-[50%] w-[80%] mx-auto'>

                        <motion.div
                            viewport={{
                                once: true,
                                amount: 0.1
                            }}
                            initial={{ y: 200, opacity: 0 }}     // Start off-screen
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                        ><h4 className='text-4xl font-bold text-center'>Frequently Asked Questions (FAQS)</h4></motion.div>
                        <motion.div
                            viewport={{
                                once: true,
                                amount: 0.1
                            }}
                            initial={{ y: 200, opacity: 0 }}     // Start off-screen
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
                            className='w-[80%] mx-auto'
                        >  < p className='my-4'> We understand that starting or continuing your yoga journey comes with questions. That's why we've put together a list of commonly asked questions to help you get the most out of your experience at Yoga Flow. Whether you're curious about our classes, what to bring, or how to get started, we've got you covered. If you don’t find the answer you’re looking for, feel free to reach out to us directly!</p></motion.div>
                    </div>
                    <motion.div
                        viewport={{
                            once: true,
                            amount: 0.1
                        }}
                        initial={{ y: 200, opacity: 0 }}     // Start off-screen
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="md:w-[40%] w-[100%]" // Smooth transition
                    >
                        <Faqs />
                    </motion.div>
                </div>

                <div id="contacts" className='flex flex-col md:flex-row items-center justify-between mt-36 md:mt-14 w-[90%]  mx-auto p-2 md:p-0'>

                    <form className="relative w-full max-w-md items-center flex flex-col md:mb:0 mb-8">
                        <h4 className="text-xl font-bold mb-2">Subscribe to Yoga Flow</h4>
                        <label className="block mb-8 font-bold">Get Started</label>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full py-2 px-4 pr-24 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your email..."
                            />
                            <button
                                type="submit"
                                className="absolute inset-y-0 right-0 px-4 bg-blue-500 hover:bg-blue-400 transition-colors text-white font-semibold rounded-3xl"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>


                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-2">

                        <div className="flex flex-col p-2 gap-y-4">
                            <h4 className="text-xl font-bold">Inspiration</h4>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Online yoga</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Online meditation</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Meditation for beginners</a>
                        </div>

                        <div className="flex flex-col p-2 gap-y-4">
                            <h4 className="text-xl font-bold">Company</h4>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Our purpose</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Our team</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Careers</a>
                        </div>

                        <div className="flex flex-col p-2 gap-y-2">
                            <h4 className="text-xl font-bold">Contact info</h4>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">123 Harmony Line</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Phone: (123)456-7890</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Email: info@yogaflow@gmail.com</a>
                        </div>
                        <div className="flex flex-col p-2 gap-y-2">
                            <h4 className="text-xl font-bold">Socials</h4>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Youtube</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">TikTok</a>
                            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">X</a>
                        </div>
                    </div>
                </div>
                <hr />
                <p className='text-center my-2 '>Copyright 2024.YogaFlow.All rights reserved.</p>
            </footer>
        </div >
    );
};

export default Main;
