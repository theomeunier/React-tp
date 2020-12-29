import React from 'react'
import PropTypes from 'prop-types'
import {useState} from "react"

export function LoginForm (){

    const [error, setError] = useState(null)
    const [loading, setLoding] = useState(false)

    const handleSubmit = async function (e){
        setError(null)
        setLoding(true)
        e.preventDefault()

        const data = new FormData(e.target)
        const response = await fetch('http://localhost:3333/login', {
            method: 'POST',
            body: data,
            credentials: 'include',
            headers: {
                Accept: 'application/json'
            }

        })
        const responseData = await response.json()
        if (response.ok){

        }else{
            setError(responseData.errors[0].message)
        }
        setLoding(false)
    }

    return <form className="container mt-4" onSubmit={handleSubmit}>
        <h2>Se connecter</h2>
        {error && <Alert>{error}</Alert>}
        <div className="form-group">
            <label htmlFor="email">Nom d'utilisateur</label>
            <input type="text" name="email" id="email"  className="form-control" required/>
        </div>
        <div className="form-group">
            <label htmlFor="">Mot de passe</label>
            <input type="password" name="password" id="password" className="form-control" required/>
        </div>
        <button disabled={loading} type="submit" className="btn btn-primary">Se connecter</button>
    </form>
}

LoginForm.propTypes = {
    onConnect: PropTypes.func.isRequired
}

function Alert ({children}){
    return <div className="alert alert-danger">
        {children}
    </div>
}