import React from "react";
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";
import NoImage from '../images/no_image.jpg';
import {useHomeFetch} from "../hooks/useHomeFetch";
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import LoadButton from "./LoadButton";

const Home = () => {
    const {state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore} = useHomeFetch();
    console.log('State...', state);

    if (error) {
        return <div>Something went wrong...!!</div>
    }

    return (
        <>
            {/*{state.results[1] ?*/}
                <HeroImage
                    image={`${IMAGE_BASE_URL}${state.results[1]?.poster_path}`}
                    title={state.results[1]?.original_title}
                    text={state.results[1]?.overview}
                />
        <SearchBar setSearchTerm={setSearchTerm}/>
                {/*: null*/}
            {/*}*/}
            <div>

            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            </div>
            {loading && <Spinner/>}
            {state.page < state.total_pages && !loading && (
                <LoadButton text='Load More' callback={() => setIsLoadingMore(true)} />
            )}
        </>
    )
}

export default Home;