import React from 'react';
import { getdata, setdata } from '../../localstorage';
import { Link } from 'react-router-dom';
import './list.css';

const Rlist = () => {
    const recipes= getdata();

    const togglefav = (id) => {
        const updatedrecipe = recipes.map(recipe => {
        if (recipe.id === id){
            return{...recipe,isfav: !recipe.isfav};
        }
        return recipe;
    });
    setdata(updatedrecipe);
    window.location.reload();
};

    return(
        
        <div className='recipe-list'>

            <h1>Recipes<br/></h1>
            <ul>
            <div className='card'>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                    <li><h3><Link to={`/details/${recipe.id}`}>{recipe.title}</Link></h3></li>
                    <br/>
                    <p>{recipe.description}</p>
                    <br/><br/>
                    <button type='button' onClick={() => togglefav(recipe.id)}>
                        {recipe.isfav? 'Unstar':'Star'}
                    </button>
                    {/* <button>
                                <Link to={`/edit/${recipe.id}`}>Edit</Link>
                            </button> */}
                    </li>
                ))}
                </div>
            </ul>
            <br/><br/>
        </div>
    )
}

export default Rlist;