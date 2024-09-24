import React from 'react';
import { getdata , setdata } from '../../localstorage';
import { Link } from 'react-router-dom';
import './fav.css';


const FavList = () => {
    const allrecepies = getdata()
    const favrecipe  = allrecepies.filter(recipe => recipe.isfav);

   
    const togglefav = (id) => {
        const updatedrecipe = allrecepies.map(recipe => {
        if (recipe.id === id){
            return{...recipe,isfav: !recipe.isfav};
        }
        return recipe;
    });
    setdata(updatedrecipe);
    window.location.reload();
};

    return (
        <div className="fav-list">
            <h1>Favorites</h1>
            
            <ul>
            <div className='card'>
                {favrecipe.length > 0 ?(
                favrecipe.map(recipe => (
                    <li key={recipe.id}>
                        <h3><Link to={`/details/${recipe.id}`}>{recipe.title}</Link></h3>
                        <br/>
                        <p>{recipe.description}</p>
                        <br /><br />
                        <button type='button' onClick={() => togglefav(recipe.id)}>
                            {recipe.isfav ? 'Unstar' : 'Star'}
                        </button>
                    </li>
                )) 
            ) : (
                <p></p>
            )}
                </div>
            </ul>
        </div>
    )
};

export default FavList;