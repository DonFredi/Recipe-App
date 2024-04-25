import React from 'react'
import { useContext } from 'react';
import DataContext from './DataContext'


const Home = () => {

    const { recipes } = useContext(DataContext);

    return (
        <div className=' text-yellow-400 p-3'>
            <h2>Featured Recipes</h2>
            {recipes.map(recipe => (
                <div key={recipe.uri}
                    className='bg-yellow-400 flex justify-center flex-col text-black rounded-lg shadow-md'
                >
                    <img src={recipe.image} alt={recipe.label}
                        className='w-48 h-48' />
                    <p>{recipe.label}</p>
                </div>
            ))

            }


        </div>
    )
}

export default Home