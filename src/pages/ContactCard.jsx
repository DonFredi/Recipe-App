import React from 'react'

const ContactCard = ({ title, description, backgroundImage }) => {
    return (
        <div
            className="relative bg-cover bg-center min-h-[20rem] rounded-3xl overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                <div className="text-center p-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-lg mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactCard