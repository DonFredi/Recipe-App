import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import DataContext from '../pages/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = () => {
    const { handleSubmit } = useContext(DataContext);
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(query)
        if (query.trim() !== "") {
            navigate(`/recipe/${query}`); // Use navigate instead of history.push
        }
        else {
            navigate('/home');
        }
    };

    return (
        <div className='flex justify-center'>
            <form onSubmit={onSubmit} className='relative'>
                <div className='relative'>
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder="Search for recipes..."
                        className='p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-200'
                    />
                    <button
                        className='absolute right-0 top-0 bottom-0 bg-none border-none cursor-pointer p-2 flex items-center justify-center'
                        type="submit"
                    >
                        <FontAwesomeIcon icon={faSearch} className='text-2xl' />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchInput;
