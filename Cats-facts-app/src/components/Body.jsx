import { useEffect, useState } from 'react'
import { getFact } from '../services/fetch-sentence'
import './Body.css'
import { CatSentence, CatImg, NewFactBtn, Loader } from './index'

export const Body = () => {

    const [fact, setFact] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(null)

    const getFactResponse = async() => {
        setIsLoading(true)
        try {
            const factResponse = await getFact()
            setFact(factResponse)
        } catch (error) {
            setError(error)
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getFactResponse()
    }, [])


    return (
        <main>
            <h1>Learn Random Cat <span class="fancy">Facts</span></h1>
           {
            (isLoading === true)
            ? (<>
                <Loader/>
               </>
               )
            : (
                <>
                <CatImg></CatImg>
                <CatSentence text={fact}></CatSentence>  
                </>
            ) 
}
{/*             <CatImg></CatImg>
            <CatSentence text={fact}></CatSentence>   */}     
            <NewFactBtn onClick={getFactResponse}></NewFactBtn>
        </main>

    )
}
