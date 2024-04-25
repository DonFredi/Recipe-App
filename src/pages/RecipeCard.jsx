import { useContext } from 'react';
import DataContext from './DataContext'


const RecipeCard = () => {
    const { recipes } = useContext(DataContext);


    return (
        <div>

            <ul className="text-black flex flex-col justify-center p-3" >
                {recipes.map(recipe => (

                    <div className="flex items-center border border-gray-200 rounded-lg mb-4 bg-yellow-400 w-[100%] p-2" key={recipe.uri}>
                        <img src={recipe.image}
                            className="w-48 h-48 object-cover rounded-l-lg"
                            alt={recipe.label}
                        />
                        <div className='flex flex-col p-4'>
                            <p className='font-bold'>{recipe.label}</p>
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
    )
}

export default RecipeCard