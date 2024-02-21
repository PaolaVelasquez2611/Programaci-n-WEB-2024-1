import { useState } from "react"
import { Button } from "./Buttons/Button"
import { Counter } from "./Counter/Counter"



export const Body = () => {

    const [currentCounter, setCurrentCounter] = useState(0)

    const addCounter = (type) => {
        setCurrentCounter(currentCounter + 1)
    }

    const substractCounter = (type) => {

        if (currentCounter > 0) {
            setCurrentCounter(currentCounter - 1)
        } else {
            console.error("Cannot subtract anymore cows!");
        }
    }
    const resetCounter = (type) => {
        setCurrentCounter(0)
    }

    return (
        <>
            <Counter countNumber = {currentCounter}>  </Counter>

            <div className="buttons-div">
                <Button title="-" type="substract" onClick={substractCounter}></Button>
                <Button title="+" type="add" onClick={addCounter}></Button>
            </div>

            <Button title="Reset" type="reset" onClick={resetCounter}></Button>
        </>

    )
}
