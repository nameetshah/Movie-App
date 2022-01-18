import React, {useState, useContext} from "react";
import {useNavigate} from 'react-router-dom';
import API from "../API";
import LoadButton from "./LoadButton";
import {Wrapper} from "./Login.styles";
import {Context} from "../context";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();
    console.log('User...', user)

    const handleSubmit = async () => {
        setError(false);
        try{
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken,
                username,
                password
            );
            console.log('SessionId',sessionId)
            setUser({sessionId: sessionId.session_id, username});
            navigate('/');
        }
        catch (error) {
            setError(true)
        }

    };

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
};

    return(
        <>
        <Wrapper>
            <label style={{fontWeight: 'bold'}}>Username:</label>
            <input
                type='text'
                value={username}
                name='username'
                onChange={handleInput}
            />
            <label style={{fontWeight: 'bold'}}>Password:</label>
            <input
                type='password'
                value={password}
                name='password'
                onChange={handleInput}
            />
            <LoadButton text='Login' callback={handleSubmit} />
            {error && <div className='error' style={{color: 'red', fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>Please check username and password again..!!</div>}
        </Wrapper>
        </>
    );
};

export default Login;