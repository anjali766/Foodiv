import React,{useEffect, useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { getdata } from '../../localstorage'
import './Details.css'

const Details = () => {
    const { id } = useParams(); 
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const recipes = getdata();
        const foundRecipe = recipes.find(recipe => recipe.id === parseInt(id));
        if (foundRecipe) {
            setRecipe(foundRecipe);
        }
    }, [id]);


    if (!recipe) {
        return <p>Loading...</p>; 
    }
    return (
        <div className='details'>
            <h1>Details</h1>
                <h2>{recipe.title}</h2> 
                <br/>
                <p>{recipe.description}</p>
                <br/>
                <h4>Ingredients:</h4>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <br/>
                <h4>Steps:</h4>
                <ol>
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
                <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
        </div>
    )
}

export default Details