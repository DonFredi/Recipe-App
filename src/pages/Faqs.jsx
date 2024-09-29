import React, { useState } from 'react';


const faqs = [
    {
        title: 'Class Schedules',
        question: 'What are the class timings?',
        response: 'We offer classes throughout the week, including mornings, evenings, and weekends. You can check our class schedule on the website under the "Classes" section.'
    },
    {
        title: 'Membership',
        question: 'Do I need to sign up for a membership?',
        response: 'You can drop in for individual sessions or sign up for a monthly membership for unlimited classes. We offer flexible plans to suit your needs.'
    },
    {
        title: 'Beginner Friendly',
        question: 'Are the classes suitable for beginners?',
        response: 'Absolutely! We have beginner classes tailored to help newcomers understand the basics of yoga and feel comfortable in every session.'
    },
    {
        title: 'Yoga Gear',
        question: 'Do I need to bring my own yoga mat?',
        response: 'You are welcome to bring your own mat, but we also provide high-quality mats and other equipment at the studio.'
    },
    {
        title: 'Health Benefits',
        question: 'What are the health benefits of yoga?',
        response: 'Yoga improves flexibility, builds strength, reduces stress, enhances posture, and boosts overall physical and mental well-being.'
    },
    {
        title: 'Online Classes',
        question: 'Do you offer online classes?',
        response: 'Yes, we offer online yoga classes for those who prefer to practice from the comfort of their home. Check the online classes section on our website for more details.'
    },
];

const Faqs = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState(null); // Stores the index of the open FAQ

    const toggleFaq = (index) => {
        // If the same FAQ is clicked, close it by setting index to null, else open the clicked one
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (

        <div>
            {faqs.map((faq, index) => (
                <div key={index} className="my-4 border-b-2">
                    <p className="text-gray-600 flex justify-between text-xl">
                        {faq.question}
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-8 h-8 flex items-center justify-center rounded-full font-bold text-2xl hover:text-4xl"
                        >
                            {openFaqIndex === index ? '-' : '+'}
                        </button>
                    </p>
                    {openFaqIndex === index && (
                        <div className='mt-4 gap-y-2 p-4'>
                            <h2 className="text-lg font-bold">Topic : {faq.title}</h2>
                            <p className="text-gray-800">{faq.response}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>

    );
};

export default Faqs;
