import React, { createContext, useState } from 'react';
import axios from 'axios';
import useWindowSize from '../components/useWindowSize';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const { width } = useWindowSize();

    const [error, setError] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null); // Change to null as it's a single recipe


    // Function to set the selected recipe
    const handleRecipeClick = (recipe) => {
        setSelectedRecipe(recipe);
        console.log(selectedRecipe)
    };

    const handleBackButtonClick = () => {
        setSelectedRecipe(null);
    };

    // Define your application ID and application key
    const APP_ID = '2a92d389';
    const APP_KEY = 'd66ce17685dc28a51fb8a3c8d9d69ff7';

    // Define the base URL for the Edamam API
    const BASE_URL = 'https://api.edamam.com/';

    // Function to fetch recipes based on a search query
    const fetchRecipes = async (query) => {
        try {
            // Make a GET request to the Edamam API
            const response = await axios.get(`${BASE_URL}search`, {
                params: {
                    q: query,
                    app_id: APP_ID,
                    app_key: APP_KEY,
                }
            });

            // Extract the data from the response
            const { data } = response;

            // Return the list of recipes
            return data.hits.map(hit => hit.recipe);

        } catch (error) {
            // Handle any errors
            setError('Error fetching recipes:', error);
            return []; // Return an empty array in case of error
        }
    };

    const handleSubmit = async (query) => {

        setError(null);
        try {
            const fetchedRecipes = await fetchRecipes(query); // Call fetchRecipes with the query
            setRecipes(fetchedRecipes); // Update recipes state with fetched recipes
        } catch (error) {
            setError('Error fetching recipes:', error);
        }

        console.log(recipes);
    };


    return (
        <DataContext.Provider
            value={{

                handleSubmit,
                recipes,
                error,
                width,
                selectedRecipe,
                setSelectedRecipe,
                handleRecipeClick,
                handleBackButtonClick
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;