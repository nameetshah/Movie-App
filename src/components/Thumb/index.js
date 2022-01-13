import React from "react";
import {Image} from './Thumb.styles';
import {Link} from "react-router-dom";

const Thumb = ({image, movieId, clickable, movieName}) => {
    return (
        <div className='hover-effect'>
            {clickable ? (
                    <Link to={`/${movieId}`} >
                        <Image src={image} alt='movie-thumb' />
                        {/*<div className='text-effect'>{movieName}</div>*/}
                    </Link>
                )
                :
                (
                    <Image src={image} alt='movie-thumb'/>
                )
            }
        </div>
    )
}



export default Thumb;
