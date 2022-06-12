import { Button } from 'components/atoms/ButtonComponent/style';
import { Link } from 'react-router-dom';
import {
    MovieCard,
    Poster,
    Title,
    Description,
} from './style'

export type Movie = {
    title: string;
    backdrop_path?: string;
    genre_ids?: string[];
    id: string;
    original_language?: string;
    original_title?: string;
    overview: string;
    popularity?: number;
    poster_path: string;
    release_date?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

type Args = {
    data: Movie;
}

const MovieComponent = ({
    data,
}: Args) => {
    const { title, poster_path, overview } = data;
    const imgUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '../assets/img/posterDummy.jpg'

    return (
        <MovieCard>
            <Poster src={imgUrl} alt={title} />
            <Title>{title}</Title>
            <Description>{overview}</Description>
            <Link to={`/movie/${data.id}`}><Button>Read more</Button></Link>
        </MovieCard>
    )
}

export default MovieComponent
