import { useEffect, useState } from 'react'
import { getFact } from '../services/fetch-sentence'
import './Body.css'
import { CatSentence, CatImg, NewFactBtn } from './index'

export const Body = () => {

    const [fact, setFact] = useState(null)

    const getFactResponse = async() => {
        const factResponse = await getFact()
        setFact(factResponse)
    }

    useEffect(()=>{
        getFactResponse()
    }, [])

    return (
        <main>
            <h1> Cat Facts !</h1>
            <CatImg></CatImg>
            <CatSentence text={fact}></CatSentence>
            <NewFactBtn onClick={getFactResponse}></NewFactBtn>
        </main>

    )
}
