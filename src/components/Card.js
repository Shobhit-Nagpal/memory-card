import React from "react";

const Card = (props) => {

    const {character, handleClick} = props;

    const click = (id) => {
        handleClick(id);
    }

    return (<div className="character" onClick={() => click(character.id)}> 

        <img src={character.imgSrc} alt={character.name}></img>
        <h1>{character.name}</h1>

    </div>)

}

export default Card;