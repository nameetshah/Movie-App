import React, { useContext } from "react";
import Thumb from "../Thumb";
import { IMAGE_BASE_URL} from "../../config";
import NoImage from '../../images/no_image.jpg';
import {Wrapper, Content, Text} from "./MovieInfo.styles";
import Rate from "../Rate";
import {Context} from "../../context";
import API from "../../API";

const MovieInfo = ({movie}) => {

    const [user] = useContext(Context);

    const handleRating = async value => {
        const rate = await API.rateMovie(user.sessionId, movie.id, value);
        console.log(rate)
    }


    return(
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                    image={
                        movie.poster_path
                            ? `${IMAGE_BASE_URL}${movie.poster_path}`
                            : NoImage
                    }
                    clickable={false}
                    // alt='movie-thumb'
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>SUMMARY</h3>
                    <p>{movie.overview}</p>

                    <div className='rating-directors'>
                        <div>
                            <h3>RATING</h3>
                            <div className='score'>{movie.vote_average}</div>
                        </div>
                        <div className='director'>
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {movie.directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                    {user && (
                        <div>
                            <p>Rate Movie</p>
                            <Rate callback={handleRating}/>
                        </div>
                    )}

                </Text>
            </Content>
        </Wrapper>
    );
};


export default MovieInfo;