import { useState } from "react"
import { Button } from "./Buttons/Button"
import { Counter } from "./Counter/Counter"
import addSound from '../../assets/cow-sound-add.mp3'
import subtractSound from '../../assets/cow-sound-sub.mp3'




export const Body = () => {

    const [currentCounter, setCurrentCounter] = useState(0)
    const audioAdd = new Audio(addSound);
    const audioSubtract = new Audio(subtractSound);
  

    const changeCounter = (type) => {

        if (type === "add") {
            setCurrentCounter(currentCounter + 1)
            audioAdd.play();


        } else if (type === "substract" && currentCounter > 0) {
            setCurrentCounter(currentCounter - 1)
            audioSubtract.play();

        } else if (type === "reset") {
            setCurrentCounter(0)

        }
    }

    return (
        <>
            <Counter countNumber={currentCounter}>  </Counter>

            <div className="buttons-div">
                <Button title="-" type="substract" onClick={changeCounter}></Button>
                <Button title="+" type="add" onClick={changeCounter}></Button>
            </div>

            <Button title="Reset" type="reset" onClick={changeCounter}></Button>
        </>

    )
}
