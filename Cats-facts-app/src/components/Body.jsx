import { useEffect, useState } from 'react'
import { getImg } from '../services/fetch-img'
import { getFact } from '../services/fetch-sentence'
import './Body.css'
import { CatSentence, CatImg, NewFactBtn, Loader, ErrorAlert } from './index'

export const Body = () => {

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

            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        } catch (error) {
            setError(error)
        }
    }


    useEffect(() => {
        getFactResponse()
    }, [])


    if (isLoading) {
        return (
            <Loader />
        )
    }
    if (error) {
        return (
            <ErrorAlert />
        )
    }

    return (
        <main>
            <h1>
                Learn more about<br></br>Cat&nbsp;
                    <span className="fancy">
                        Facts
                    </span>
            </h1>

            <CatImg
                src={image}
            />
            <CatSentence
                text={fact} />
            <NewFactBtn
                text='New cat fact'
                onClick={getFactResponse} />
        </main>

    )
}
