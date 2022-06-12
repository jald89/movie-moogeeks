import styled from "styled-components";

export const MoviesContainer = styled.div`
    background-color: #f5f5f5;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const MovieCard = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
`

export const Poster = styled.img`
    max-width: 100%;
`

export const Title = styled.h2`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Description = styled.p`
    width: 100%;
    font-size: 16px;
    color: #666;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
`