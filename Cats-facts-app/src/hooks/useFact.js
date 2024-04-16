import { useEffect, useState } from 'react'
import { getFact, getImg } from '../services'

export const useFact = () => {
    const [fact, setFact] = useState(null)
    const [image, setimage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getFactResponse = async () => {
        setIsLoading(true)
        try {
            const factResponse = await getFact()
            setFact(factResponse)

            const factEdited = factResponse.split(' ').slice(0, 4).join(' ')
            const imgResponse = await getImg(factEdited)
            setimage(imgResponse)

            setIsLoading(false)
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    const reloadApp = () => {
        window.location.reload();
    }

    useEffect(() => {
        getFactResponse()
    }, [])

    return {
        fact,
        image,
        isLoading,
        error,
        getFactResponse,
        reloadApp
    }
}