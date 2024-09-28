import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '../pages/Main';
import Hero from '../pages/Hero';


const RootLayout = () => {
    // State to control the mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className="flex flex-col gap-y-2">
            {/* Fixed Header */}
            <header className="flex justify-between items-center p-4">
                <span className="text-3xl mx-2 font-bold">Yoga Flow</span>

                {/* Hamburger Menu Button for Small Screens */}
                <div className="md:hidden">
                    <button
                        className="text-black focus:outline-none hover:bg-slate-100 p-2 rounded-xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            // "X" icon when menu is open
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            // Hamburger icon when menu is closed
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-8 6h8"></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Navigation for larger screens (md and above) */}
                <nav className="hidden md:flex justify-end items-center gap-x-6 p-2 font-semibold">
                    <a href="#about" className="rounded-3xl bg-slate-200 px-6 py-2 hover:bg-slate-100 transition-colors">About</a>
                    <a href="#experts" className="rounded-3xl bg-slate-200 px-6 py-2 hover:bg-slate-100 transition-colors">Experts</a>
                    <a href="#events" className="rounded-3xl bg-slate-200 px-6 py-2 hover:bg-slate-100 transition-colors">Events</a>
                    <a href="#contacts" className="rounded-3xl bg-slate-200 px-6 py-2 hover:bg-slate-100 transition-colors">Contacts</a>
                </nav>
            </header>

            {/* Mobile Menu for smaller screens */}
            {isMenuOpen && (
                <nav className="flex flex-col h-[40%] items-center md:hidden bg-slate-200 p-4 space-y-4 absolute top-16 left-0 w-full z-40">
                    <a href="#about" className="w-full text-center rounded px-4 py-2 hover:bg-slate-100 transition-colors">About</a>
                    <a href="#experts" className="w-full text-center rounded px-4 py-2 hover:bg-slate-100 transition-colors">Experts</a>
                    <a href="#events" className="w-full text-center rounded px-4 py-2 hover:bg-slate-100 transition-colors">Events</a>
                    <a href="#contacts" className="w-full text-center rounded px-4 py-2 hover:bg-slate-100 transition-colors">Contacts</a>
                </nav>
            )}

            {/* Apply margin to the content so it's not hidden behind the fixed header */}

            <Hero />
            <Main />

        </section>
    );
};

export default RootLayout;

