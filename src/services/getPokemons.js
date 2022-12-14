export async function getPokemons(limit = 50, offset = 0){
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    } catch(error){
        throw new Error(`[ERROR]: getPokemons - (${error})`)
    }
}

