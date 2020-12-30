import React from 'react'
import {useState} from "react";
import {Ingredients} from "./Ingredients/Ingredients";
import {useIngredients} from "../hooks/ingredients";
import {useEffect} from "react";

export function Site() {

    //on crée un etat qui permet de memoriser la page
    const [page, setPage] = useState('ingredients')
    const {
        ingredients,
        fetchIngredients
    } = useIngredients()

    let content = null
    if (page === 'ingredients'){
        content = <Ingredients ingredients={ingredients}/>
    }

    //on appel se useEffet lorsque la page change
    useEffect(function () {
        if (page === 'ingredients') {
            fetchIngredients()
        }
    }, [page])

    return <>
        <Navbar currentPage={page} onClick={setPage}/>
        {content}
    </>
}


//on crée une fonction pour la navbar
function Navbar({currentPage, onClick}) {

    //on crée une fonctione pour savoir si la class est active
    const navClass = function (page) {
        let className = 'nav-item'
        if (page === currentPage) {
            className = ' active'
        }
        return className;
    }

    return <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <a href="" className="navbar-brand">Recettes</a>
        <ul className="navbar-nav mr-auto">
            <li className={navClass('recipes')}>
                <a href="#recipes" className="nav-link" onClick={() => onClick('recipes')}>Recettes</a>
            </li>
            <li className={navClass('ingredients')}>
                <a href="#ingredients" className="nav-link" onClick={() => onClick('ingredients')}>Ingrédients</a>
            </li>
        </ul>

    </nav>
}