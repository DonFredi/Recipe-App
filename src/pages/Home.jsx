import React from 'react'
import { useContext } from 'react';
import DataContext from './DataContext';
import Form from '../components/Form';



const Home = () => {

    const { recipes } = useContext(DataContext);

    return (
        <div className=' text-yellow-400 p-3'>
            <h2>Featured Recipes</h2>
            <Form />



            {recipes.map(recipe => (
                <div key={recipe.uri}
                    className='bg-yellow-400 flex justify-start p-2 flex-row my-2 text-black rounded-lg shadow-md'
                >
                    <img src={recipe.image} alt={recipe.label}
                        className='w-48 h-48' />
                    <div className='p-2 flex flex-col justify-start'>
                        <p>{recipe.label}</p>
                        <ul className='flex justify-start flex-col flex-wrap gap-x-4'>
                            <p className='underline'>Ingredients:</p>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient.text}</li>
                            ))}
                        </ul>

                    </div>
                </div>
            ))

            }


        </div>
    )
}

export default Home