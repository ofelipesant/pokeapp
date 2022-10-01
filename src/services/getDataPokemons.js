export async function getDataPokemons(url){
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        throw new Error(`[ERROR]: getDataPokemons - (${error})`)
    }
}