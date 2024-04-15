export const getImg = async(text) =>{
    try {
        const img = await fetch(`https://cataas.com/cat/says/${text}?fontSize=25&fontColor=white`)
        console.log(img)
        return img.url
    } catch (error) {
        console.error('There was an error getting the image', error)/* 
        return 'https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1020%2C1020&ssl=1' */
    }
}