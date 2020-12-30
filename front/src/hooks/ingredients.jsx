import {apiFetch} from "../utils/api";
import {useReducer} from "react";

/**
 *on viens de crée un hook
 *
 * un reducer qui permet de definir les mutation
 * et on crée des action que l'on pouvoir passer a nos differents systeme
 */

function reducer (state, action) {
    console.log('INGREDIENTS REDUCE', action.type, action )
    switch (action.type){
        case 'SET_INGREDIENTS':
            return {...state, ingredients: action.payload}
    }
}

export  function useIngredients () {
    const [state, dispatch] = useReducer(reducer, {
        ingredients: null
    })

    return {
        ingredients: state.ingredients,
        fetchIngredients: async function () {
            const ingredients = await apiFetch('/ingredients')
            dispatch({type: 'SET_INGREDIENTS', payload: ingredients})
        }
    }

}
