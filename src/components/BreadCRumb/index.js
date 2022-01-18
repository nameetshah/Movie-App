import React from "react";
import {Link} from "react-router-dom";
import {Wrapper, Content} from "./BreadCrumb.styles";

const BreadCrumb = ({movieTitle}) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span style={{textDecorationLine: 'underline'}}>Home</span>
            </Link>
            <span>/</span>
            <span style={{textDecorationLine: 'underline'}}>{movieTitle}</span>
        </Content>
    </Wrapper>
);

export default BreadCrumb;