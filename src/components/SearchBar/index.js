import React, {useState, useEffect, useRef} from "react";
import searchIcon from '../../images/search-icon.svg';
import {Wrapper, Content} from "./SearchBar.styles";

const SearchBar = ({setSearchTerm}) => {

    const [state, setState] = useState('');
    const initial = useRef(true);


    useEffect(() =>{
        if(initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)
        return() => clearTimeout(timer)
    }, [setSearchTerm, state])

    return(
        <Wrapper>
            <Content>
                <div>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type='text'
                    placeholder='Search here'
                    onChange={e=> setState(e.currentTarget.value)}
                    value={state}
                />
                </div>
            </Content>
        </Wrapper>
    );
};

export default SearchBar;
