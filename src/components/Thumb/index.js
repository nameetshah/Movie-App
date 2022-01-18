import React from "react";
import {Image1, Image, Div} from './Thumb.styles';
import {Link} from "react-router-dom";
import style from './style.css'

const Thumb = ({image, movieId, clickable, movieName}) => {
    return (
        <div className='hover-effect'>
            {clickable ? (
                    <Link to={`/${movieId}`}>
                        <Image src={image} alt='movie-thumb'/>
                        <Div className='text-effect'>
                            <h3 className='csssss'>{movieName}</h3>
                        </Div>
                        {/*<Image1 src={movieName} alt='name' />*/}

                    </Link>
                )
                :
                (
                    <>
                        <Image src={image} alt='movie-thumb'/>
                        <Div className='text-effect'>
                            <h3 className='csssss'>{movieName}</h3>
                        </Div>
                    </>
                )
            }
        </div>
    )
}


export default Thumb;
