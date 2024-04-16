
import { useFact } from '../hooks/useFact'
import './Body.css'
import { CatSentence, CatImg, NewFactBtn, Loader, ErrorAlert } from './index'

export const Body = () => {

    const {fact,
           image, 
           isLoading, 
           error, 
           getFactResponse,
           reloadApp} = useFact()

    if (isLoading) {
        return (
            <Loader />
        )
    }
    if (error) {
        return (
        <>
            <h2>Learn more about</h2>
            <h1>
                Cat&nbsp;
                    <span className="fancy">
                        Facts
                    </span>
            </h1>
            <ErrorAlert 
                text={"Sorry, we're looking what happened"}/>
            <NewFactBtn
                text='Try again'
                onClick={reloadApp} />
        </>
        )
    }

    return (
        <main>
            <h2>Learn more about</h2>
            <h1>
                Cat&nbsp;
                    <span className="fancy">
                        Facts
                    </span>
            </h1>
            <CatImg
                src={image}/>
            <CatSentence
                text={fact} />
            <NewFactBtn
                text='New cat fact'
                onClick={getFactResponse} />
        </main>

    )
}
