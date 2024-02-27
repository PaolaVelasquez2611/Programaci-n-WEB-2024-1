import { useState } from "react"
import {Button,Counter} from "./index"
import addSound from '../../assets/cow-sound-add.mp3'
import subtractSound from '../../assets/cow-sound-sub.mp3'
import cowImage from '../../assets/poster.png';

export const Body = () => {

    const [currentCounter, setCurrentCounter] = useState(0)
    const [cowImages, setCowImages] = useState(0);
    const audioAdd = new Audio(addSound);
    const audioSubtract = new Audio(subtractSound);

    const changeCounter = (type) => {

        if (type === "add") {
            setCurrentCounter(currentCounter + 1)
            setCowImages(cowImages + 1);
            audioAdd.play();

        } else if (type === "substract" && currentCounter > 0) {
            setCurrentCounter(currentCounter - 1)
            setCowImages(cowImages - 1);
            audioSubtract.play();

        } else if (type === "reset") {
            setCurrentCounter(0)
            setCowImages(0);
        }
    }
    const renderCowImages = () => {
        const images = [];
        for (let i = 0; i < cowImages; i++) {
            images.push(<img key={i} src={cowImage} alt={`Cow ${i}`} />);
        }
        return images;
    };
    return (
        <>
            <Counter countNumber={currentCounter} />
            <div className="cow-images">
                {renderCowImages()}
            </div>
            <div className="buttons-div">
                <Button title="-"
                    type="substract"
                    id="substract"
                    onClick={changeCounter}>
                </Button>
                <Button title="+"
                    type="add"
                    id="add"
                    onClick={changeCounter}>
                </Button>
            </div>
            <Button title="Reset"
                type="reset"
                id="reset"
                onClick={changeCounter}>
            </Button>
        </>

    );
};
