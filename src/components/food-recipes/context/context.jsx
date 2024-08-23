import { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipesList, setRecipesList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState([]);
    const [favoritesList,setFavoritesList] = useState([])

    async function handleSubmit(event) {
        event.preventDefault();
        try {
        setLoading(true);
        const response = await fetch(
            `https://forkify-api.herokuapp.com/api/search?q=${searchParam}`
        );
        const data = await response.json();
        if (data.recipes) {
            setRecipesList(data.recipes);
            setLoading(false);
            setSearchParam('');
        }
        } catch (e) {
            setLoading(false);
            setSearchParam('');
        }
    }

    function handleAddToFavorites(getCurrentDetails) {
        let cpyFavoritesList = [...favoritesList];
        // let cpyFavoritesList = [].concat(favoritesList);
        const index = cpyFavoritesList.findIndex((item) => item.id === getCurrentDetails.id)
        if(index === -1) {
            cpyFavoritesList.push(getCurrentDetails)
        } else { 
            cpyFavoritesList.splice(index,1)
        }
        setFavoritesList(cpyFavoritesList)
        // console.log(index);
    }

    console.log(favoritesList);
    return (
        <GlobalContext.Provider
        value={{
            searchParam,
            setSearchParam,
            favoritesList,
            handleSubmit,
            recipesList,
            loading,
            recipeDetailsData,
            setRecipeDetailsData,
            handleAddToFavorites

        }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
