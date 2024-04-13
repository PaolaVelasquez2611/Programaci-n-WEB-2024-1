import { useEffect, useState } from 'react'
import { getFact } from '../services/fetch-sentence'
import './Body.css'
import { CatSentence, CatImg, NewFactBtn, Loader, ErrorAlert } from './index'

export const Body = () => {

    const [fact, setFact] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

        const getFactResponse = async () => { 
            setIsLoading(true)
            try { 
                const factResponse = await getFact()
                setFact(factResponse)
                setTimeout(()=>{
                    setIsLoading(false)
                },2000)
            } catch (error) {
                setError(error)
            } 
        }


    useEffect(() => {
        getFactResponse()
    }, [])

    if(isLoading){
        return(
            <Loader/>
        )
    }
    if(error){
        return(
            <ErrorAlert/>
        )
    }

    return (
        <main>
            <h1>Learn Random Cat
                <span 
                    className="fancy">
                        Facts
                </span>
            </h1>
            <CatImg/>
            <CatSentence 
                text={fact}/>
            <NewFactBtn 
                text='New cat fact'
                onClick={getFactResponse}/>
        </main>

    )
}
