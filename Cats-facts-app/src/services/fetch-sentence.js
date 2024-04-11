export const getFact = async() =>{
    try {
        const response = await fetch('https://catfact.ninja/fact')
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.error('There was an error getting the fact', error)
        return 'unknown'
    }
}