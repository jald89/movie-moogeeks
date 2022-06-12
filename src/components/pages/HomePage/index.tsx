import { Button } from 'components/atoms/ButtonComponent/style'
import Spinner from 'components/atoms/Spinner'
import PaginatorComponent from 'components/molecules/PaginatorComponent'
import MoviesListComponent from 'components/organisms/MovieListComponent'
import { getMovies } from 'providers/api'
import { useCallback, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams, useParams, Link } from 'react-router-dom'
import Logo from '../../../assets/img/logo.svg'
import {
    Container,
    InputText,
    Nav,
    NavTools,
    Wrapper,
} from "./style"

const HomePage = () => {
    const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const search = searchParams.get('search') || params.search || ''
    const [searchValue, setSerachValue] = useState(search)
    const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || 1)
    const [lastPage, setLastPage] = useState(1)

    const {
        data,
        isLoading,
        isFetching,
     } = useQuery(
        ['movies', currentPage, searchValue],
        () => getMovies(currentPage, searchValue),
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
        },
    )
    
    useEffect(() => {
        if (data) {
            setCurrentPage(data.page)
            setLastPage(data.total_pages)
        }
    }, [data])

    useEffect(() => {
        if (searchValue) {
            setCurrentPage(0)
            setSearchParams({
                page: `${currentPage}`,
                search: searchValue,
            })
        }
    }, [searchValue, setSearchParams, currentPage])

    const prevCallback = useCallback(() => {
        setCurrentPage((prev) => {
            const prevPage = prev - 1
            setSearchParams({
                page: `${prevPage}`,
                search: searchValue,
            })
            return prevPage
        })
    }, [searchValue, setSearchParams])

    const nextCallback = useCallback(() => {
        setCurrentPage((prev) => {
            const nextPage = prev + 1
            setSearchParams({
                page: `${nextPage}`,
                search: searchValue,
            })
            return nextPage
        })
    }, [searchValue, setSearchParams])

    return (
        <Wrapper> 
            <Nav>
                <div>
                    <img src={Logo} alt="logo" style={{
                        width: '100%',
                        maxHeight: '100%',
                    }}/>
                </div>
                <NavTools>
                    <InputText
                        type='text'
                        placeholder='Search movie'
                        value={searchValue}
                        onChange={(event) => setSerachValue(event.target.value)
                    }/>
                    <Link to='/mylist'><Button> My list </Button></Link>
                </NavTools>
            </Nav>
            <Container>
                {!data?.results ? (<Spinner title="No movies :("/>) : (
                    <>
                        <MoviesListComponent
                            title={searchValue || 'Popular Movies'}
                            isLoading={isLoading || isFetching}
                            data={data?.results || []}
                        />
                        {data?.results && (<PaginatorComponent 
                            currentPage={currentPage}
                            lastPage={lastPage}
                            onPreviusClick={prevCallback}
                            onNextClick={nextCallback}
                        />)}
                    </>
                )}
            </Container>
        </Wrapper>
    )
}

export default HomePage
