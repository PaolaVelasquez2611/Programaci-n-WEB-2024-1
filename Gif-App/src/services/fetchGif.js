export const fetchGif = async(words) => {
    try {
        const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=KDRPYBhbmm5cVq6ZDkSkF9QZ2SZ6IxlH&q=${words}&limit=20&lang=es`)
        if(!res.ok){
            throw new Error("We can't find the gif :(")
        }
        const data = await res.json();
        return data
    } catch (error) {
        console.error('There was error looking the gif')
        throw error;
    }
}