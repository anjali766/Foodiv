export const getdata = () => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    return recipes;
};

export const setdata = (recipes) => {
    localStorage.setItem('recipes',JSON.stringify(recipes));
};