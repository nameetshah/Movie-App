import React from "react";
import {Wrapper, Content} from "./Grid.styles";

const Grid = ({ header, children}) => (
    <Wrapper>
        <h1 style={{color: 'black'}}>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

export default Grid;
