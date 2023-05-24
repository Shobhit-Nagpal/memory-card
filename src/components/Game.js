import React, {useState} from "react";
import Characters from "./Characters";

const Game = () => {

    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const increment = () => {
        setScore(score + 1);
    }

    const evaluateBestScore = () => {
        if (score > bestScore) {
            setBestScore(score);
        }
    }

    const reset = () => {
        setScore(0);
    }

    return (<>
    <div className="score">
        <h1>Score: {score}</h1>
        <h1>Best score: {bestScore}</h1>
    </div>
    <Characters increment={increment} evaluateBestScore={evaluateBestScore} reset={reset}/>
    </>)

}

export default Game;