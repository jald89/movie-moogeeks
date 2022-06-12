import axios from 'axios'

const APIKEY = process.env.REACT_API_KEY || '8f781d70654b5a6f2fa69770d1d115a3'
let baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async (
    page: number = 1,
    search: string,
) => {
    let url 
    if (!search) {
        url = ''.concat(baseURL, '/movie/popular?api_key=', APIKEY, `&page=${page}`)
    } else {
        url = ''.concat(baseURL, '/search/movie?api_key=', APIKEY, '&query=', search, `&page=${page}`)
    }
    const { data } = await axios.get(url)
    return data
}

export const getMovie = async (id: string) => {
    const url = ''.concat(baseURL, '/movie/', `${id}`, '?api_key=', APIKEY)
    const { data } = await axios.get(url)
    return data
}