export const getImg = async(text) =>{
    try {
        const img = await fetch(`https://cataas.com/cat/says/${text}?fontSize=40&fontColor=white`)
        return img.url
    } catch (error) {
        console.error('There was an error getting the image', error)
        return 
    }
}