import React from "react"
import { Button } from "components/atoms/ButtonComponent/style"
import Logo from '../../../assets/img/logo.svg'
import Spinner from "components/atoms/Spinner"
import { getMovie } from "providers/api"
import { useQuery } from "react-query"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Nav, Wrapper } from "../HomePage/style"
import { Title } from "components/organisms/MovieListComponent/style"
import { Description } from "components/molecules/MoviesComponent/style"
import { ContainerMovie, MainInfo, Poster } from "./style"
import RaititngComponent from "components/organisms/RaitingComponent"

type GenresType = {
    id: number;
    name: string;
}

const MoviePage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { id } = params

    const {
        data,
        isLoading,
        isFetching,
     } = useQuery(
        ['movie', id],
        () => getMovie(id || ''),
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
        },
    )

    if (isLoading || isFetching) {
        return (<Spinner />)
    }

    const imgUrl = data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : '../assets/img/posterDummy.jpg'

    return (
        <Wrapper>
            <Nav>
                <div>
                    <Link to='/'>
                        <img src={Logo} alt="logo" style={{
                            width: '100%',
                            maxHeight: '100%',
                        }}/>
                    </Link>
                </div>
                <div>
                    <Button onClick={() => navigate(-1)}> Back </Button>
                    <Link to='/mylist'><Button> My list </Button></Link>
                </div>
            </Nav>
            <ContainerMovie>
                <Poster src={imgUrl} alt={data.original_title} />
                <MainInfo>
                    <Title>{data.title}</Title>
                    <Description><b>Overview:</b>{data.overview}</Description>
                    <Description><b>Original language:</b> {data.original_language}</Description>
                    <Description><b>Original title:</b> {data.original_title}</Description>
                    <Description><b>Family friendy:</b> {data.adult ? 'No' : 'Yes'}</Description>
                    <Description><b>Release date:</b> {data.release_date}</Description>
                    <Description><b>Genres:</b> {data.genres.map((genres: GenresType) => (`${genres.name} `))}</Description>
                </MainInfo>
                <RaititngComponent id={data.id} title={data.original_title} poster={data.poster_path || '../assets/img/posterDummy.jpg'} />
            </ContainerMovie>
        </Wrapper>
    )
}

export default MoviePage
