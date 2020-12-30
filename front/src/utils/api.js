/**
 * represente une erreur renvoyée par l'api
 */
export class ApiErrors {
    constructor(errors) {
        this.errors = errors
    }
}

/**
 * @param {string} endpoint
 * @param {object} options
 */
export async  function apiFetch (endpoint, options= {}) {
    const response = await fetch('http://localhost:3333' + endpoint, {
        credentials: 'include',
        headers: {
            Accept: 'application/json'
        },
        ...options
    })
    if (response.status === 204){
        return null
    }
    const reponseData = await response.json()
    if (response.ok){
        return reponseData
    }else{
        if (reponseData.errors){
            throw new ApiErrors(reponseData.errors)
        }
    }
}