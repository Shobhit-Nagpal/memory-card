import React, {useEffect, useState} from "react";
import Card from "./Card";
import jimHalpertImage from "../images/jim-halpert.png";
import michealScottImage from "../images/michael-scott.png";
import dwightSchruteImage from "../images/dwight-schrute.png";
import pamBeeslyImage from "../images/pam-beesly.png";
import angelaMartinImage from "../images/angela-martin.png";
import stanleyHudsonImage from "../images/stanley-hudson.png";
import andyBernardImage from "../images/andy-bernard.png";
import erinHannonImage from "../images/erin-hannon.png";
import kellyKapoorImage from "../images/kelly-kapoor.png";


const Characters = (props) => {

    const {increment, evaluateBestScore, reset} = props;

    const cast = {
        jim: {
            id: 1,
            name: 'Jim Halpert',
            imgSrc: jimHalpertImage,
            clicked: false
        },
        pam: {
            id: 2,
            name: 'Pam Beesly',
            imgSrc: pamBeeslyImage,
            clicked: false
        },
        micheal: {
            id: 3,
            name: 'Micheal Scott',
            imgSrc: michealScottImage,
            clicked: false
        },
        dwight: {
            id: 4,
            name: 'Dwight Schrute',
            imgSrc: dwightSchruteImage,
            clicked: false
        },
        angela: {
            id: 5,
            name: 'Angela Martin',
            imgSrc: angelaMartinImage,
            clicked: false
        },
        stanley: {
            id: 6,
            name: 'Stanley Hudson',
            imgSrc: stanleyHudsonImage,
            clicked: false
        },
        andy: {
            id: 7,
            name: 'Andy Bernard',
            imgSrc: andyBernardImage,
            clicked: false
        },
        erin: {
            id: 8,
            name: 'Erin Hannon',
            imgSrc: erinHannonImage,
            clicked: false
        },
        kelly: {
            id: 9,
            name: 'Kelly Kapoor',
            imgSrc: kellyKapoorImage,
            clicked:false
        }


    }

    const [characters, setCharacters] = useState([]);

    const shuffleCharacters = (updatedCharacters) => {

        //A copy is being made due to pass by reference property of JS when we pass the original characters array
        const shuffleArr = [...updatedCharacters];

        //Shuffled using Fisher-Yates algorithm

        for (let i = shuffleArr.length - 1 ; i >= 0 ; i--) {
            const j = Math.floor(Math.random()*(i+1));
            [shuffleArr[i], shuffleArr[j]] = [shuffleArr[j], shuffleArr[i]];
          }

        return shuffleArr;

    }

      const resetCharacters = () => {
        const resetArr = characters.map((character) => {
        character.clicked = false;
        return character;
        });

        const randomizedArr = shuffleCharacters(resetArr);

        setCharacters(randomizedArr);
      }


      const handleClick = (id) => {

        console.log('Card clicked!');
        console.log(id);

        const person = characters.filter((character) => id === character.id);

        console.log(person);

        if (person[0].clicked) {
            evaluateBestScore();
            reset();
            resetCharacters();
        }
        else {
            increment();

            const charactersUpdate = characters.map((character) => 
                                    {if (character.id === id) {
                                        character.clicked = true;
                                    }
                                    
                                    return character});


            const shuffledArr = shuffleCharacters(charactersUpdate);
            setCharacters(shuffledArr);
        }

      }

      useEffect(() => {
        const temp = [];
        for (const key in cast) {
            temp.push(cast[key]);
        }

        const shuffledArr = shuffleCharacters(temp);
        setCharacters(shuffledArr);

    }, []);



      return (<div className="characters">
        {characters.map((character) => (
            <Card key={character.id} character={character} handleClick={handleClick}/>
        ))}
      </div>);

}

export default Characters;