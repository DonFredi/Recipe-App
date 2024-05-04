import React, { useContext } from 'react';
import DataContext from './DataContext';
import Recipe from './Recipe';

const RecipeCard = () => {
    const { recipes, handleRecipeClick, setSelectedRecipe, selectedRecipe } = useContext(DataContext);

    if (selectedRecipe) {
        return (
            <Recipe
                onClick={setSelectedRecipe}
            />
        )
    }

    // If no recipe is selected, render recipe list
    return (
        <div>
            <ul className="text-black flex flex-col justify-center p-3">
                {recipes.map(recipe => (
                    <div
                        className="w flex items-center border border-gray-200 rounded-lg mb-4 bg-yellow-300  p-2 hover:bg-yellow-400"
                        key={recipe.uri}
                        onClick={() => handleRecipeClick(recipe)} // Handle click on recipe
                    >
                        <img src={recipe.image}
                            className="w-48 h-48 object-cover rounded-l-lg"
                            alt={recipe.label}
                        />
                        <div className='flex flex-col p-4'>
                            <p className='font-bold text-xl'>{recipe.label}</p>
                            <p>{parseInt(recipe.totalWeight)} Kcal</p>
                            <p className='font-bold underline'>Ingredients</p>
                            <ul>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default RecipeCard;
