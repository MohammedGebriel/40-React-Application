import React from 'react'
import NavbarRecipes from './NavbarRecipes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeRecipes from './HomeRecipes'
import FavoriteRecipes from './FavoriteRecipes'
import DetailsRecipes from './DetailsRecipes'
import GlobalState from './context/context'

export default function FoodRecipes() {
    return (
        <GlobalState >
                <div>
                    <NavbarRecipes />
                    <Routes >
                        <Route path='/' element={<HomeRecipes />} />
                        <Route path='/favorites' element={<FavoriteRecipes />} />
                        <Route path='/recipes-item/:id' element={<DetailsRecipes />} />
                    </Routes>
                </div>
        </GlobalState>

    )
}
