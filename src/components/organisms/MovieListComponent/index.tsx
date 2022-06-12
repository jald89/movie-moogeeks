import Spinner from "components/atoms/Spinner"
import MovieComponent, { Movie } from "components/molecules/MoviesComponent"
import {
    MovieGrid,
    Title,
} from './style'

type Args = {
    data: Movie[],
    title: string,
    isLoading: boolean,
}
const MoviesListComponent = ({
    data,
    title,
    isLoading,
}: Args) => {
    if (isLoading) {
        return (<Spinner />)
    }

    if (!data) {
        return (<Spinner />)
    }

    return (
        <>
            <Title>{title}</Title>
            <MovieGrid>
                {data.map((movie: Movie) => {
                    return (
                        <MovieComponent
                            key={movie.id}
                            data={movie}
                        />
                    )
                })}
            </MovieGrid>
        </>
    )
}

export default MoviesListComponent
