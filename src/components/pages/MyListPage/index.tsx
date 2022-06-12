import React from "react"
import { Button } from "components/atoms/ButtonComponent/style"
import Logo from '../../../assets/img/logo.svg'
import Spinner from "components/atoms/Spinner"
import { Container, Nav, Wrapper } from "../HomePage/style"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { CommentRecord } from "state/reducers/Reducer"
import MoviesListComponent from "components/organisms/MovieListComponent"

const MyListPage = () => {
    const navigate = useNavigate()
    const state = useSelector((state: any) => state.comments)

    const movies = state.comments.map((item: CommentRecord) => ({
        title: item.title,
        id: item.movieId,
        overview: item.comment,
        poster_path: item.poster,
        vote_average: item.ratingValue,
    }))

    if (!state) {
        return <Spinner />
    }

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
                </div>
            </Nav>
            <Container>
                {state.comments ? (
                    <MoviesListComponent
                        title={'My voted movies'}
                        isLoading={false}
                        data={movies || []}
                    />
                ) : (<Spinner title="No movies :(" />)}
            </Container>
        </Wrapper>
    )
}

export default MyListPage
