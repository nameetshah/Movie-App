import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {GlobalStyle} from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import UserProvider from "./context";
import Login from "./components/Login";

const App = () => (
    <>
        <Router>
            <UserProvider>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/:movieId' element={<Movie/>} />
                <Route path='/*' element={<NotFound/>} />
            </Routes>
            <GlobalStyle/>
            </UserProvider>
        </Router>
    </>
);

export default App;
