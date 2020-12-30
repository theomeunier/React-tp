import React from 'react'
import PropTypes from 'prop-types'


export function Ingredients({ingredients}) {
    return <div className="container">
        <h1>Ingrédients</h1>
        {JSON.stringify(ingredients)}
    </div>
}

Ingredients.propTypes = {
    ingredients: PropTypes.array
}