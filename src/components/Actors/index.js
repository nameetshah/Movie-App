import React from "react";
import {Wrapper, Image} from "./Actors.styles";

const Actors =({name, character, imageUrl}) => (
    <Wrapper>
        <Image src={imageUrl} alt='actor-thumb' />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

export default Actors;