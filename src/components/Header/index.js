import React, {useContext} from "react";

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import {Link} from "react-router-dom";

import {Wrapper, Content, TMDBLogoImg, LogoImg} from "./Header.styles";
import {Context} from "../../context";

const Header = () => {

    const [user] = useContext(Context);
    console.log('User', user)

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
                </Link>

                {user ? (
                        <span className='loggedIn'>Logged In as : {user.username}</span>
                    )
                    :
                    (
                        <Link to='/login'>
                            <span className='login'>Login</span>
                        </Link>
                    )}

                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
            </Content>
        </Wrapper>
    )
};

export default Header;