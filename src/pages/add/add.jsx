import React, { useState , useEffect } from 'react';
import { getdata, setdata} from '../../localstorage';
import './Add.css'
import { useParams , useNavigate} from 'react-router-dom';

const Add = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({
        title: '',
        Description: '',
        ingredients: '',
        steps: '',
        tags: [],
        isfav: false
    });

    const tagOptions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Easy'];


    useEffect(() => {
        if (id) {
            const recipes = getdata();
            const foundRecipe = recipes.find(recipe => recipe.id === parseInt(id));
            if (foundRecipe) {
                setRecipe({
                    title: foundRecipe.title,
                    description: foundRecipe.description,
                    ingredients: foundRecipe.ingredients.join(', '),
                    steps: foundRecipe.steps.join(', '),
                    tags: foundRecipe.tags
                });
            }
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, tagOptions } = e.target;
        if (type === 'select-multiple') {
            const selectedTags = Array.from(tagOptions, option => option.value);
            setRecipe(prevRecipe => ({
                ...prevRecipe,
                [name]: selectedTags
            }));
        } else {
            setRecipe(prevRecipe => ({
                ...prevRecipe,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipes = getdata();
        let updatedRecipes;
        
        if (id) {
            updatedRecipes = recipes.map(nrecipe => {
                if (nrecipe.id === parseInt(id)) {
                    return {
                        ...nrecipe,
                        title: recipe.title,
                        description: recipe.description,
                        ingredients: recipe.ingredients.split(',').map(i => i.trim()),
                        steps: recipe.steps.split(',').map(s => s.trim()),
                        tags: recipe.tags
                    };
                }
                return nrecipe;
            });
        } else {
            const newRecipe = {
                id: Date.now(),
                title: recipe.title,
                description: recipe.description,
                ingredients: recipe.ingredients.split(',').map(i => i.trim()),
                steps: recipe.steps.split(',').map(s => s.trim()),
                tags: recipe.tags
            };
            updatedRecipes = [...recipes, newRecipe];
        }

        setdata(updatedRecipes);
        navigate('/');
        alert('Recipe Saved!')
    };

    return (
        <div className='addform'>
            <h1>Add Recipe</h1>
            <form onSubmit={handleSubmit}>
                <input
                    autoComplete="off"
                    type='text'
                    name='title'
                    value={recipe.title}
                    onChange={handleChange}
                    placeholder='Recipe Title'
                    required
                />


                <input
                    autoComplete="off"
                    type='text'
                    name='description'
                    value={recipe.description}
                    onChange={handleChange}
                    placeholder='Recipe Description'
                    required
                />


                <input
                    autoComplete="off"
                    type='text'
                    name='ingredients'
                    value={recipe.ingredients}
                    onChange={handleChange}
                    placeholder='Recipe Ingredients'
                    required
                />

                <textarea
                    autoComplete="off"
                    name='steps'
                    value={recipe.steps}
                    onChange={handleChange}
                    placeholder='Recipe Steps'
                    required
                />

                <select
                    autoComplete="off"
                    name='tags'
                    multiple
                    value={recipe.tags}
                    onChange={handleChange}
                    required
                >
                    {tagOptions.map(tag => (
                        <option key={tag} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>


                <button type="submit">Save Recipe</button>
            </form>
        </div>
    );
};

export default Add;