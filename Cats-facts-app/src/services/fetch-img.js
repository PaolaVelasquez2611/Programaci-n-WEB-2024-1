export const getImg = async(text) =>{
    try {
        const response = await fetch(`https://cataas.com/cat/says/${text}`)
        const img = await response.json();
        console.log(img)
        return img
    } catch (error) {
        console.error('There was an error getting the image', error)
        return 'https://i.imgflip.com/1n186m.jpg'
    }
}