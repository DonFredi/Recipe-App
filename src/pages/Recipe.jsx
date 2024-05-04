import React from 'react'
import { useContext } from 'react';
import DataContext from './DataContext';


const Recipe = () => {
    const { handleBackButtonClick, selectedRecipe } = useContext(DataContext);


    return (

        <div className='bg-yellow-400 px-2 py-3 flex justify-center flex-col my-3'>
            <div className='flex justify start'>
                <button
                    className='text-left bg-red-500 p-3 rounded-lg text-white hover:bg-red-600'
                    onClick={handleBackButtonClick}>Back</button></div>

            <img
                className='w-full h-[400px] my-3'
                src={selectedRecipe.image}
                alt={selectedRecipe.label}
            />
            <h2 className='text-3xl'>{selectedRecipe.label}</h2>
            <p>Meal type:{selectedRecipe.mealType}</p>
            <p>Meal type:{selectedRecipe.cuisineType}</p>
            <p>Calories:{parseInt(selectedRecipe.calories)}</p>
            <ul className='flex justify-start flex-row flex-wrap gap-x-4'>
                <p>Health labels:</p>
                {selectedRecipe.healthLabels.map((label, index) => (
                    <li key={index}>{label}</li>
                ))}
            </ul>
            <h3>Ingredients</h3>

            <div>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}

            </div>
        </div>
    );
}

export default Recipe