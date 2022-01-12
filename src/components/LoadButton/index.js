import React from "react";
import {Wrapper} from "./LoadButton.styles";

const LoadButton = ({text, callback}) => (
    <Wrapper type='button' onClick={callback}>
        {text}
    </Wrapper>
);

export default LoadButton
